import React from 'react'
import {Button, Card, Row, Col, Table, Form} from 'react-bootstrap'
import {FaRegEdit} from 'react-icons/fa'
import Dashboard from '../Dashboard'

function Home() {
  // const history = useHistory()
  // import {useHistory} from 'react-router-dom'

  return (
    <Dashboard>
      <Row className="mb-5">
        {/* menu */}
        <Col md="12" className="mt-5">
          <Card>
            <Card.Header style={{backgroundColor: '#0d335f'}}>
              <Card.Title as="h5" style={{color: '#fff'}}>
                Menu
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
                        <Row className="align-items-center">
                          <Col xs="auto" className="my-1">
                            <Form.Label
                              className="me-sm-2"
                              htmlFor="inlineFormCustomSelect"
                              visuallyHidden>
                              Preference
                            </Form.Label>
                            <Form.Select
                              className="me-sm-2"
                              id="inlineFormCustomSelect">
                              <option value="0">Seleccionar...</option>
                              <option value="1">Mascota</option>
                              <option value="2">Propietario</option>
                            </Form.Select>
                          </Col>
                          <Col sm={3} className="my-1">
                            <Form.Label
                              htmlFor="inlineFormInputName"
                              visuallyHidden>
                              Name
                            </Form.Label>
                            <Form.Control
                              id="inlineFormInputName"
                              placeholder=""
                            />
                          </Col>
                          <Col xs="auto" className="my-1">
                            <Button type="submit">Buscar</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="12" className="mt-3">
                  <Card className="card-user">
                    <div className="card-image"></div>
                    <Card.Header style={{backgroundColor: '#164e6b9e'}}>
                      <Card.Title style={{color: '#fff'}}>
                        Resultado de la busqueda
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <div className="author">
                        <Table responsive="sm">
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Raza</th>
                              <th>Nacimiento</th>
                              <th className="col-auto text-center">Editar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Jose</td>
                              <td>Chanda</td>
                              <td>2021-12-12</td>
                              <td className="col-auto text-center">
                                <a href="">
                                  <FaRegEdit size={'1em'} />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Jose</td>
                              <td>Chanda</td>
                              <td>2021-12-12</td>
                              <td className="col-auto text-center">
                                <a href="">
                                  <FaRegEdit size={'1em'} />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
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

export default Home
