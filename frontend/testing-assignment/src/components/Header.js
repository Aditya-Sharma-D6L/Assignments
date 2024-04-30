import React from "react";
import Typography from "@material-ui/core/Typography";

const Header = ({ title, variant }) => {
  return (
    <Typography variant={variant || "h1"} gutterBottom>
      {title}
    </Typography>
  );
};

export default Header;
