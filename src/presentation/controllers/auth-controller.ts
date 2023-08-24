import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { LoginUser } from '../../domain/use-cases/auth/login-user';
import { AuthRequestModel, AuthResponseModel } from '../../domain/models/auth';

export class AuthController {
    private secretKey = process.env.SECRET_KEY || 'tokentest';
    private loginUser: LoginUser;
    constructor(loginUser: LoginUser) {
        this.loginUser = loginUser;
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body;
        if (!username) {
            return res.status(404).json({ message: 'Username is requiered!', data: false });
        }
        const infoUser: AuthRequestModel = {
            username: username,
            passwowrd: password,
        };
        const user = await this.loginUser.execute(infoUser);
        if (!user) {
            return res.status(404).json({ message: 'No user found', data: false });
        }

        // Validamos que la contraseña sea la misma
        const isPasswordValid = await bcrypt.compare(password, user.pass || '');
        if (!isPasswordValid) {
            return res.status(404).json({ message: 'Invalid password', data: false });
        }
        // Generamos el token jwt
        const token = this.generateToken(user);
        // Guardamos el token en las cookies
        res.cookie('token', token);
        console.log(user);
        return res.header('auth-token', token).status(200).json({
            message: 'Login Successfully',
            _token: token,
            data: user,
        });
    }

    async verifyToken(req: Request, res: Response, next: NextFunction) {
        // Validamos el token por las cockies o por los headers
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        // const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        jwt.verify(token, this.secretKey, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            req.userLogin = decoded.sub;
            next();
        });
    }

    generateToken(user: AuthResponseModel): string {
        const payload = {
            sub: user.id,
            iat: Date.now(),
        };
        const options = {
            expiresIn: '5m',
            issuer: 'myApp',
        };
        return jwt.sign(payload, this.secretKey, options);
    }
}
