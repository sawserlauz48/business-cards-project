import { Box, Container, Grid } from "@mui/material";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import ButtonComponents from "../components/ButtonComponents";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import validateRegisterSchema from "../validations/registerValidation";
const EditCardPage = () => {
  const initailState = {
    title: "",
    subTitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    imageUrl: "",
    imageAlt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  };
  const [inputState, setInputState] = useState(initailState);
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
  };
  const handleCancelBtn = () => {
    navigate(ROUTES.MYCARDS);
  };
  const handleRestBtn = () => {
    setInputState(initailState);
  };
  const handleSignInBtn = async () => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.post("/cards/", {
        title: inputState.title,
        subTitle: inputState.subTitle,
        description: inputState.description,
        state: inputState.state,
        country: inputState.country,
        city: inputState.city,
        imageUrl: inputState.imageUrl,
        imageAlt: inputState.imageAlt,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        email: inputState.email,
        phone: inputState.phone,
        zipCode: inputState.zip,
        web: inputState.web,
      });
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log("error from axios", err.response.data);
    }
  };
  return (
    <Box component="div" noValidate sx={{ mt: 3 }}>
      <h1>EDIT CARD</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <InputComponent
              name={"title"}
              label={"Title"}
              required={true}
              value={inputState.title}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"subTitle"}
              label={"Subtitle"}
              required={true}
              value={inputState.subTitle}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"discription"}
              label={"Discription"}
              required={true}
              value={inputState.description}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"phone"}
              label={"Phone"}
              required={true}
              value={inputState.phone}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"email"}
              label={"Email"}
              required={true}
              value={inputState.email}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"web"}
              label={"Web"}
              value={inputState.web}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"imageUrl"}
              label={"Image url"}
              value={inputState.imageUrl}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"imageAlt"}
              label={"Image alt"}
              value={inputState.imageAlt}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"state"}
              required={true}
              value={inputState.state}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"country"}
              label={"Country"}
              required={true}
              value={inputState.country}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"city"}
              label={"City"}
              required={true}
              value={inputState.city}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"street"}
              label={"Street"}
              required={true}
              value={inputState.street}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"houseNumber"}
              label={"House number"}
              required={true}
              value={inputState.houseNumber}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sm={6}>
            <InputComponent
              name={"zip"}
              label={"Zip"}
              value={inputState.zipCode}
              inputsErrorsState={inputsErrorsState}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <ButtonComponents
          handleCancelBtn={handleCancelBtn}
          handleRestBtn={handleRestBtn}
          handleSignInBtn={handleSignInBtn}
        />
      </Container>
    </Box>
  );
};
export default EditCardPage;
