import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BoilerScreen from "./screens/BoilerScreen";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <Container>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/test" component={BoilerScreen}></Route>
      </Container>
    </Router>
  );
}

export default App;
