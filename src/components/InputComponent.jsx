import { Grid, TextField, Alert, Box } from "@mui/material";
import AlertComponent from "./AlertComponent";
import { useEffect, useState } from "react";
import validateRegisterSchema from "../validations/registerValidation";

const InputComponent = ({
  name,
  label,
  onChange,
  type,
  required,
  inputState,
  inputsErrorsState,
}) => {
  const handleInputChange = (ev) => {
    onChange(ev);
  };

  return (
    <Box>
      <TextField
        fullWidth
        id={name}
        label={label}
        name={name}
        type={type}
        autoComplete={name}
        required={required}
        onChange={handleInputChange}
        value={inputState[name]}
      ></TextField>
      <Box>
        <AlertComponent name={name} inputsErrorsState={inputsErrorsState} />
      </Box>
    </Box>
  );
};
export default InputComponent;
