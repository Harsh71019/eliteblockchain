import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BoilerScreen from "./screens/BoilerScreen";

function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/test" component={BoilerScreen}></Route>
    </Router>
  );
}

export default App;
