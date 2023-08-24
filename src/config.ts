import { config } from 'dotenv';
config();

export const configEnv = {
    server: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 3000,
    },
    api: {
        host: process.env.HOST || '127.0.0.1',
        rest_port: process.env.REST_PORT || 3000,
    },
    mysql: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        database: process.env.DATABASE || 'mysql',
        user: process.env.DB_NAME || 'root',
        password: process.env.DB_PASSWORD || 'password',
    },
};
