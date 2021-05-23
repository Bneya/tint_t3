import { socket } from '../config/constants';
import React, { useState, useEffect, createRef } from "react";

import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';


export default function Chat() {
  // js code
  // const socket = io(API_URL, { path: '/flights' })


  const [messages, setMessage] = useState([]);  // Hook
  let chatInput = createRef();
  let nickname = createRef();

  useEffect(() => {
    socket.on("CHAT", data => {
      console.log('data', data);
      setMessage(oldArray => [...oldArray, data]);
    });
    // Desconectar websocket
    return () => socket.disconnect();
  }, []);

  // Enviar mensaje
  const sendMsg = (e) => {
       // Api request here
       console.log('llamando a la función con un botón. currText:', chatInput.current.value);

       // Enviar mensaje al socket
       const msgToSend = {
         name: nickname.current.value || 'Piloto desconocido',
         message: chatInput.current.value,
       }
       socket.emit('CHAT', msgToSend);

       // Limpiar el mensaje del chat
       chatInput.current.value = "";
   }

  return(
    <div className='center-col'>
      {messages.map((msg) => {
        const dateraw = new Date(msg.date);
        const date = `${dateraw.getHours()}:${dateraw.getMinutes()}`;
        return(

          <MessageBox
            key={msg.date}
            text={msg.message}
            title={msg.name}
            dateString={date}
          />
        )
      })}

      Nickame
      <input ref={nickname} defaultValue="Piloto desconocido"/>
      <input ref={chatInput} placeholder='Escribe tu mensaje...'/>
      <input type="button" onClick={sendMsg} value="Enviar"/>
    </div>
  )
}
