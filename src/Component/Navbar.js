import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Stack, Tooltip } from "@mui/material";
import NightShelterRoundedIcon from "@mui/icons-material/NightShelterRounded";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

// nav item
const pages = ["Rent", "Buy", "Sell", "Manage Property", "Resource"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { user, userSignOut } = useContext(AuthContext);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NightShelterRoundedIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "secondary.main",
            }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Estatery
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ ":hover": { backgroundColor: "#E7E6F6" } }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NightShelterRoundedIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "secondary.main",
            }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Estatery
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "primary.contrastText",
                  display: "block",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "#E7E6F6",
                    color: "secondary.main",
                  },
                  ":active": {
                    backgroundColor: "#E7E6F6",
                    color: "#6F66F8",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!user?.uid ? (
              <Stack spacing={2} direction="row">
                <Link to="login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      color: "secondary.contrastText",
                      fontWeight: "bold",
                      borderColor: "secondary.main",
                      borderRadius: "7px",
                      textTransform: "inherit",
                      ":hover": {
                        backgroundColor: "secondary.main",
                        borderColor: "secondary.main",
                        color: "#fff",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "secondary.main",
                      color: "#fff",
                      borderRadius: "7px",
                      textTransform: "inherit",
                      boxShadow: "none",
                      border: "1px solid transparent",
                      ":hover": {
                        backgroundColor: "transparent",
                        color: "secondary.main",
                        boxShadow: "none",
                        border: "1px solid #6F66F8",
                      },
                      display: { xs: "none", sm: "flex", md: "flex" },
                    }}
                  >
                    Sign up
                  </Button>
                </Link>
              </Stack>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/broken-image.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => userSignOut()}
                    >
                      Log out
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
