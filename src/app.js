import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Import your components for each route
import Home from "./components/Home/Home";
import Login from "./components/Authentication/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
