import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
