import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

function MenuBar({cartItemCount}) {

  
  // -----------cart menu---------------------------   cart menu is disabled, need to develop later
  const [cartAnchorEl, setCartAnchorEl] = React.useState(null);
  const cartOpen = Boolean(cartAnchorEl);

  const handleCartClick = (event) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  // ------------------Account menu---------------
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const accountOpen = Boolean(accountAnchorEl);

  const handleAccountClick = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  // -------------------- Styled Badge --------------------
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: 5,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "3px",
      fontSize: "9px",
      background: "red",
    },
  }));

  return (
    <div className="menu">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" className="menuBar">
          <Toolbar>
            {/* Logo / App Name */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" id="logo">
                Delights
              </Link>
            </Typography>

            {/* Sign In button */}
            <Button
              color="inherit"
              id="signinButton"
              startIcon={<AccountCircleIcon />}
            >
              Sign In
            </Button>

            {/* CART BUTTON + MENU --------------------------------------------------------- */}
            
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
              <Tooltip title="Cart">
                <IconButton
                  color="inherit"
                  id="cart"
                  onClick={handleCartClick}
                  sx={{ ml: 2 }}
                  aria-controls={cartOpen ? "cart-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={cartOpen ? "true" : undefined}
                >
                  <StyledBadge badgeContent={cartItemCount} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </Box>

            {/* <Menu
              anchorEl={cartAnchorEl}
              id="cart-menu"
              open={cartOpen}
              onClose={handleCartClose}
              disableScrollLock
              keepMounted
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    width: 400,
                    maxWidth: 2000,
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <p>Items</p>
              <MenuItem onClick={handleCartClose}>Classic Margherita Pizza</MenuItem>
              <MenuItem onClick={handleCartClose}>Classic Margherita Pizza</MenuItem>
            </Menu> */}

            {/* ACCOUNT BUTTON + MENU */}
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleAccountClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={accountOpen ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={accountOpen ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>

            <Menu
              anchorEl={accountAnchorEl}
              id="account-menu"
              open={accountOpen}
              onClose={handleAccountClose}
              disableScrollLock
              keepMounted
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    width: 200,
                    maxWidth: 200,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <MenuItem onClick={handleAccountClose}>
                <Avatar /> Profile
              </MenuItem> */}

                  <MenuItem onClick={handleAccountClose} component={Link} to='/my-account'>
             
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleAccountClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleAccountClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default MenuBar;
