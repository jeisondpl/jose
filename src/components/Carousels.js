import React from 'react'
import {Carousel} from 'react-bootstrap'

const Carousels = () => {
  return (
    <Carousel fade interval={1800}>
      <Carousel.Item style={{height: '100vh'}}>
        <img
          height="700"
          width="700"
          className="d-block w-100"
          src="https://miro.medium.com/max/1200/1*TpK5V6D6Gd0IKwd1mdNF4A.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Reto técnico Atome</h3>
          <p>
            Una guardería de mascotas desea realizar la administración de los
            animalitos que tiene a cargo
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '100vh'}}>
        <img
          height="700"
          width="700"
          className="d-block w-100"
          src="https://miro.medium.com/max/1200/1*TpK5V6D6Gd0IKwd1mdNF4A.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>PQS</h3>
          <p>
            Esta prueba la diseñamos con el fin de que puedas mostrar tu
            capacidad de entender una necesidad y convertirla en software..
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height: '100vh'}}>
        <img
          height="700"
          width="700"
          className="d-block w-100"
          src="https://miro.medium.com/max/1200/1*TpK5V6D6Gd0IKwd1mdNF4A.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Reto técnico Atome</h3>
          <p>
            La guardería tiene a su cargo un volumen significativo de mascotas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels
