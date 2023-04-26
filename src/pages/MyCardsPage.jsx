import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import axios from "axios";
import CardComponent from "../components/CardComponent";
import NoCardsPartial from "../components/NoCardsPartial";
import { useSelector } from "react-redux";

const MyCardsPage = () => {
  const [myCardArr, setMyCardArr] = useState([]);
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const navigate = useNavigate();
  const handlePlusBtn = () => {
    navigate(ROUTES.CREATCARD);
  };
  console.log(myCardArr.length, "myCardArr.length");

  useEffect(() => {
    axios
      .get("/cards/my-cards")
      .then(({ data }) => {
        setMyCardArr(data);
        console.log(data, "data");
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

  return (
    <Box>
      <h1>MyCardsPage</h1>
      <Grid container spacing={2}></Grid>
      {myCardArr.length != 0 ? (
        <Grid container spacing={2}>
          {myCardArr.map((item) => (
            <Grid item xs={4} key={item._id + Date.now()}>
              <CardComponent
                id={item._id}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                img={item.image ? item.image.url : ""}
                onDelete={handleDeleteFromInitialCardsArr}
                onEdit={handleEditFromInitialCardsArr}
                canEdit={payload && payload._id}
                userId={item.user_id}
                payload={payload}
                isAdmin={payload && payload.isAdmin}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoCardsPartial />
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
