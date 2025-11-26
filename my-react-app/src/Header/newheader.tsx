import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NewHeader() {
  return (
    <Navbar fluid rounded>
      <div>
        <div>
          <img src="../logo.webp" alt="" />
        </div>
        <div>
          <NavbarToggle />
        </div>
        <div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              About
            </NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </div>
      </div>
    </Navbar>
  )
}

