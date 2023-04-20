import { Grid, TextField, Alert, Box } from "@mui/material";
import AlertComponent from "./AlertComponent";

const InputComponentCopy = ({
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
    <Grid item sm={12}>
      <TextField
        fullWidth
        id={name}
        label={name}
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
    </Grid>
  );
};
export default InputComponentCopy;
