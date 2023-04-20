import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validateRegisterSchema from "../validations/registerValidation";
import ROUTES from "../routes/ROUTES";
import InputComponent from "../components/InputComponent";
const RegisterPage = () => {
  const [inputState, setInputState] = useState({});
  const inputs = [
    { label: "First name", name: "firstName", isRiq: true },
    { label: "Middle name", name: "middleName", isRiq: false },
    { label: "Last name", name: "lastName", isRiq: true },
    { label: "Phone", name: "phone", isRiq: true, type: "number" },
    { label: "Email", name: "email", isRiq: true },
    { label: "Password", name: "password", isRiq: true, type: "password" },
    { label: "Image Url", name: "imageUrl", isRiq: false },
    { label: "Image Alt", name: "imageAlt", isRiq: false },
    { label: "State", name: "state", isRiq: false },
    { label: "Country", name: "country", isRiq: true },
    { label: "City", name: "city", isRiq: true },
    { label: "Street", name: "street", isRiq: true },
    { label: "House number", name: "houseNumber", isRiq: true },
    { label: "Zip", name: "zip", isRiq: false, type: "number" },
  ];

  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
  };
  const handleBtnClick = async (ev) => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }

      await axios.post("/users/register", {
        firstName: inputState.firstName,
        middleName: inputState.middleName,
        lastName: inputState.lastName,
        phone: inputState.phone,
        email: inputState.email,
        password: inputState.password,
        imageUrl: inputState.imageUrl,
        imageAlt: inputState.imageAlt,
        country: inputState.country,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        zip: inputState.zip,
      });
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log("error from axios", err.response.data);
    }
  };

  return (
    <Box component="main" maxWidth="sm">
      <Box
        sx={{
          marginLeft: "25vw",
          width: "50vw",
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {inputs.map((input) => (
              <Grid item sm={6} key={input.label}>
                <InputComponent
                  label={input.label}
                  name={input.name}
                  onChange={handleInputChange}
                  required={input.isRiq}
                  inputsErrorsState={inputsErrorsState}
                  type={input.type}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}></Grid>

          <Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleBtnClick}
            >
              Sign Up
            </Button>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default RegisterPage;
