import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux"; 
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import FormTrip from "../FormTrip";
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage"

export const routes = {
  root: "/",
  loginPage: "/loginPage",
  formTrip: "/formTrip",
  createTripPage: "/createTripPage",
  listTripsPage: "/listTripsPage",
  tripDetailsPage: "/tripDetailsPage",
};


export const Router = props => {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.formTrip} component={FormTrip} />
        <Route exact path={routes.createTripPage} component={CreateTripPage} />
        <Route exact path={routes.listTripsPage} component={ListTripsPage} />
        <Route exact path={routes.tripDetailsPage} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect() (Router);       
