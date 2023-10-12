import { createContext } from 'react';
import { io } from 'socket.io-client';

// const URL = import.meta.env.VITE_SERVER_URL;
const URL = 'https://baton-server.onrender.com:4000';

export const socket = io(URL).connect();
export const SocketContext = createContext(socket);

