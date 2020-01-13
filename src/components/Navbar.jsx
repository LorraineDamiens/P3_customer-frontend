import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

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
            <NavLink href="https://poza-evenement.fr/contact/">Contact</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="http://localhost:8001/new">
              Devenez prestataire
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarTop;
