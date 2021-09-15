import React from 'react'
import { useHistory} from 'react-router-dom'
import { Form,  Button} from 'react-bootstrap'
import ContainerOnBoarding from './ContainerOnBoarding'
import '../../styles/Dashboard.css'

const SignIn = () => {
  const history = useHistory()
  const handleIniciar = () => {
    history.push('/home')
  }
  return (
    <ContainerOnBoarding title="Iniciar sesion">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Ingresar correo" />
          <Form.Text className="text-muted">Error correo electronico</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresar contraseña" />
          <Form.Text className="text-muted">Error Contraseña</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuérdame" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            type="button"
            size="lg"
            className="color-button-invemar"
            style={{backgroundColor: '#4badf1', color: 'white',borderColor:'#4badf1'}}
            onClick={handleIniciar}>
            Iniciar sesion
          </Button>
        </div>
      
      </Form>
    </ContainerOnBoarding>
  )
}

export default SignIn
