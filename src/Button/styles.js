import styled, { css } from "styled-components";

export const ButtonStyled = styled.a`
  background: var(--violet);
  color: var(--white);
  ${(props) =>
    props.light &&
    css`
      background: ${(props) => props.theme.buttonBackgroundColor};
      color: ${(props) => props.theme.buttonColor};
    `}
  border-radius: 5px;
  flex-shrink: 0;
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding: 20px 10px 10px;
  font-size: 16px;
  flex-shrink: 0;
  cursor: pointer;
  @media (min-width: 600px) {
    width: auto;
    padding: 20px 40px 10px;
  }

  &:hover {
    background: #939bf4;
    ${(props) =>
      props.light &&
      css`
        background: ${(props) => props.theme.buttonHoverBackgroundColor};
      `}
  }
`;
