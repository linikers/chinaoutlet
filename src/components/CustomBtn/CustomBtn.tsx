import React from "react";
import * as Styles from "./styles";

export const CustomButton = ({ children, startIcon, ...rest }) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  );
};


