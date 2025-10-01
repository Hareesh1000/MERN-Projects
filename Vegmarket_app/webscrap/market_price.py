import cx_Oracle
from bs4 import BeautifulSoup
import requests
from openpyexcel import load_workbook, Workbook
from datetime import datetime, date

def get_data(url, city, file_name):
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/115.0.0.0 Safari/537.36"
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        table = soup.find('table', id='customers')
        if not table:
            print(f"[ERROR] Table not found for {city} at {url}")
            return

        rows = table.find('tfoot').find_all('tr')
        if not rows:
            print(f"[WARNING] No data rows found for {city}")
            return

        wb = load_workbook(file_name)
        if city not in wb.sheetnames:
            print(f"[WARNING] Sheet for city '{city}' not found in workbook.")
            return

        sheet = wb[city]
        row_cnt = sheet.max_row + 1

        for row in rows:
            try:
                cols = row.find_all('td')
                if len(cols) < 5:
                    continue

                name = cols[0].text.strip()
                unit = cols[1].text.strip()
                market_price = cols[2].text.strip()
                retail_price = cols[3].text.strip()
                shopping_mall = cols[4].text.strip()

                sheet.cell(row=row_cnt, column=1).value = name
                sheet.cell(row=row_cnt, column=2).value = unit
                sheet.cell(row=row_cnt, column=3).value = market_price
                sheet.cell(row=row_cnt, column=4).value = retail_price
                sheet.cell(row=row_cnt, column=5).value = shopping_mall
                sheet.cell(row=row_cnt, column=6).value = datetime.today()
                row_cnt += 1

                # Insert into DB
                db_data = (name, unit, market_price, retail_price, shopping_mall, city.upper(), datetime.today())
                insert_into_db(db_data)

            except Exception as e:
                print(f"[WARNING] Skipping a row in {city}: {e}")

        wb.save(file_name)
        print(datetime.today(), "Loaded", city, "city prices")

    except requests.RequestException as e:
        print(f"[ERROR] Failed to fetch URL {url} for {city}: {e}")
    except Exception as e:
        print(f"[ERROR] Cannot insert data for {city}: {e}")


def create_workbook(city_list):
    try:
        today_date = date.today()
        path = f"C:/Users/91812/Documents/local_drive/TN_market_price_list_{today_date}.xlsx"
        workbook = Workbook()
        workbook.save(path)
        wb = load_workbook(path)

        for city in city_list:
            if city not in wb.sheetnames:
                wb.create_sheet(city)
            sheet = wb[city]
            sheet.cell(row=1, column=1).value = 'Name'
            sheet.cell(row=1, column=2).value = 'Unit'
            sheet.cell(row=1, column=3).value = 'Market price'
            sheet.cell(row=1, column=4).value = 'Retail price'
            sheet.cell(row=1, column=5).value = 'Super Market'
            sheet.cell(row=1, column=6).value = 'Date'

        wb.save(path)
        print("Excel created")
        return path
    except Exception as e:
        print(f"[ERROR] Failed to create workbook: {e}")
        return None


def get_file_name(city_list):
    try:
        first_day = date.today().replace(day=1)
        today = date.today()
        if first_day == today:
            return create_workbook(city_list)
        else:
            return f"C:/Users/91812/Documents/local_drive/TN_market_price_list_{first_day}.xlsx"
    except Exception as e:
        print(f"[ERROR] Failed to get file name: {e}")
        return None


def get_started():
    try:
        url_list = [
            'https://market.todaypricerates.com/Coimbatore-vegetables-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Coimbatore-fruits-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Chennai-vegetables-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Chennai-fruits-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Madurai-vegetables-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Madurai-fruits-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Dindigul-vegetables-price-in-Tamil-Nadu',
            'https://market.todaypricerates.com/Dindigul-fruits-price-in-Tamil-Nadu'
        ]
        city_list = ['coimbatore','coimbatore', 'chennai', 'chennai', 'madurai','madurai', 'dindugal','dindugal']

        url_zip = dict(zip(city_list, url_list))
        file_name = get_file_name(city_list)
        if not file_name:
            print("[ERROR] File name could not be determined.")
            return

        for city in url_zip:
            s_url = url_zip.get(city)
            get_data(s_url, city, file_name)

    except Exception as e:
        print(f"[ERROR] Major process failed: {e}")


def insert_into_db(data):
    try:
        connection = cx_Oracle.connect('analyst/analyst@localhost:1521/xe')
        cursor = connection.cursor()

    except cx_Oracle.DatabaseError as e:
        print("Database connection failed:", e)
    try:
        sql = """
            INSERT INTO SCRAP_VEG_MARKET_PRICE_DAILY 
            (VEG_NAME, Unit, Market_Price, Retail_Price, Super_Market, MARKET_LOCATION, Price_Date)
            VALUES (:1, :2, :3, :4, :5, :6, :7)
        """
        cursor.execute(sql, data)
        connection.commit()
    except cx_Oracle.DatabaseError as e:
        print(f"[DB ERROR] Could not insert {data}: {e}")


def main():
    print("Market Price Loading..")
    try:
        get_started()
        # connect_to_database()
    except Exception as e:
        print(f"[ERROR] Fatal error in main: {e}")
    print("Process completed")


main()
