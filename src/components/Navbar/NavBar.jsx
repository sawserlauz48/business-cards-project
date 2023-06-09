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
import { NavLink, useNavigate } from "react-router-dom";
import SearchPartial from "./SearchPartial";
import ROUTES from "../../routes/ROUTES";
import { darkThemeActions } from "../../store/darkTheme";
import { Button, Switch } from "@mui/material";
import NavLinkComponent from "./NavLinkComponent";
import { authActions } from "../../store/auth";
import LOGO from "../../images/LOGO.jpg";
import profilePic from "../../images/profilePic.jpg";

const pages = [{ label: "About", url: ROUTES.ABOUT }];
const notAuthPages = [
  { label: "Register", url: ROUTES.REGISTER },
  { label: "Login", url: ROUTES.LOGIN },
];
const authedPages = [{ label: "Favorite Cards", url: ROUTES.FAVCARDS }];
const isLoginPages = [
  {
    label: <img className="profilePic" src={profilePic} alt="profilePic" />,
    url: ROUTES.PROFILE,
  },
  { label: "Logout", url: ROUTES.LOGOUT },
];
const bizPages = [{ label: "My Cards", url: ROUTES.MYCARDS }];
const adminPages = [{ label: "Sandbox", url: ROUTES.SANDBOX }];
const Navbar = () => {
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);
  const isBizacc = useSelector((bigPie) => bigPie.bizAuthSlice.isBiz);
  const isAdminacc = useSelector((bigPie) => bigPie.adminAuthSlice.isAdmin);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <NavLinkComponent
            url={ROUTES.HOME}
            label={<img src={LOGO} className="logo" alt="logo" />}
          ></NavLinkComponent>
          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLinkComponent key={page.url} {...page} />
            ))}
            {isLoggedIn
              ? authedPages.map((page) => (
                  <NavLinkComponent key={page.url} {...page} />
                ))
              : ""}
            {isLoggedIn && isBizacc
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
            ? isLoginPages.map((page) =>
                page.url === ROUTES.LOGOUT ? (
                  <NavLinkComponent
                    key={page.url}
                    {...page}
                    onClick={logoutClick}
                  />
                ) : (
                  <NavLinkComponent key={page.url} {...page} />
                )
              )
            : notAuthPages.map((page) => (
                <NavLinkComponent key={page.url} {...page} />
              ))}
          <Box></Box>
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
                display: { xs: "block", sm: "block", md: "none" },
                flexGrow: 1,
                flex: 1,
                flexDirection: "column",
              }}
            >
              {pages.map((page) => (
                <NavLinkComponent key={page.url} {...page} />
              ))}
              {isLoggedIn
                ? authedPages.map((page) =>
                    page.url === ROUTES.LOGOUT ? (
                      <NavLinkComponent
                        key={page.url}
                        {...page}
                        onClick={logoutClick}
                      />
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
