import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({ light, target, children, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} light={light} href={target} target="_blank">
      {children}
    </ButtonStyled>
  );
};

export default Button;
