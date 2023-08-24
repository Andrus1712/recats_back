import { RoomRequestModel, RoomResponseModel } from '../../domain/models/rooms';

export interface RoomDataSource {
    createRoom(room: RoomRequestModel): void;
    deleteRoom(id: string): void;
    updateRoom(id: string, room: RoomRequestModel): void;
    getAllRooms(): Promise<RoomResponseModel[]>;
    getRoom(id: string): Promise<RoomResponseModel>;
}
