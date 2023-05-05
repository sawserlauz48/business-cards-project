import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validateProfileSchema from "../validations/profileValidation";
import ROUTES from "../routes/ROUTES";
import InputComponent from "../components/InputComponent";
import ButtonComponents from "../components/ButtonComponents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const initailState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  street: "",
  houseNumber: "",
  middleName: "",
  imageUrl: "",
  imageAlt: "",
  state: "",
  zipCode: "",
};
const inputs = [
  { label: "First name", name: "firstName", isRiq: true },
  { label: "Middle Name", name: "middleName", isRiq: false },
  { label: "Last name", name: "lastName", isRiq: true },
  { label: "Phone", name: "phone", isRiq: true, type: "number" },
  { label: "Email", name: "email", isRiq: true },
  { label: "Country", name: "country", isRiq: true },
  { label: "City", name: "city", isRiq: true },
  { label: "Street", name: "street", isRiq: true },
  { label: "House number", name: "houseNumber", isRiq: true },
  { label: "Image Url", name: "imageUrl", isRiq: false },
  { label: "Image Alt", name: "imageAlt", isRiq: false },
  { label: "State", name: "state", isRiq: false },
  { label: "zip Code", name: "zipCode", isRiq: false },
];
const RegisterPage = () => {
  const [inputState, setInputState] = useState(initailState);
  const [disabled, setDisabled] = useState(true);
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users/userInfo");
        let newInputState = {
          ...data,
        };
        delete newInputState.isAdmin;
        delete newInputState.biz;
        delete newInputState.__v;
        delete newInputState.image;
        delete newInputState.likes;
        delete newInputState._id;
        delete newInputState.user_id;
        delete newInputState.bizNumber;
        delete newInputState.createdAt;
        setInputState(newInputState);
      } catch (err) {
        console.log("error from axios", err);
      }
    })();
  }, []);
  const handleCancelBtn = () => {
    navigate(ROUTES.HOME);
  };
  useEffect(() => {
    const joiResponse = validateProfileSchema(inputState);
    handleDisabledBtn();
    setInputsErrorsState(joiResponse);
  }, [inputState]);

  const handleDisabledBtn = () => {
    const joiResponse = validateProfileSchema(inputState);
    if (!joiResponse) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleRestBtn = () => {
    setInputState(initailState);
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
  };

  const handleSignInBtn = async (ev) => {
    try {
      const joiResponse = validateProfileSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.put("/users/userInfo", {
        firstName: inputState.firstName,
        lastName: inputState.lastName,
        email: inputState.email,
        phone: inputState.phone,
        country: inputState.country,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        middleName: inputState.middleName,
        imageUrl: inputState.imageUrl,
        imageAlt: inputState.imageAlt,
        state: inputState.state,
        zipCode: inputState.zipCode,
      });
      navigate(ROUTES.HOME);
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
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile Page
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
                  inputState={inputState}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}></Grid>
          <ButtonComponents
            handleCancelBtnClick={handleCancelBtn}
            handleRestBtnClick={handleRestBtn}
            handleSignInBtnClick={handleSignInBtn}
            disableSignInBtnClick={disabled}
            signInBtnLabel={"UPDATE"}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default RegisterPage;
