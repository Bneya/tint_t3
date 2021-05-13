import { socket } from '../config/constants';
import React, { useState, useEffect, createRef } from "react";


export default function Chat() {
  // js code
  // const socket = io(API_URL, { path: '/flights' })


  const [message, setMessage] = useState([]);  // Hook
  let chatInput = createRef();

  useEffect(() => {
    socket.on("CHAT", data => {
      console.log('data', data);
      setMessage(data);
    });
    // Desconectar websocket
    return () => socket.disconnect();
  }, []);

  // Enviar mensaje
  const fetchRequest = (e) => {
       // Api request here
       console.log('llamando a la función con un botón. currText:', chatInput.current.value);

       // Enviar mensaje al socket
       const msgToSend = {
         name: 'juanitoharcodeado',
         message: chatInput.current.value,
       }
       socket.emit('CHAT', msgToSend);

       // Limpiar el mensaje del chat
       chatInput.current.value = "";
   }

  return(
    <div>
      <div>el mensaje es: {message.name}, {message.date}, {message.message}</div>
      <input ref={chatInput} />
      <input type="button" onClick={fetchRequest} value="Enviar"/>
    </div>
  )
}
