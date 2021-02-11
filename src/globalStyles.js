import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --violet: #5964e0;
  --light-violet: #939bf4;
  --very-dark-blue: #19202d;
  --midnight: #121721;
  --white: #ffffff;
  --grey: #9daec2;
  --light-grey: #f4f6f8;
  --dark-grey: #6e8098;
}
body {
  margin: 0;
  font-family: "Kumbh Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  line-height: 1.45;
}

h1 {
  font-size: 28px;
  font-weight: normal;
}
h2 {
  font-size: 29px;
  font-weight: normal;
}
h3 {
  font-size: 20px;
  font-weight: normal;
}
h4 {
  font-size: 14px;
  font-weight: normal;
}
.container {
  margin: 0 auto;
  max-width: 1110px;
}
.center {
  text-align: center;
}

`;

export default GlobalStyle;
