import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {FaOsi} from 'react-icons/fa'
import '../../styles/Dashboard.css'
import {useHistory} from 'react-router-dom'

function Header({toggleShow}) {
  const history = useHistory()
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item
              href="#"
              onClick={() => history.push('/createPropietario')}>
              Crear propietario
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#0"
              onClick={() => history.push('/createMascotas')}>
              Crear mascota
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#0" onClick={() => history.push('/home')}>
              Inicio
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link
            eventKey={2}
            href="#memes"
            className="mx-4"
            onClick={toggleShow}
            active>
            <FaOsi size={'2em'} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
