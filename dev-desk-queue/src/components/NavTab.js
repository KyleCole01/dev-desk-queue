import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = () => {
  return (
    <div className="nav-container">
      <NavLink to="/open" activeClassName="selected" className="nav">
        Tickets
      </NavLink>
      <NavLink to="/closed" activeClassName="selected" className="nav">
        Closed Tickets
      </NavLink>
      <NavLink to="/new" activeClassName="selected" className="nav">
        Create Ticket
      </NavLink>
    </div>
  );
};
export default NavTab;
