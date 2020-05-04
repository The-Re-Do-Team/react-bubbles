import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.js";
import BubblePage from "./components/BubblePage.js"


import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div>
        <h1>Bubbles!</h1>
        <PrivateRoute path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
