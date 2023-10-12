import { createContext } from 'react';
import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_SERVER_URL;

export const socket = io(URL).connect();
export const SocketContext = createContext(socket);

