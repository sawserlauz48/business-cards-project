import { Avatar, Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const AboutPage = () => {
  return (
    <Box component="main">
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
          <InfoOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          About Page
        </Typography>
      </Box>
    </Box>
  );
};
export default AboutPage;
