import React from "react";
import { Router } from "react-router";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/navBar";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";
import history from "./constants/history";
function App() {
  return (
    <Router history={history}>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
