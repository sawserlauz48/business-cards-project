import { Box, Button, Grid } from "@mui/material";

const ButtonComponents = (handleCancelBtn, handleRestBtn, handleSignInBtn) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ marginLeft: 0 }}>
        <Grid item xs={6}>
          <Button
            onClick={handleCancelBtn}
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1, p: 1 }}
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
        onClick={handleSignInBtn}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, marginLeft: 2 }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default ButtonComponents;
