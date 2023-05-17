import { Avatar, Box, Grid, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import aboutCreateCard from "../images/aboutCreateCard.jpg";
import aboutCreateCard2 from "../images/aboutCreateCard2.jpg";
import cardImage from "../images/cardImage.jpg";
import search from "../images/search.jpg";

const AboutPage = () => {
  return (
    <Box component="main">
      <Box
        sx={{
          width: "100%",
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
        <Typography
          component="h2"
          variant="h6"
          sx={{ pt: 1 }}
          className="aboutImg"
        >
          Welvome to our business card website, here you can browse and find
          business cards of your liking and geting all the information geting in
          touch with them.
        </Typography>
        <Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" sx={{ pt: 5, p: 3 }}>
              1.To create a card first you will need to have a business account
              then head to "MY CARDS" at the navbaar and click the plus button
              on the bottom of the page.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={aboutCreateCard} alt="aboutPage" className="aboutImg" />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" sx={{ pt: 5, p: 3 }}>
              2.Fill out the form and click the "CREATE CARD" button, you will
              see all your cards at the "MY CARDS" section in the navbar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={aboutCreateCard2} alt="aboutPage2" className="aboutImg" />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" sx={{ pt: 5, p: 3 }}>
              3.At any given page you can click the card image to see more
              informtion about the card and also make all the actions
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={cardImage} alt="cardImage" className="aboutImg" />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" sx={{ pt: 5, p: 3 }}>
              4.You can search at the navbar for a card with their names or
              thier card Number
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={search} alt="search" className="aboutImg" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default AboutPage;
