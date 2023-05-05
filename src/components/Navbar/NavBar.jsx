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
import { NavLink, useNavigate } from "react-router-dom";
import SearchPartial from "./SearchPartial";
import ROUTES from "../../routes/ROUTES";
import { darkThemeActions } from "../../store/darkTheme";
import { Button, Switch } from "@mui/material";
import NavLinkComponent from "./NavLinkComponent";
import { authActions } from "../../store/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);
  const isBizacc = useSelector((bigPie) => bigPie.bizAuthSlice.isBiz);
  const isAdminacc = useSelector((bigPie) => bigPie.adminAuthSlice.isAdmin);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [profilePicState, setProfilePicState] = useState(<AccountCircleIcon />);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/users/userInfo")
      .then(({ data }) => {
        console.log(data.imageUrl, "data");
        let newProfilePic = data.imageUrl;
        setProfilePicState(newProfilePic);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);
  const pages = [
    {
      label: "About",
      url: ROUTES.ABOUT,
    },
  ];
  const notAuthPages = [
    {
      label: "Register",
      url: ROUTES.REGISTER,
    },
    {
      label: "Login",
      url: ROUTES.LOGIN,
    },
  ];
  const loginPages = [
    {
      label: [profilePicState],
      url: ROUTES.PROFILE,
    },
    {
      label: "Logout",
      url: ROUTES.LOGOUT,
    },
  ];
  const authedPages = [
    {
      label: "Favorite Cards",
      url: ROUTES.FAVCARDS,
    },
  ];
  const bizPages = [
    {
      label: "My Cards",
      url: ROUTES.MYCARDS,
    },
  ];
  const adminPages = [
    {
      label: "Sandbox",
      url: ROUTES.SANDBOX,
    },
  ];
  const handelLogoBtn = () => {
    navigate(ROUTES.HOME);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const changeTheme = () => {
    dispatch(darkThemeActions.changeTheme());
  };
  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
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
            <Button fullWidth variant="contained" onClick={handelLogoBtn}>
              LOGO
            </Button>
          </Typography>
          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLinkComponent key={page.url} {...page} />
            ))}
            {isLoggedIn
              ? authedPages.map((page) =>
                  page.url === ROUTES.LOGOUT ? (
                    <NavLinkComponent key={page.url} {...page} />
                  ) : (
                    <NavLinkComponent key={page.url} {...page} />
                  )
                )
              : notAuthPages.map((page) => (
                  <NavLinkComponent key={page.url} {...page} />
                ))}
            {isBizacc
              ? bizPages.map((page) => (
                  <NavLinkComponent key={page.url} {...page} />
                ))
              : ""}
            {isAdminacc
              ? adminPages.map((page) => (
                  <NavLinkComponent key={page.url} {...page} />
                ))
              : ""}
          </Box>
          <SearchPartial />
          {isLoggedIn
            ? loginPages.map((page) =>
                page.url === ROUTES.LOGOUT ? (
                  <NavLinkComponent
                    key={page.url}
                    {...page}
                    onClick={logoutClick}
                    component={image}
                  />
                ) : (
                  <NavLinkComponent key={page.url} {...page} />
                )
              )
            : ""}
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
