import { Box, Button, Grid } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const MyCardsPage = () => {
  // const [myCardArr, setMyCardArr] = useState(null);
  const navigate = useNavigate();

  const handlePlusBtn = () => {
    navigate(ROUTES.EDIT);
  };

  return (
    <Box>
      <h1>MyCardsPage</h1>
      <Grid container spacing={2}></Grid>
      <Button
        onClick={handlePlusBtn}
        variant="contained"
        sx={{
          position: "absolute",
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
