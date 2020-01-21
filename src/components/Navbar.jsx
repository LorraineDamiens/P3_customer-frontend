import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from "reactstrap";

function NavbarTop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src="images/minilogopoza.png" alt="logo poza" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://poza-evenement.fr/">L'agence POZA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://poza-evenement.fr/contact/">
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://pozabackoffice.ddns.net/new">
                Devenez prestataire
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavbarTop;
