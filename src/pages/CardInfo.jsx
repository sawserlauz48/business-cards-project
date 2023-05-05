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
import { Card, CardActionArea, CardHeader, CardMedia } from "@mui/material";
import CardComponent from "../components/CardComponent";
import NewCardComp from "../components/NewCardComp";
import InfoIcon from "@mui/icons-material/Info";

const CardInfo = () => {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/cards/card/" + id)
      .then(({ data }) => {
        let newInputState = {
          ...data,
        };
        if (data.image && data.image.url) {
          newInputState.imageUrl = data.image.url;
        } else {
          newInputState.imageUrl = "";
        }
        if (data.image && data.image.alt) {
          newInputState.imageAlt = data.image.alt;
        } else {
          newInputState.imageAlt = "";
        }
        delete newInputState.image;
        delete newInputState.__v;
        delete newInputState._id;
        delete newInputState.user_id;
        delete newInputState.createdAt;
        setState(newInputState);
      })
      .catch((err) => {
        console.log("err from axios", err);
        toast.error("Oops something went wrong");
      });
  }, [id]);

  return (
    <Box
      component="main"
      sx={{
        marginLeft: "5%",
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
        <InfoIcon />
      </Avatar>
      <Typography
        sx={{ my: 2, textAlign: "center" }}
        component="div"
        variant="h5"
        maxWidth="100%"
      >
        CARD INFO
      </Typography>
      <NewCardComp
        imageUrl={state.imageUrl}
        imageAlt={state.imageAlt}
        title={state.title}
        subtitle={state.subTitle}
        description={state.description}
        email={state.email}
        phone={state.phone}
        bizNumber={state.bizNumber}
        state={state.state}
        country={state.country}
        city={state.city}
        street={state.street}
        houseNumber={state.houseNumber}
        zip={state.zip}
      />
    </Box>
  );
};
export default CardInfo;
