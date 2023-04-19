import { Alert, Box } from "@mui/material";

const AlertComponent = ({ inputsErrorsState, name }) => {
  return (
    <Box>
      {inputsErrorsState && inputsErrorsState[name] && (
        <Alert severity="warning" sx={{ mt: 1 }}>
          {inputsErrorsState[name].map((item) => (
            <div key={`${name}` + "-errors" + item}>{item}</div>
          ))}
        </Alert>
      )}
    </Box>
  );
};

export default AlertComponent;
