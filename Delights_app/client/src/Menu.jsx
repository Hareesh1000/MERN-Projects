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

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

function MenuBar() {
  // Three dot menu Material UI codes below-----------------------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              {/* If you're using react-router, consider:
                 <Link component={RouterLink} to="/" id="logo">Delights</Link>
                 Otherwise use href below. */}
              <Link href="/" id="logo">
                Delights
              </Link>
            </Typography>

            {/* Menu Buttons */}
            <Button
              color="inherit"
              id="signinButton"
              startIcon={<AccountCircleIcon />}
            >
              Sign In
            </Button>

            <IconButton color="inherit" id="cart">
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>

            {/* menu  icon button----------------------------------- */}
            <React.Fragment>
              <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                // ⬇⬇ KEY FIX: prevent body scrollbar from disappearing (no layout jump)
                disableScrollLock
                // Optional: keep in DOM for smoother open/close
                keepMounted
                // Your styling (migrated to slotProps like your original)
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      width: 200,      // keep menu width consistent
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
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default MenuBar;
