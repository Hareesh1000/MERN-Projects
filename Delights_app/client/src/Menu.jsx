import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';



export default function MenuBar() {


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '3px',
    fontSize:'9px',
    background:"red"
  },
}));

  return (
    <div className="menu">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" className="menuBar">
          <Toolbar>
            {/* Logo / App Name */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/' id='logo'>Delights</Link>
            </Typography>

            {/* Menu Buttons */}
            <Button color="inherit" id="signinButton" startIcon={<AccountCircleIcon />}>
              Sign In
            </Button>

            <IconButton color="inherit" id="cart">
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
