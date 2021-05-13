import { API_URL } from '../config/constants';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

export default function Chat() {
  // js code
  // const socket = io(API_URL, { path: '/flights' })


  const [response, setResponse] = useState("");  // Hook

  useEffect(() => {
    const socket = socketIOClient(API_URL, { path: '/flights' });
    socket.on("FromAPI", data => {
      console.log('data', data);
      setResponse(data);
    });
  }, []);

  return(
    <div>
      <div>El API_URL es {API_URL}</div>
      <div>{response}</div>
    </div>
  )
}
