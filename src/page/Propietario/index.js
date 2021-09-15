import React from 'react'
import Dashboard from '../Dashboard'
import {Button, Card, Row, Col, Form} from 'react-bootstrap'

const index = () => {
  return (
    <Dashboard>
      <Row className="mb-5">
        {/* menu */}
        <Col md="12" className="mt-5">
          <Card>
            <Card.Header style={{backgroundColor: '#0d335f'}}>
              <Card.Title as="h5" style={{color: '#fff'}}>
                Crear Propietario
              </Card.Title>
            </Card.Header>
            <Card.Body className="flex-row">
              <Row>
                <Col sm={6} md={12}>
                  <Card
                    text={'white'}
                    style={{
                      backgroundColor: '#EEEEEE',
                    }}>
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Nombre completo *
                              </label>
                              <Form.Control
                                placeholder="Nombre completo"
                                type="text"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>Email *</label>
                              <Form.Control
                                placeholder="Correo electronico"
                                type="email"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Dirección *
                              </label>
                              <Form.Control
                                placeholder="Direccion"
                                type="text"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Teléfono de contacto *
                              </label>
                              <Form.Control
                                placeholder="Apellidos"
                                type="number"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>Cedula</label>
                              <Form.Control
                                placeholder="Cedula"
                                type="text"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          {/* <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>Correo</label>
                              <Form.Select
                                className="me-sm-2"
                                id="inlineFormCustomSelect">
                                <option value="0">Seleccionar...</option>
                                <option value="1">Mascota</option>
                                <option value="2">Propietario</option>
                              </Form.Select>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col> */}

                          <Col xs="auto" className="my-1" md="12">
                            <Button type="submit">Crear</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Dashboard>
  )
}

export default index
