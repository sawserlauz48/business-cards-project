import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validateCreatCardSchema from "../validations/creatCardValidation";
import ROUTES from "../routes/ROUTES";
import InputComponent from "../components/InputComponent";
import ButtonComponents from "../components/ButtonComponents";
import AddCardIcon from "@mui/icons-material/AddCard";
import { toast } from "react-toastify";
const initailState = {
  title: "",
  subTitle: "",
  email: "",
  web: "",
  phone: "",
  country: "",
  city: "",
  street: "",
  houseNumber: "",
  description: "",
  imageUrl: "",
  imageAlt: "",
  state: "",
  zipCode: "",
};
const inputs = [
  { label: "Title", name: "title", isRiq: true },
  { label: "subTitle", name: "subTitle", isRiq: true },
  { label: "Description", name: "description", isRiq: true },
  { label: "Phone", name: "phone", isRiq: true },
  { label: "Email", name: "email", isRiq: true },
  { label: "Web", name: "web", isRiq: false },
  { label: "Country", name: "country", isRiq: true },
  { label: "City", name: "city", isRiq: true },
  { label: "Street", name: "street", isRiq: true },
  { label: "House number", name: "houseNumber", isRiq: true },
  { label: "Image Url", name: "imageUrl", isRiq: false },
  { label: "Image Alt", name: "imageAlt", isRiq: false },
  { label: "State", name: "state", isRiq: false },
  { label: "zip Code", name: "zipCode", isRiq: false },
];
const CreatCard = () => {
  const [inputState, setInputState] = useState(initailState);
  const [InputsErrorsState, setInputsErrorsState] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const handleCancelBtn = () => {
    navigate(ROUTES.HOME);
  };
  useEffect(() => {
    const joiResponse = validateCreatCardSchema(inputState);
    handleDisabledBtn();
    setInputsErrorsState(joiResponse);
  }, [inputState]);
  const handleDisabledBtn = () => {
    const joiResponse = validateCreatCardSchema(inputState);
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
      const joiResponse = validateCreatCardSchema(inputState);
      if (joiResponse) {
        return;
      }
      await axios.post("/cards", {
        title: inputState.title,
        subTitle: inputState.subTitle,
        email: inputState.email,
        web: inputState.web,
        phone: inputState.phone,
        country: inputState.country,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        description: inputState.description,
        url: inputState.imageUrl,
        alt: inputState.imageAlt,
        state: inputState.state,
        zipCode: inputState.zip,
      });
      navigate(ROUTES.MYCARDS);
      toast.success("The card has been created");
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
          <AddCardIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CREATE CARD
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
                  type={input.type}
                  inputState={inputState}
                  inputsErrorsState={InputsErrorsState}
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
            signInBtnLabel={"CREATE CARD"}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default CreatCard;
