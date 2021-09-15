import React, {useEffect, useState} from 'react'
import Dashboard from '../Dashboard'
import {Button, Card, Row, Col, Form} from 'react-bootstrap'
import {Alerta} from '../../components'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const URL = 'https://rickandmortyapi.com/api/character/361'

const index = ({id}) => {
  const [stateAleta, setStateAleta] = useState({
    success: false,
    error: false,
    text: '',
  })
  const {
    handleSubmit,
    formState: {errors},
    register,
  } = useForm()

  useEffect(() => {
    if (id)
      axios
        .get(URL, {
          crossdomain: true,
        })
        .then(res => {
          console.log(res.data)
          setStateAleta({success: true, text: 'Ok'})
        })
        .catch(error => {
          setStateAleta({error: true, text: error.Error})
        })

    setTimeout(function () {
      setStateAleta({success: false, error: false})
    }, 2000)
  }, [id])

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <Dashboard>
      <Row className="mb-5">
        {/* menu */}
        <Col md="12" className="mt-5">
          {stateAleta.success && (
            <Alerta text={stateAleta.text} variant={'success'} />
          )}

          {stateAleta.error && (
            <Alerta text={stateAleta.text} variant={'danger'} />
          )}

          <Card>
            <Card.Header style={{backgroundColor: '#0d335f'}}>
              <Card.Title as="h5" style={{color: '#fff'}}>
                Crear Mascota
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
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                          <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>Nombre *</label>
                              <Form.Control
                                id="nombre"
                                name="nombre"
                                {...register('nombre', {
                                  required: true,
                                })}
                                placeholder="Nombre completo"
                                type="text"></Form.Control>
                              <Form.Text className="text-muted">
                                {errors.nombre && (
                                  <p style={{color: 'red'}}>errors.nombre </p>
                                )}
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>Raza</label>
                              <Form.Select
                                id="raza"
                                name="raza"
                                {...register('raza', {})}
                                className="me-sm-2">
                                <option value="0">Seleccionar...</option>
                                <option value="1">Mascota</option>
                                <option value="2">Propietario</option>
                              </Form.Select>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Fecha Nacimiento *
                              </label>
                              <Form.Control
                                {...register('fecha_nacimineto', {})}
                                id="fecha_nacimineto"
                                name="fecha_nacimineto"
                                placeholder="Direccion"
                                type="date"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Comportamiento
                              </label>
                              <Form.Select
                                {...register('comportamiento', {})}
                                id="comportamiento"
                                name="comportamiento"
                                className="me-sm-2">
                                <option value="0">Seleccionar...</option>
                                <option value="1">Mascota</option>
                                <option value="2">Propietario</option>
                              </Form.Select>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Características físicas
                              </label>
                              <Form.Control
                                {...register('caracteristicas_fisicas', {})}
                                id="caracteristicas_fisicas"
                                name="caracteristicas_fisicas"
                                placeholder="Apellidos"
                                type="text"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Vacunas aplicadas
                              </label>
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
                          </Col>
                          <Col className="pl-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Fecha de ultima desparasitación *
                              </label>
                              <Form.Control
                                placeholder="Direccion"
                                type="date"></Form.Control>
                              <Form.Text className="text-muted">
                                Error
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col className="pr-1 mt-3" md="6">
                            <Form.Group>
                              <label style={{color: 'black'}}>
                                Propietario *
                              </label>
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
                          </Col>
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
