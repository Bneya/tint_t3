import { socket } from '../config/constants';
import React, { useState, useEffect } from "react";

// Cosas del mapa
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, Tooltip } from 'react-leaflet'

// Función utilitaria para armar polylines
function formPolylines(finfo) {

  const polylines = finfo.map(f => [f.origin, f.destination]);

  console.log('polylines', polylines);
  return polylines;
}

export default function Map(props) {

  // Hooks
  const [vuelosPos, setVuelosPos] = useState({});
  
  // Obtener lineas de trayectorias teóricas
  const { finfo } = props;
  const polylines = formPolylines(finfo);

  // Hook para actualizar posiciones y líneas según eventos del socket
  useEffect(()=> {
    socket.on('POSITION', data => {
      //if (!(data.code in vuelosPos)) {
        const { code, position } = data;
        console.log('code, position', code, position)
        setVuelosPos(oldObj => ({ ...oldObj, [code]: position}))
      //}
      console.log(vuelosPos);
    });


    // Desconectar websocket
    return () => socket.disconnect();
  }, [])


  const limeOptions = { color: 'lime' }

  return (
    <div>
      <div>Acá va el mapa</div>
      <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Polyline pathOptions={limeOptions} positions={polylines} />

        {Object.entries(vuelosPos).map((vuelo) => {

          return(
            <Circle
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
