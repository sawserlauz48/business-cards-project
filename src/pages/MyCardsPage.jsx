import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import axios from "axios";
import CardComponent from "../components/CardComponent";
import NoCardsPartial from "../components/NoCardsPartial";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import StyleIcon from "@mui/icons-material/Style";

const MyCardsPage = () => {
  const [myCardArr, setMyCardArr] = useState([]);
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const navigate = useNavigate();
  const handlePlusBtn = () => {
    navigate(ROUTES.CREATCARD);
  };
  useEffect(() => {
    axios
      .get("/cards/my-cards")
      .then(({ data }) => {
        setMyCardArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);

  const handleDeleteFromInitialCardsArr = async (id) => {
    try {
      await axios.delete("/cards/" + id);
      setMyCardArr((newCardsArr) =>
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
        <StyleIcon />
      </Avatar>

      <Typography
        sx={{ mb: 2, textAlign: "center" }}
        component="div"
        variant="h5"
        maxWidth="100%"
      >
        My Cards
      </Typography>
      <Typography
        sx={{ mb: 2, textAlign: "center" }}
        component="div"
        variant="h6"
        maxWidth="100%"
      >
        In this page you will see all the cards that you maked and browse throgh
        them
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}></Grid>
      {/* {useMemo(()=>{},[])} */}
      {myCardArr.length != 0 ? (
        <Grid container spacing={2}>
          {myCardArr.map((item) => (
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
                onLike={handleLikeBtn}
                likes={item.likes}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoCardsPartial string={"Click the plus button to create cards"} />
      )}
      <Button
        onClick={handlePlusBtn}
        variant="contained"
        sx={{
          position: "fixed",
          borderRadius: "100%",
          height: "60px",
          bottom: "30px",
          right: "30px",
        }}
      >
        <AddRoundedIcon sx={{ height: "30px" }} />
      </Button>
    </Box>
  );
};

export default MyCardsPage;
