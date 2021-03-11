import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({ light, target, children, onClick, type }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      light={light}
      href={target}
      target="_blank"
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
