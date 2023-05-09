import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const SandboxPage = () => {
  return (
    <Box
      component="main"
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
        borderRadius: 3,
        border: "1px solid grey",
        padding: 3,
        marginTop: 7,
        marginBottom: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HomeIcon sx={{ alignItems: "center" }} />
      </Avatar>
      <Typography
        sx={{ mb: 2, textAlign: "center" }}
        component="div"
        variant="h5"
        maxWidth="100%"
      >
        Home Page
      </Typography>
      <Typography
        sx={{ mb: 2, textAlign: "center" }}
        component="div"
        variant="h6"
        maxWidth="100%"
      >
        Here in this page you can browse all the bussines card and chose to your
        liking
      </Typography>

      <Fragment>
        <h1>Nested page</h1>
        <Link to="/sandbox/nestedpage1">nested page 1</Link> |
        <Link to="/sandbox/nestedpage2">nested page 2</Link>
        <Link to="/sandbox/usememopage">Use memo page</Link>
        {/* <Link to="/sandbox/rrp">Rerender Page</Link>
        <Link to="/sandbox/rp1">Render Page 1</Link>
        <Link to="/sandbox/rp2">Render Page 2</Link> */}
        <Outlet />
      </Fragment>
    </Box>
  );
};
export default SandboxPage;
