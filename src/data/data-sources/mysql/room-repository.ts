import { Connection } from 'mysql';
import { RoomDataSource } from '../../interfaces/room-data-source';
import { RoomRequestModel, RoomResponseModel } from '../../../domain/models/rooms';

export class MysqlRoomDataSource implements RoomDataSource {
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

    createRoom(room: RoomRequestModel): void {
        throw new Error('Method not implemented.');
    }
    deleteRoom(id: string): void {
        throw new Error('Method not implemented.');
    }
    updateRoom(id: string, room: RoomRequestModel): void {
        throw new Error('Method not implemented.');
    }
    async getAllRooms(): Promise<RoomResponseModel[]> {
        const query = await this.consulta(
            `SELECT *
            FROM rooms r`,
            '',
        );
        if (!query) {
            throw new Error('Room not found');
        }
        if (query instanceof Array) {
            if (query.length > 0) {
                const rooms = query;
                return rooms;
            }
        } else {
            return null;
        }
    }
    getRoom(id: string): Promise<RoomResponseModel> {
        throw new Error('Method not implemented.');
    }
}
