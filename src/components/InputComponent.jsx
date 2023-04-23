import { Grid, TextField, Alert, Box } from "@mui/material";
import AlertComponent from "./AlertComponent";

const InputComponent = ({
  name,
  label,
  onChange,
  type,
  required,
  inputsErrorsState,
  inputState,
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
