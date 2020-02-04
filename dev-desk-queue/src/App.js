import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Home from "./components/Home";
import NavTab from "./components/NavTab";
import ClosedTickets from "./components/TicketComponents/ClosedTickets";
import CreateTicket from "./components/TicketComponents/CreateTicket";
import OpenTickets from "./components/TicketComponents/OpenTickets";

function App() {
  const url = "https://dev-help-desk.herokuapp.com/api/tickets";
  axios
    .get(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="App">
      <h1>The Queue</h1>
      <div className="layout">
        <NavTab className="nav-tab" />
        <Route exact path="/" component={Home} className="layout" />
        <Route path="/open" component={OpenTickets} className="layout" />
        <Route path="/closed" component={ClosedTickets} className="layout" />
        <Route exact path="/new" component={CreateTicket} className="layout" />
      </div>
    </div>
  );
}

export default App;
