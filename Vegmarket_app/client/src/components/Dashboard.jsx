import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function Dashboard() {
    const [currentYear] = useState(dayjs());

    // Sample table data
    const tableData = [
        { id: 1, name: "Tomatoes", price: 50, stock: 100 },
        { id: 2, name: "Potatoes", price: 30, stock: 200 },
        { id: 3, name: "Onions", price: 40, stock: 150 },
        { id: 4, name: "Carrots", price: 25, stock: 80 },
    ];

    return (
        <div className="dashboard">
            {/* Dashboard Header Cards */}
            <div className="dashboardHead">
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                    <Grid container spacing={3}>
                        {['Total Page Views', 'Total Users', 'Total Orders', 'Total Sales'].map((title, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Paper sx={{ p: 2 }}>
                                    <Typography variant="subtitle2">{title}</Typography>
                                    <Typography variant="h5">12345</Typography>
                                </Paper>
                            </Grid>
                        ))}
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="h6">Income Overview</Typography>
                                <Typography variant="h4">$7,650</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            {/* Date Picker */}
            <div className="dashboardBody">
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Select the Year"
                            maxDate={currentYear}
                            openTo="year"
                            views={['year', 'month']}
                            yearsOrder="desc"
                            sx={{ minWidth: 250 }}
                        />
                    </LocalizationProvider>


                </div>

                {/* Search Button */}
                <div className="searchBtn" style={{ marginTop: "16px" }}>
                    <Button variant="outlined">Search</Button>
                </div>

            </div>



            {/* Table Section */}
            <div className="table" style={{ marginTop: "24px" }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl No</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Price (₹)</TableCell>
                                <TableCell>Stock</TableCell>
                                  <TableCell>Stock</TableCell>
                                    <TableCell>Stock</TableCell>
                                      <TableCell>Stock</TableCell>
                                        <TableCell>Stock</TableCell>
                                          <TableCell>Stock</TableCell>
                                            <TableCell>Stock</TableCell>
                                              <TableCell>Stock</TableCell>
                                              

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.stock}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Dashboard;
