import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/navBar";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";

function App() {
  return (
    <Router>
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
