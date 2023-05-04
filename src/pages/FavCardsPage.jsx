import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/CardComponent";
import NoCardsPartial from "../components/NoCardsPartial";
import { useSelector } from "react-redux";

const MyCardsPage = () => {
  const [favCardArr, setFavCardArr] = useState([]);
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/cards/get-my-fav-cards")
      .then(({ data }) => {
        setFavCardArr(data);
        console.log(data, "data");
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);
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

  return (
    <Box>
      <h1>MyCardsPage</h1>
      <Grid container spacing={2}></Grid>
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
