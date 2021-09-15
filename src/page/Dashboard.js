import React, {useState} from 'react'
import AdminNavbar from '../components/Navbars/AdminNavbar'
import Accordio from '../components/Sidebar/Accordio'
import OffCanvas from '../components/Navbars/Offcanva'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function Dashboard({children}) {
  const history = useHistory()
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(s => !s)
  const handleClose = () => setShow(false)

  return (
    <>
      <Row>
        {/* titulo */}
        <Col
          xs={6}
          sm={4}
          md={2}
          id="sidebar-wrapper"
          className="m-0 p-1 text-white color-sidebar text-center text-uppercase">
          <Navbar
            collapseOnSelect
            variant="dark"
            style={{display: 'flex', justifyContent: 'center'}}>
            <Navbar.Brand
              className="mx-4 "
              onClick={() => history.push('/home')}
              href="#0">
              Mascotas
            </Navbar.Brand>
          </Navbar>
        </Col>
        {/* Nav bar */}
        <Col
          xs={6}
          sm={8}
          md={10}
          id="sidebar-wrapper"
          className="p-0 color-sidebar">
          <AdminNavbar toggleShow={toggleShow} style={{height: '100vh'}} />
        </Col>
      </Row>
      <Row>
        {/* sidebar */}
        <Col
          xs={12}
          sm={3}
          md={2}
          onClick={handleClose}
          id="sidebar-wrapper"
          className="m-0 pr-1  text-white color-sidebar">
          <Accordio />
          <OffCanvas show={show} handleClose={handleClose} />
        </Col>
        {/* contenedor */}
        <Col
          xs={12}
          sm={9}
          md={10}
          onClick={handleClose}
          id="page-content-wrapper"
          className="mt-3 rounded-pill"
          style={{radius: 20}}>
          <Container className="container-fluid">{children}</Container>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
