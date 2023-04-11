import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";

import SearchPartial from "./SearchPartial";
import ROUTES from "../../routes/ROUTES";
import { darkThemeActions } from "../../store/darkTheme";
import { Switch } from "@mui/material";
// import NavLinkComponent from "./NavLinkComponent";

const pages = [
  {
    label: "Home",
    url: ROUTES.HOME,
  },
  {
    label: "Register",
    url: ROUTES.REGISTER,
  },
  {
    label: "Login",
    url: ROUTES.LOGIN,
  },
  {
    label: "Profile",
    url: ROUTES.PROFILE,
  },
  {
    label: "Fav cardsw",
    url: ROUTES.FAVCARDS,
  },
  {
    label: "My cards",
    url: ROUTES.MYCARDS,
  },
  {
    label: "Sandbox",
    url: ROUTES.SANDBOX,
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const changeTheme = () => {
    dispatch(darkThemeActions.changeTheme());
  };
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon />
          <Typography variant="h6" noWrap>
            LOGO
          </Typography>
          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink key={page.url} to={page.url}>
                <Typography
                  sx={{ my: 2, color: "white", display: "block", p: 2 }}
                >
                  {page.label}
                </Typography>
              </NavLink>
            ))}
          </Box>
          <SearchPartial />
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            <Typography sx={{ display: { xs: "inline" } }}>
              {isDarkTheme ? (
                <DarkModeIcon sx={{ position: "relative", top: "7px" }} />
              ) : (
                <LightModeIcon sx={{ position: "relative", top: "7px" }} />
              )}
            </Typography>
            <Switch checked={isDarkTheme} onChange={changeTheme} />
          </Box>
          {/* hamburger with menu */}
          <Box
            sx={{
              flexGrow: 1,
              flex: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
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
                  key={"miniLinks" + page.url}
                  onClick={handleCloseNavMenu}
                >
                  <NavLink to={page.url}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
