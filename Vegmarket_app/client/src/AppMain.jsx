import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import { Box } from '@mui/material';

function AppMain() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Topbar />
      <Dashboard />
    </Box>
  );
}

export default AppMain;
