import React from 'react'
import Navigation from './components/Navigation'
import Carousel  from './components/Carousel'
import Card from './components/Card'
import { Container,Row,Col } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navigation/>
      <Carousel/>
      <Container className='mt-4'>
      <Container className='mt-4'>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
        <Card/>
      </Container>
    </div>
  )
}

export default App
