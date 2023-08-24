import express from 'express';
import { userController } from '../dependencies/rooms-dependencies';
import { authController } from '../dependencies/auth-dependencies';

const roomRoutes = express.Router();

roomRoutes.get('/', authController.verifyToken.bind(authController), userController.run.bind(userController));

export { roomRoutes };
