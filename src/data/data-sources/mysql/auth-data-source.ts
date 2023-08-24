import { Connection } from 'mysql';
import { AuthRequestModel, AuthResponseModel } from '../../../domain/models/auth';
import { AuthDataSource } from '../../interfaces/auth-data-source';

export class MysqlAuthDataSource implements AuthDataSource {
    private readonly connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    consulta(sql, argumentos) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, argumentos, (error, respuesta) => {
                if (error) {
                    console.log(error);
                    return reject(error);
                }

                resolve(respuesta);
            });
        });
    }

    async login(infoUser: AuthRequestModel): Promise<AuthResponseModel> {
        const { username } = infoUser;
        const query = await this.consulta(
            `SELECT *
            FROM usuarios u
            WHERE u.usuario = ?`,
            [username],
        );
        if (!query) {
            throw new Error('User not found');
        }
        if (query instanceof Array) {
            if (query.length > 0) {
                const data: AuthResponseModel = JSON.parse(JSON.stringify(query))[0];
                return data;
            }
        }
    }
}
