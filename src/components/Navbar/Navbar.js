import React from "react";
import Header from "./Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Container from "@material-ui/core/Container";
import Country from "../Country/Country";
import CountryList from "../Country/CountryList";

function Navbar() {
  return (
    <div>
      <Header />
      <Container maxWidth="md" fixed>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/country/:id" component={CountryList} />

          {/* <Route>
          <NoMatch />
        </Route> */}
        </Switch>
      </Container>
    </div>
  );
}

export default Navbar;
