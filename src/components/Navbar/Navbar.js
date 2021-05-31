import React from "react";
import Header from "./Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Container from "@material-ui/core/Container";

function Navbar() {
  return (
    <div>
      <Header />
      <Container maxWidth="md" fixed>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          {/* <Route>
          <NoMatch />
        </Route> */}
        </Switch>
      </Container>
    </div>
  );
}

export default Navbar;
