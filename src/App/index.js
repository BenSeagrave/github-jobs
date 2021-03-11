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
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [jobsShown, setJobsShown] = useState([]);
  const [theme, setTheme] = useState("light");
  const [isLoading, setLoading] = useState(true);

  const lightTheme = {
    backgroundColor: "var(--light-grey)",
    cardBackgroundColor: "var(--white)",
    buttonBackgroundColor: "rgba(89, 100, 224, 0.1)",
    buttonHoverBackgroundColor: "rgba(89, 100, 224, 0.25)",
    headerColor: "var(--black)",
    buttonColor: "var(--violet)",
  };

  const darkTheme = {
    backgroundColor: "var(--midnight)",
    cardBackgroundColor: "var(--very-dark-blue)",
    buttonBackgroundColor: "rgba(255, 255, 255, 0.1)",
    buttonHoverBackgroundColor: "rgba(255, 255, 255, 0.25)",
    headerColor: "var(--white)",
    buttonColor: "var(--white)",
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  const fetchData = async (description = "", location = "", fullTime = "") => {
    // Need to add CORS proxy if not using chrome extension/safe mode!

    const encodedDescription = encodeURIComponent(description);
    const encodedLocation = encodeURIComponent(location);
    console.log(fullTime);
    const response = await fetch(
      `https://jobs.github.com/positions.json?description=${encodedDescription}&location=${encodedLocation}&full_time=${fullTime}`
    );

    const data = await response.json();
    return data;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData(description, location, fullTime).then((jobs) => {
      setJobsList(jobs);
      setLoading(false);
    });
    document.activeElement.blur();
  };
  // On first load, load data into jobsList state with no search parameters
  useEffect(() => {
    fetchData().then((jobs) => {
      setJobsList(jobs);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setJobsShown(jobsList.slice(0, 12));
  }, [jobsList]);

  // First checks localStorage for a theme, then checks for a system preference to set initial theme
  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (preferredTheme.matches) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

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
                  <Filter
                    handleSearch={handleSearch}
                    description={description}
                    location={location}
                    setDescription={setDescription}
                    setLocation={setLocation}
                    fullTime={fullTime}
                    setFullTime={setFullTime}
                  />
                  <Jobs
                    jobsList={jobsList}
                    jobsShown={jobsShown}
                    isLoading={isLoading}
                    setJobsList={setJobsList}
                    setJobsShown={setJobsShown}
                  />
                </>
              )}
            />
            <Route
              path="/job/:id"
              render={() => <Job jobsList={jobsList} isLoading={isLoading} />}
            />
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
