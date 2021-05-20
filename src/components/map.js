import { socket } from '../config/constants';
import React, { useState, useEffect } from "react";

// Cosas del mapa
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map(props) {
  console.log('props', props);
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
      </MapContainer>
    </div>
  )
}
