import { configEnv } from './config';
import { authRoutes } from './presentation/routes/auth-routes';
import { roomRoutes } from './presentation/routes/rooms-routes';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const server = express();
//config cors
server.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200,
    }),
);
//read body
server.use(express.json());
//public files
server.use(express.static('public'));
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));

server.use('/api/auth', authRoutes);
server.use('/api/rooms', roomRoutes);

const { rest_port } = configEnv.api;
server.listen(rest_port, () => console.log('Running on http://localhost:' + rest_port));
