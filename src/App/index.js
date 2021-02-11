import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../globalStyles";
import Header from "../Header/";
import Jobs from "../Jobs/";
import Job from "../Job/";
import Filter from "../Filter/Filter";

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [jobsShown, setJobsShown] = useState([]);
  const [theme, setTheme] = useState("light");

  const lightTheme = {
    backgroundColor: "var(--light-grey)",
    cardBackgroundColor: "var(--white)",
    headerColor: "var(--black)",
    button2Background: "#EEEFFC",
    button2BackgroundHover: "#C5C9F4",
    button2Color: "#C5C9F4",
  };

  const darkTheme = {
    backgroundColor: "var(--midnight)",
    cardBackgroundColor: "var(--very-dark-blue)",
    headerColor: "var(--white)",
    button2Background: "#303742",
    button2BackgroundHover: "#696E76",
    button2Color: "var(--white)",
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  // On first load, load data into jobsList state with no search parameters
  useEffect(() => {
    const fetchData = async () => {
      // Need to add CORS proxy if not using chrome extension!
      const response = await fetch("https://jobs.github.com/positions.json");
      const data = await response.json();
      return data;
    };
    fetchData().then((jobs) => setJobsList(jobs));
  }, []);

  useEffect(() => {
    setJobsShown(jobsList.slice(0, 12));
  }, [jobsList]);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Header jobsList={jobsList} theme={theme} setTheme={setTheme}></Header>
        <BodyContainer>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Filter />
                  <Jobs
                    jobsList={jobsList}
                    jobsShown={jobsShown}
                    setJobsList={setJobsList}
                    setJobsShown={setJobsShown}
                  />
                </>
              )}
            />
            <Route path="/job/:id" render={() => <Job jobsList={jobsList} />} />
          </Switch>
        </BodyContainer>
      </ThemeProvider>
    </>
  );
}

const BodyContainer = styled.div`
  padding: 25px;
`;

export default App;
