import { RoomDataSource } from '../../data/interfaces/room-data-source';
import { RoomRepository } from '../interfaces/repositories/room-repository';
import { RoomRequestModel, RoomResponseModel } from '../models/rooms';

export class RoomRopositoryImpl implements RoomRepository {
    roomDataSource: RoomDataSource;
    constructor(roomDataSource: RoomDataSource) {
        this.roomDataSource = roomDataSource;
    }

    async createRoom(room: RoomRequestModel) {
        await this.roomDataSource.createRoom(room);
    }
    async deleteRoom(id: string) {
        await this.roomDataSource.deleteRoom(id);
    }
    async updateRoom(id: string, room: RoomRequestModel) {
        await this.roomDataSource.updateRoom(id, room);
    }
    async getAllRooms(): Promise<RoomResponseModel[]> {
        const result = await this.roomDataSource.getAllRooms();
        return result;
    }
    async getRoom(id: string): Promise<RoomResponseModel> {
        const result = await this.roomDataSource.getRoom(id);
        return result;
    }
}
