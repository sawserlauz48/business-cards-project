import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";

const NewCardComp = ({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  description,
  email,
  phone,
  bizNumber,
  state,
  country,
  city,
  street,
  houseNumber,
  zip,
}) => {
  return (
    <Box sx={{ mx: "10%" }}>
      <Card
        raised
        sx={{
          width: "80vw",
          mt: 5,
          p: 2,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              height="400"
              image={imageUrl}
              alt={imageAlt}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ p: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h4" component="div">
                {title}
              </Typography>
              <Typography gutterBottom variant="h6" color="text.secondary">
                {subtitle}
              </Typography>
            </Grid>
            <Typography gutterBottom variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>E-mail:</Typography>{" "}
                {email}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>{" "}
                {phone}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>
                  Business Number:
                </Typography>{" "}
                {bizNumber}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>State:</Typography>{" "}
                {state}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>Country:</Typography>{" "}
                {country}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>City:</Typography>{" "}
                {city}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>Street:</Typography>{" "}
                {street}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>
                  House Number:
                </Typography>{" "}
                {houseNumber}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}> Zip Code:</Typography>{" "}
                {zip}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default NewCardComp;
