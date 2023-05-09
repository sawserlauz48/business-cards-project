import { Avatar, Box, Table, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const CRM = () => {
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/cards/cards/");
        // let useridarray = data.map((card) => card.user_id);
        // console.log(useridarray, "useridarray");
        // let arrayofuseridwithnodupe = removeDuplicates(useridarray);
        // console.log(arrayofuseridwithnodupe, "arrayofuseridwithnodupe");
        console.log(data, "data");
        setCardsArr(data);
      } catch (err) {
        console.log("error from axios", err);
      }
    })();
  }, []);

  const removeDuplicates = (array) => {
    return [...new Set(array)];
  };
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
        CRM Page
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
      <Table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>isbiz?</td>
          </tr>
        </thead>
        <tbody>
          {cardsArr.map((row) => (
            <tr key={row.name}>
              <td>{row.user_id}</td>
              <td>{row.firstName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default CRM;
