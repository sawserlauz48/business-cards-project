import { Box, Button, Grid } from "@mui/material";

const ButtonComponents = ({
  handleCancelBtnClick,
  handleRestBtnClick,
  handleSignInBtnClick,
  disableSignInBtnClick,
  signInBtnLabel,
}) => {
  const handleCancelBtn = (ev) => {
    handleCancelBtnClick(ev);
  };
  const handleRestBtn = () => {
    handleRestBtnClick();
  };
  const handleSignInBtn = (ev) => {
    handleSignInBtnClick(ev);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            onClick={handleCancelBtn}
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleRestBtn}
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
      <Button
        disabled={disableSignInBtnClick}
        onClick={handleSignInBtn}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {signInBtnLabel}
      </Button>
    </Box>
  );
};

export default ButtonComponents;
