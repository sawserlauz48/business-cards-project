import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/CardComponent";
import { toast } from "react-toastify";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";

const HomePage = () => {
  const [cardsArr, setCardsArr] = useState(null);
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards/cards")
      .then(({ data }) => {
        filterFunc(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
        toast.error("Oops");
      });
  }, []);
  const filterFunc = (data) => {
    if (!originalCardsArr && !data) {
      return;
    }
    let filter = "";
    if (qparams.filter) {
      filter = qparams.filter;
    }
    if (!originalCardsArr && data) {
      setOriginalCardsArr(data);
      setCardsArr(
        data.filter(
          (card) =>
            card.bizNumber.startsWith(filter) || card.title.startsWith(filter)
        )
      );
      return;
    }
    if (originalCardsArr) {
      let newOriginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
      setCardsArr(
        newOriginalCardsArr.filter(
          (card) =>
            card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
        )
      );
    }
  };
  useEffect(() => {
    filterFunc();
  }, [qparams.filter]);
  const handleDeleteFromInitialCardsArr = async (id) => {
    try {
      await axios.delete("/cards/" + id);
      setCardsArr((newCardsArr) =>
        newCardsArr.filter((item) => item._id != id)
      );
    } catch (err) {
      console.log("error when deleting", err.response.data);
    }
  };
  const handleEditFromInitialCardsArr = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleCardClick = (id) => {
    navigate(`/cardinfo/${id}`);
  };
  const handleLikeBtn = async (id, ev) => {
    try {
      await axios.patch(`/cards/card-like/${id}`);
      if (ev.target.outerText == "LIKE") {
        toast.success("The card has been added to your favorite cards");
      } else {
        toast.success("The card has been removed from your favorite cards");
      }
      let newCardsArryLikes = await axios.get("/cards/cards");
      setCardsArr(newCardsArryLikes.data);
    } catch (err) {
      toast.error("opss could not remove the card from the favorite cards");
    }
  };
  if (!cardsArr) {
    return <CircularProgress />;
  }

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
        <HomeIcon />
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
      <Grid container spacing={2}>
        {cardsArr.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item._id + Date.now()}>
            <CardComponent
              id={item._id}
              likes={item.likes}
              title={item.title}
              subTitle={item.subTitle}
              address={item.street + " " + item.houseNumber + " " + item.city}
              cardNumber={item.bizNumber}
              phone={item.phone}
              img={item.image ? item.image.url : ""}
              onDelete={handleDeleteFromInitialCardsArr}
              onEdit={handleEditFromInitialCardsArr}
              onLike={handleLikeBtn}
              canEdit={payload && payload._id}
              userId={item.user_id}
              payload={payload}
              isAdmin={payload && payload.isAdmin}
              onCardClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
