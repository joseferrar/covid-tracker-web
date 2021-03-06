import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Country from "../Country/Country";
import CountryList from "../Country/CountryList";
import Layout from "./Layout";
import Vaccine from "../Vaccine/Vaccine";
import VaccineList from "../Vaccine/VaccineList";

function Navbar() {
  return (
    <div>
      {/* <Header /> */}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/country/:id" component={CountryList} />
          <Route exact path="/vaccine" component={Vaccine} />
          <Route exact path="/vaccine/:id" component={VaccineList} />

          {/* <Route>
          <NoMatch />
        </Route> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default Navbar;
