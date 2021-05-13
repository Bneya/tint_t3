import { API_URL } from '../config/constants';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

export default function Chat() {
  // js code
  // const socket = io(API_URL, { path: '/flights' })


  const [response, setResponse] = useState([]);  // Hook

  useEffect(() => {
    const socket = socketIOClient(API_URL, { path: '/flights' });
    socket.on("POSITION", data => {
      console.log('data', data);
      // const array1 = [];
      // array1.push(data)
      setResponse(data);
    });

    // Desconectar websocket
    return () => socket.disconnect();

  }, []);

  return(
    <div>
      <div>El API_URL es {API_URL}</div>
      {/* <div>el código es: {response.code}</div> */}
    </div>
  )
}
