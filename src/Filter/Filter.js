import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  FilterContainer,
  FilterInput,
  StyledSearchIcon,
  StyledLocationIcon,
  StyledSearchButton,
  StyledFilterIcon,
  StyledCheckbox,
  StyledLabel,
  StyledIcon,
  StyledModal,
  StyledModalContent,
  StyledModalClose,
  StyledModalSection,
  StyledHr,
} from "./styles";

const Filter = ({
  handleSearch,
  description,
  setDescription,
  location,
  setLocation,
  fullTime,
  setFullTime,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleFullTime = (e) => {
    if (fullTime === false) {
      setFullTime("on");
    } else {
      setFullTime(false);
    }
  };
  const handleModal = (e) => {
    console.log(e.target);
    if (modalOpen === true) {
      if (e.target.id === "myModal" || e.target.id === "submitBtn")
        setModalOpen(false);
    } else if (modalOpen === false) {
      setModalOpen(true);
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 1199 });
  const isTabletUp = useMediaQuery({ minWidth: 751 });
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <FilterContainer>
          <StyledIcon className="fas fa-search" color="#5964e0"></StyledIcon>
          <FilterInput
            value={description}
            onChange={handleDescription}
            type="text"
            placeholder={`Filter by title${
              isDesktop ? ", companies, expertise" : ""
            }...`}
            flexSize="1"
          ></FilterInput>
          {isTabletUp && (
            <>
              <StyledLocationIcon />
              <FilterInput
                value={location}
                onChange={handleLocation}
                type="text"
                placeholder="Filter by location..."
                flexSize="1"
              ></FilterInput>
              <StyledCheckbox
                type="checkbox"
                id="fullTime"
                value="fullTime"
                checked={fullTime}
                onChange={handleFullTime}
              />
              <StyledLabel htmlFor="fullTime">
                Full Time{isDesktop ? " Only" : ""}
              </StyledLabel>
            </>
          )}
          {isMobile ? <StyledFilterIcon onClick={handleModal} /> : ""}

          <StyledSearchButton type="submit" flexSize="0.4">
            {isMobile ? (
              <StyledIcon className="fas fa-search" color="white"></StyledIcon>
            ) : (
              "Search"
            )}
          </StyledSearchButton>
        </FilterContainer>
      </form>

      <StyledModal id="myModal" modalOpen={modalOpen} onClick={handleModal}>
        <StyledModalContent>
          <form onSubmit={handleSearch}>
            <StyledModalSection>
              <StyledLocationIcon />
              <FilterInput
                value={location}
                onChange={handleLocation}
                type="text"
                placeholder="Filter by location..."
                flexSize="1"
              ></FilterInput>
            </StyledModalSection>
            <StyledHr />
            <StyledModalSection>
              <StyledCheckbox
                type="checkbox"
                id="fullTime"
                value="fullTime"
                checked={fullTime}
                onChange={handleFullTime}
              />
              <StyledLabel htmlFor="fullTime">Full Time Only</StyledLabel>
            </StyledModalSection>
            <StyledModalSection>
              <StyledSearchButton
                width="100%"
                type="submit"
                flexSize="0.7"
                id="submitBtn"
              >
                Search
              </StyledSearchButton>
            </StyledModalSection>
          </form>
        </StyledModalContent>
      </StyledModal>
    </div>
  );
};

export default Filter;
