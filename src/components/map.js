import { socket } from '../config/constants';
import React, { useState, useEffect } from "react";

// Cosas del mapa
import { MapContainer, TileLayer, Polyline, Circle, Tooltip } from 'react-leaflet'

// Función utilitaria para armar polylines
function formPolylines(finfo) {

  const polylines = finfo.map(f => [f.origin, f.destination]);
  return polylines;
}

// Función utilitaria que arma las polylines de tracks
function formPolyTracks(vuelosTracks) {

  const polyTracks = Object.values(vuelosTracks);
  return polyTracks;
}

export default function Map(props) {

  // Hooks
  const [vuelosPos, setVuelosPos] = useState({});
  const [vuelosTracks, setVuelosTracks] = useState({});
  
  // Obtener lineas de trayectorias teóricas
  const { finfo } = props;
  const polylines = formPolylines(finfo);

  // Hook para actualizar posiciones y líneas según eventos del socket
  useEffect(()=> {
    socket.on('POSITION', data => {
      const { code, position } = data;
      // console.log('code, position', code, position)
      setVuelosPos(oldObj => ({ ...oldObj, [code]: position}))
      
      setVuelosTracks(oldObj => ({
        ...oldObj,
        [code]: ( code in oldObj ? oldObj[code].concat([position]) : [position] ) 
      }))
    });


    // Desconectar websocket
    return () => socket.disconnect();
  }, [])


  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }

  // console.log('vuelosTracks', vuelosTracks);
  const polyTracks = formPolyTracks(vuelosTracks);

  return (
    <div>
      <div>Mapa de vuelos "En vivo"</div>
      <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline pathOptions={limeOptions} positions={polylines} />
        <Polyline pathOptions={purpleOptions} positions={polyTracks} />

        {Object.entries(vuelosPos).map((vuelo) => {

          return(
            <Circle
              key={vuelo[0]}
              radius={800}
              center={vuelo[1]}
            >
              <Tooltip>{vuelo[0]}</Tooltip>
            </Circle>
          )

        })}

      </MapContainer>

    </div>
  )
}
