import { Box, Typography } from "@mui/material";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";

const NoCardsPartial = () => {
  return (
    <Box>
      <CreditCardOffIcon color="transparent" sx={{ fontSize: 300 }} />
      <Typography sx={{ alignItems: "center", justifyContent: "center" }}>
        oh! you don't have cards yet
      </Typography>
      <Typography sx={{ alignItems: "center", justifyContent: "center" }}>
        Click the plus button to creat a card
      </Typography>
    </Box>
  );
};

export default NoCardsPartial;
