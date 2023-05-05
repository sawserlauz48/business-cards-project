import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Image } from "@mui/icons-material";

const NavLinkComponent = ({ url, label, component, ...rest }) => {
  return (
    <NavLink to={url} {...rest}>
      {({ isActive }) => (
        <Typography
          sx={{
            my: 2,
            display: "block",
            p: 2,
          }}
          color={isActive ? "warning.main" : "text.primary"}
          component={component}
        >
          {label}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponent;
