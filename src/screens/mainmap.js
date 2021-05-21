import React from 'react'
import Chat from '../components/chat';
import FlightsInfo from '../components/flightsinfo';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainMap() {
  // javascript code
  return (
    // html-ish
    <div className="App">

      <Container>
        <Row>
          <Col xs={9}> <FlightsInfo /> </Col>
          <Col> <Chat /> </Col>
        </Row>
      </Container>
      
      
      
    </div>
  )
}
