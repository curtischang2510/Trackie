import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddEventPage from "./pages/AddEventPage"; // Add Event Page
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import { AuthenticatedUserProvider } from "./contexts/AuthenticatedUserContext";
import "./App.css";


function App() {
  return (
    <AuthenticatedUserProvider>
        <Router>
          <div>
              {/* Define Routes */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AddEventPage" element={<AddEventPage />} />
                <Route path="/EventPage/:eventID" element={<EventPage />}/>
              </Routes>
          </div>
        </Router>
    </AuthenticatedUserProvider>
  );
}

export default App;
