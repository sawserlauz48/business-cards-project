import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/CardComponent";
import NoCardsPartial from "../components/NoCardsPartial";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MyCardsPage = () => {
  const [favCardArr, setFavCardArr] = useState([]);
  const [originalfavCardArr, setOriginalFavCardArr] = useState([]);
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/cards/get-my-fav-cards")
      .then(({ data }) => {
        setFavCardArr(data);
        filterLikes(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);

  const filterLikes = (data) => {
    if (!originalfavCardArr && !data) {
      return;
    }
    if (!originalfavCardArr && data) {
      setOriginalFavCardArr(data);
      if (originalfavCardArr) {
        let neworiginalfavCardArr = JSON.parse(
          JSON.stringify(originalfavCardArr)
        );
        setFavCardArr(neworiginalfavCardArr);
      }
    }
  };

  // const dataLikes = async (datalikes) => {
  //   try {
  //     const { ...datafromaxios } = await axios.get("/cards/get-my-fav-cards");
  //     datafromaxios.data = datalikes;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // console.log(dataLikes(data), "dataLikes");

  const handleDeleteFromInitialCardsArr = async (id) => {
    try {
      await axios.delete("/cards/" + id);
      setFavCardArr((newCardsArr) =>
        newCardsArr.filter((item) => item._id != id)
      );
    } catch (err) {
      console.log("error when deleting", err.response.data);
    }
  };
  const handleEditFromInitialCardsArr = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleLikeBtn = (id, event) => {
    if (!payload) {
      return;
    }
    axios.patch(`/cards/card-like/${id}`);
    toast.success("The card has been removed from your favorite cards");
  };

  return (
    <Box
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
        <FavoriteIcon />
      </Avatar>
      <Typography
        sx={{ mb: 2, textAlign: "center" }}
        component="div"
        variant="h5"
        maxWidth="100%"
      >
        FAVORITE CARDS
      </Typography>
      <Typography
        sx={{ mb: 2, textAlign: "center" }}
        component="div"
        variant="h6"
        maxWidth="100%"
      >
        here you can see all your favorite cards that you liked
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}></Grid>
      {favCardArr.length != 0 ? (
        <Grid container spacing={2}>
          {favCardArr.map((item) => (
            <Grid item xs={4} key={item._id + Date.now()}>
              <CardComponent
                id={item._id}
                title={item.title}
                subTitle={item.subTitle}
                address={item.street + " " + item.houseNumber + " " + item.city}
                cardNumber={item.bizNumber}
                phone={item.phone}
                description={item.description}
                img={item.image ? item.image.url : ""}
                onDelete={handleDeleteFromInitialCardsArr}
                onEdit={handleEditFromInitialCardsArr}
                canEdit={payload && payload._id}
                userId={item.user_id}
                payload={payload}
                isAdmin={payload && payload.isAdmin}
                likes={item.likes}
                onLike={handleLikeBtn}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoCardsPartial
          string={
            "Click the like button on the cards to see your favorite cards here"
          }
        />
      )}
    </Box>
  );
};

export default MyCardsPage;
