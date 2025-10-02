const oracledb = require('oracledb');

async function testConnection() {
  const connection = await oracledb.getConnection({
    user: 'analyst',
    password: 'analyst',
    connectString: 'localhost:1521/xe'
  });
  const result = await connection.execute(`SELECT sysdate FROM dual`);
  console.log(result.rows);
  await connection.close();
}

testConnection();
