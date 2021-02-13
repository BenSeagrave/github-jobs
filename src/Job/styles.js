import styled from "styled-components";

export const SmallCardContainer = styled.div`
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 50px 20px;
  border-radius: 5px;
  width: 100%;
  margin-top: -160px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-align: center;
  @media (min-width: 600px) {
    height: 140px;
    text-align: left;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 180px;
    padding-right: 35px;
  }
`;

export const SmallCardImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  position: absolute;
  top: -25px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #e3e6e8;
  @media (min-width: 600px) {
    width: 140px;
    height: 140px;
    left: 0;
    top: 0;
    border-radius: 5px;
  }
`;

export const SmallCardCompany = styled.h3`
  margin-bottom: 10px;
  color: ${(props) => props.theme.headerColor};
`;
export const SmallCardCompanyUrl = styled.h4`
  margin-bottom: 20px;
  color: var(--dark-grey);
`;
