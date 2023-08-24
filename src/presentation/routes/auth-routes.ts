import express from 'express';
import { authController } from '../dependencies/auth-dependencies';

const authRoutes = express.Router();

authRoutes.post('/login', authController.login.bind(authController));
authRoutes.get('/verifyToken', authController.verifyToken.bind(authController));

export { authRoutes };
