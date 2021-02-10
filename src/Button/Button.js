import React from "react";
import styled from "styled-components";

const Button = ({ light, text, onClick, fullWidth }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

const ButtonStyled = styled.div`
  background-color: ${(light) =>
    light ? "rgba(89, 100, 224, 0.1)" : "var(--violet)"};
  color: var(--violet);
  padding: 20px 30px 10px;
  display: block;
  border-radius: 10px;
  flex-shrink: 0;
`;

export default Button;
