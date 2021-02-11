import styled from "styled-components";
import loading from "./loading.svg";

const Loading = () => {
  return (
    <Container>
      <StyledLoading src={loading} alt="Loading spinner" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledLoading = styled.img`
  height: 150px;
`;

export default Loading;
