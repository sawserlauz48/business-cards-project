import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
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
          <ContactEmergencyOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Page
        </Typography>
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="middleName"
                label="Middle Name"
                type="middleName"
                id="middleName"
                autoComplete="middleName"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="lastName"
                label="Last Name"
                type="lastName"
                id="lastName"
                autoComplete="lastName"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                type="phone"
                id="phone"
                autoComplete="phone"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="email"
                label="E-mail"
                type="email"
                id="email"
                autoComplete="email"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="imageUrl"
                label="Image url"
                type="imageUrl"
                id="imageUrl"
                autoComplete="imageUrl"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="imageAlt"
                label="Image alt"
                type="imageAlt"
                id="imageAlt"
                autoComplete="imageAlt"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="state"
                label="State"
                type="state"
                id="state"
                autoComplete="state"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                name="country"
                label="Country"
                type="country"
                id="country"
                autoComplete="country"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                name="city"
                label="City"
                type="city"
                id="city"
                autoComplete="city"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                name="street"
                label="Street"
                type="street"
                id="street"
                autoComplete="street"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                name="houseNumber"
                label="House number"
                type="houseNumber"
                id="houseNumber"
                autoComplete="password"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="zip"
                label="Zip"
                type="zip"
                id="zip"
                autoComplete="zip"
              />
              <Alert severity="warning"></Alert>
            </Grid>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Typography sx={{ p: 1 }}>
                  <Checkbox />
                  Signup as business
                </Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={ROUTES.LOGIN}>
                  <Typography variant="body2">
                    Allready have an account? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginLeft: 0 }}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" sx={{ mt: 2, mb: 1 }}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" sx={{ mt: 2, mb: 1 }}>
                  Reset
                </Button>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, marginLeft: 2 }}
            >
              Sign In
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
