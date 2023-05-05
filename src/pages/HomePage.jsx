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
import { json, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/CardComponent";
import { toast } from "react-toastify";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";

const HomePage = () => {
  const [cardsArr, setCardsArr] = useState(null);
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [LikeState, setLikeState] = useState(null);
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

  useEffect(() => {}, [cardsArr]);
  if (!cardsArr) {
    return;
  } else {
    const initailLikeState = cardsArr.map((card) => card.likes);
  }
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
  const handleLikeBtn = (id, event) => {
    if (!payload) {
      return;
    }
    axios.patch(`/cards/card-like/${id}`);
    toast.success("The card has been add to your favorite cards");
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
      <Box
        component="img"
        image="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
      ></Box>
      <Grid container spacing={2}>
        {cardsArr.map((item) => (
          <Grid item xs={4} key={item._id + Date.now()}>
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
              // isBiz={payload && payload.isBiz}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
