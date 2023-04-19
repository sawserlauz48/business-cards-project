import { Grid, TextField, Alert, Box } from "@mui/material";
import AlertComponent from "./AlertComponent";

const InputComponent = ({
  name,
  label,
  onChange,
  value,
  type,
  required,
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
        value={value}
      ></TextField>
      <Box>
        <AlertComponent name={name} inputsErrorsState={inputsErrorsState} />
      </Box>
    </Box>
  );
};
export default InputComponent;
