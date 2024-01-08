import React from "react";
import ReactDOM from "react-dom/client";
import "./App.module.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  CountriesGroup,
  CountryGroup,
  StandingTableGroups,
  defaultRoutes,
} from "./components/components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={defaultRoutes.homePage} element={<HomePage />} />
        <Route path={defaultRoutes.semiFinal} element={<App />} />
        <Route
          path={defaultRoutes.countriesGroup}
          element={<CountriesGroup />}
        />
        <Route
          path={`${defaultRoutes.countryGroup}/:groupName`}
          element={
            <CountryGroup
              groupName={""}
              countryNames={[]}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />

        <Route
          path={defaultRoutes.standingTableGroups}
          element={<StandingTableGroups />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
