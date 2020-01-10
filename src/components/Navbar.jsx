import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

function NavbarTop() {
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">POZA</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="https://poza-evenement.fr/">L'agence POZA</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <NavItem>
          <NavLink href="http://localhost:8001/new">
            Devenez prestataire
          </NavLink>
        </NavItem>
      </Navbar>
    </>
  );
}

export default NavbarTop;
