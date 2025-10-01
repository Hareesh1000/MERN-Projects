import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GitHubIcon from '@mui/icons-material/GitHub';
import { drawerWidth } from './Layout';

function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar alt="John Doe" src="https://i.pravatar.cc/300" sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
