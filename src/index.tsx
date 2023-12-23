import React from "react";
import ReactDOM from "react-dom/client";
import "./App.module.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GroupedTeams from "./components/GroupedTeam/GroupedTeams";
import GroupedTeam from "./components/GroupedTeam/GroupedTeam";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const IndividualGroupPage: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // Access the title from URL parameters

  return <GroupedTeam navigateLink={""} title={title} />;
};

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<App />} />
        <Route path="/groups" element={<GroupedTeams />} />
        <Route
          path="/table/:title" // Add a parameter for the title
          element={<IndividualGroupPage />} // Create a component to handle the page
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
