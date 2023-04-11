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
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import { useState } from "react";
import validateRegisterSchema from "../validations/registerValidation";

const LoginPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    imageUrl: "",
    imageAlt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    biz: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
  };

  const handleSignInBtn = () => {
    const joiResponse = validateRegisterSchema(inputState);
    if (!joiResponse) {
      navigate(ROUTES.LOGIN);
    }
  };

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
                value={inputState.firstName}
                onChange={handleInputChange}
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
                value={inputState.middleName}
                onChange={handleInputChange}
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
                value={inputState.lastName}
                onChange={handleInputChange}
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
                value={inputState.phone}
                onChange={handleInputChange}
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
                value={inputState.email}
                onChange={handleInputChange}
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
                value={inputState.password}
                onChange={handleInputChange}
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
                value={inputState.imageUrl}
                onChange={handleInputChange}
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
                value={inputState.imageAlt}
                onChange={handleInputChange}
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
                value={inputState.state}
                onChange={handleInputChange}
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
                value={inputState.country}
                onChange={handleInputChange}
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
                value={inputState.city}
                onChange={handleInputChange}
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
                value={inputState.street}
                onChange={handleInputChange}
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
                autoComplete="houseNumber"
                value={inputState.houseNumber}
                onChange={handleInputChange}
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
                value={inputState.zip}
                onChange={handleInputChange}
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
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 1, p: 1 }}
                >
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
              onClick={handleSignInBtn}
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
