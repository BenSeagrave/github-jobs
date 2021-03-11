import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "./icon-search.svg";
// import { ReactComponent as CheckIcon } from "./icon-check.svg";
import { ReactComponent as FilterIcon } from "./icon-filter.svg";
import { ReactComponent as LocationIcon } from "./icon-location.svg";

export const FilterInput = styled.input`
  border: 0;
  outline: none;
  flex: ${(props) => props.flexSize};
  font-size: 16px;
  width: 100%;
  @media (min-width: 750px) {
  }
  @media (min-width: 900px) {
  }
`;

export const FilterContainer = styled.div`
  background: white;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  margin-top: -160px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const StyledFilterIcon = styled(FilterIcon)`
  margin-left: 10px;
  margin-right: 15px;
`;
export const StyledLocationIcon = styled(LocationIcon)`
  margin-left: 10px;
  margin-right: 15px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  margin-left: 10px;
  margin-right: 15px;
  color: white;
  svg {
    @media (max-width: 750px) {
      fill: white;
    }
  }
  /* @media (max-width: 750px) {
    display: none;
  } */
`;

export const StyledSearchButton = styled.button`
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
  padding: 18px 0px 12px;
  font-size: 16px;
  flex-shrink: 0;
  cursor: pointer;
  outline: none;
  border: none;
  width: ${(props) => props.width};
  @media (min-width: 750px) {
    width: auto;
    padding: 20px 15px 10px;
  }
  @media (min-width: 900px) {
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

export const StyledCheckbox = styled.input`
  background: black;
  width: 24px;
  height: 24px;
  outline: none;
  border: 0;
  margin-left: 10px;
  margin-right: 15px;
`;

export const StyledLabel = styled.label`
  flex: ${(props) => props.flexSize};
  margin-right: 8px;
`;

export const StyledIcon = styled.i`
  padding: 0px 18px;
  font-size: 1.3rem;
  color: ${(props) => props.color};
`;

export const StyledModal = styled.div`
  /* display: none; */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme.cardBackgroundColor};
  margin: 20% auto;
  padding: 20px;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2, 0 7px 20px 0 rgba(0, 0, 0, 0.17));
`;

export const StyledModalSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

export const StyledHr = styled.hr`
  margin: 10px 0;
`;
