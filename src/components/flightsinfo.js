import { socket } from '../config/constants';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


export default function FlightsInfo() {

  const [finfo, setfinfo] = useState([]);

  // Hook para actualizar estado, escucha el evento FLIGHTS
  useEffect(() => {
    socket.on("FLIGHTS", data => {
      console.log('data', data);
      setfinfo(data);
    });
    // Desconectar websocket
    return () => socket.disconnect();
  }, []);

  const getFinfo = (e) => {

    // Enviamos al socket la solicitud para que me mande Info
    socket.emit('FLIGHTS');
  }

  return(
    <div>
      <div>Flights Info</div>
      <input type="button" onClick={getFinfo} value="Obtener info de vuelos"/>

      {finfo.map((f) => {


        return (
          <Card key={f.code}>
            <Card.Body>
              <Card.Title>Vuelo {f.code}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Aerolínea: {f.airline}</ListGroup.Item>
              <ListGroup.Item>Coordenadas origen: [{f.origin[0]}, {f.origin[1]}]</ListGroup.Item>
              <ListGroup.Item>Coordenadas destino: [{f.destination[0]}, {f.destination[1]}]</ListGroup.Item>
              <ListGroup.Item>Modelo avión: {f.plane}</ListGroup.Item>
              <ListGroup.Item>Cantidad asientos: {f.seats}</ListGroup.Item>
              <ListGroup.Item>Pasajeros...</ListGroup.Item>
            </ListGroup>
          </Card>
        )
      })}

    </div>
  )
}
