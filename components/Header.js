// import React from 'react'
// import {Link} from 'react-scroll'
// export const Header = () => {
//     return (
//         <div>
//             <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
//           <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
//           <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
//           <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
//           <li><Link  to="service" spy={true} smooth={true}>Service</Link></li>
//             </ul> 
//         </div>
//     )
// }

import React, { useState } from 'react';
import {Link} from 'react-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="light" light expand="md" fixed="sticky" >
    
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
        
            <NavItem>
            <Link  to="about" spy={true} smooth={true}>About</Link>
            </NavItem>
            <NavItem>
            <Link  to="contact" spy={true} smooth={true}>Contact</Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;