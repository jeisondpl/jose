import React from 'react'
import {Offcanvas, Button, Card, Row, Col} from 'react-bootstrap'
import Line from '../Line'
import {useHistory} from 'react-router-dom'
import {FaUserAlt, FaMailBulk, FaHome} from 'react-icons/fa'

const OffCanva = ({handleClose, show, dataperfil = {}}) => {
  const history = useHistory()

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={false}
        backdrop={false}
        placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Datos generales</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card>
            {/* <Card.Header>
              <Card.Title as="h5">Datos generales</Card.Title>
            </Card.Header> */}
            <Card.Body>
              <Row>
                <Col>
                  <div>
                    <FaUserAlt size={'1em'} />
                    <lavel
                      style={{fontWeight: 'bold'}}
                      className="ms-2 panel-title">
                      Nombres
                    </lavel>
                    <p className="ms-4">Jeison diaz palmera</p>
                  </div>
                  <Line />
                  <div>
                    <FaMailBulk size={'1em'} />
                    <lavel
                      style={{fontWeight: 'bold'}}
                      className="ms-2 panel-title">
                      Correos
                    </lavel>
                    <p className="ms-4">jeison.diaz@invemar.org.co</p>
                  </div>
                  <Line />
                  <div>
                    <FaHome size={'1em'} />
                    <lavel
                      style={{fontWeight: 'bold'}}
                      className="ms-2 panel-title">
                      Entidad
                    </lavel>
                    <p className="ms-4">Parque nacional tayrona</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <div className="d-grid gap-2 mt-2">
                <Button
                  variant="secondary"
                  type="button"
                  size="md"
                  style={{
                    backgroundColor: '#4badf1',
                    color: 'white',
                    borderColor: '#4badf1',
                  }}
                  onClick={() => history.push('/')}>
                  Cerrar sesion
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanva
