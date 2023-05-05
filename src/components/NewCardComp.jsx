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
              <Typography variant="h4" component="div">
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {subtitle}
              </Typography>
            </Grid>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>E-mail:</Typography>{" "}
                {email}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>{" "}
                {phone}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>
                  Business Number:
                </Typography>{" "}
                {bizNumber}
              </Box>
            </Grid>

            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>Country:</Typography>{" "}
                {country}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>City:</Typography>{" "}
                {city}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>Street:</Typography>{" "}
                {street}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>
                  House Number:
                </Typography>{" "}
                {houseNumber}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}>State:</Typography>{" "}
                {state}
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box variant="body2" color="text.secondary">
                <Typography sx={{ fontWeight: "bold" }}> Zip Code:</Typography>{" "}
                {zip}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default NewCardComp;
