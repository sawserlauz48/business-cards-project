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

import { useNavigate } from "react-router-dom";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import { useState } from "react";
import validateRegisterSchema from "../validations/registerValidation";
// import { toast } from "react-toastify";

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
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const navigate = useNavigate();
  const handleSignInBtn = async (ev) => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.post("/users/register", {
        name: inputState.firstName + " " + inputState.lastName,
        email: inputState.email,
        password: inputState.password,
      });
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log("error from axios", err.response.data);
      // toast.error("")
    }
  };
  const handleCancelBtn = () => {
    //move to homepage
    navigate(ROUTES.HOME);
  };
  const handleRestBtn = () => {
    setInputState(inputState);
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
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
              {inputsErrorsState && inputsErrorsState.firstName && (
                <Alert severity="warning">
                  {inputsErrorsState.firstName.map((item) => (
                    <div key={"firstName-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.middleName && (
                <Alert severity="warning">
                  {inputsErrorsState.middleName.map((item) => (
                    <div key={"middleName-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.lastName && (
                <Alert severity="warning">
                  {inputsErrorsState.lastName.map((item) => (
                    <div key={"lastName-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.phone && (
                <Alert severity="warning">
                  {inputsErrorsState.phone.map((item) => (
                    <div key={"phone-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.email && (
                <Alert severity="warning">
                  {inputsErrorsState.email.map((item) => (
                    <div key={"email-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.password && (
                <Alert severity="warning">
                  {inputsErrorsState.password.map((item) => (
                    <div key={"password-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.imageUrl && (
                <Alert severity="warning">
                  {inputsErrorsState.imageUrl.map((item) => (
                    <div key={"imageUrl-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.imageAlt && (
                <Alert severity="warning">
                  {inputsErrorsState.imageAlt.map((item) => (
                    <div key={"imageAlt-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.state && (
                <Alert severity="warning">
                  {inputsErrorsState.state.map((item) => (
                    <div key={"state-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.country && (
                <Alert severity="warning">
                  {inputsErrorsState.country.map((item) => (
                    <div key={"country-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.city && (
                <Alert severity="warning">
                  {inputsErrorsState.city.map((item) => (
                    <div key={"city-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.street && (
                <Alert severity="warning">
                  {inputsErrorsState.street.map((item) => (
                    <div key={"street-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.houseNumber && (
                <Alert severity="warning">
                  {inputsErrorsState.houseNumber.map((item) => (
                    <div key={"houseNumber-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
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
              {inputsErrorsState && inputsErrorsState.zip && (
                <Alert severity="warning">
                  {inputsErrorsState.zip.map((item) => (
                    <div key={"zip-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Typography sx={{ p: 1 }}>
                  <Checkbox />
                  Signup as business
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginLeft: 0 }}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleCancelBtn}
                  sx={{ mt: 2, mb: 1, p: 1 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleRestBtn}
                  sx={{ mt: 2, mb: 1 }}
                >
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
