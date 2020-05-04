import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.js";


import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <PrivateRoute path="/bubbles" component={BubblePage} />
    </Router>
  );
}

export default App;
