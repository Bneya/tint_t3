import socketIOClient from "socket.io-client";

export const API_URL = 'wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl';

export const socket = socketIOClient(API_URL, { path: '/flights' });
