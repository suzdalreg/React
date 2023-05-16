import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider