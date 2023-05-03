import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import AddCardIcon from "@mui/icons-material/AddCard";
import { toast } from "react-toastify";
import { validateEditCardParamsSchema } from "../validations/editValidation";
import InfoIcon from "@mui/icons-material/Info";
import { Card, CardActionArea, CardHeader, CardMedia } from "@mui/material";

const CardInfo = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("/cards/card/" + id)
      .then(({ data }) => {
        setState(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
        toast.error("Oops");
      });
  }, []);
  console.log(state, "state");

  return (
    <Box component="main" maxWidth="xl">
      <Box
        sx={{
          //   marginLeft: "25vw",
          //   width: "50vw",
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
          <InfoIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CARD INFO
        </Typography>
        <Card square raised>
          <Grid container direction="row" justifyContent="flex-start">
            <Grid
              item
              sm={6}
              sx={{ justifyContent: "left", justifyItems: "left" }}
            >
              <CardHeader
                title={state.title}
                subheader={state.subTitle}
              ></CardHeader>
              <Typography sx={{ pt: 1 }}>country: {state.country}</Typography>
              <Typography sx={{ pt: 1 }}>city: {state.city}</Typography>
              <Typography sx={{ pt: 1 }}>street: {state.street}</Typography>
              <Typography sx={{ pt: 1 }}>
                houseNumber: {state.houseNumber}
              </Typography>
              <Typography sx={{ pt: 1 }}>Phone: {state.phone}</Typography>
              <Typography sx={{ pt: 1 }}>email: {state.email}</Typography>
              <Typography sx={{ pt: 1 }}>
                bizNumber: {state.bizNumber}
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <CardMedia
                component="img"
                image={state.image.url}
                sx={{ height: "400px" }}
              />
            </Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={12}>
              <Typography>Description: {state.description}</Typography>
            </Grid>
          </Grid>
        </Card>
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}></Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}></Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default CardInfo;
