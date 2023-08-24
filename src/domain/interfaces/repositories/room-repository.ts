import { RoomRequestModel, RoomResponseModel } from '../../models/rooms';

export interface RoomRepository {
    createRoom(room: RoomRequestModel): void;
    deleteRoom(id: string): void;
    updateRoom(id: string, room: RoomRequestModel): void;
    getAllRooms(): Promise<RoomResponseModel[]>;
    getRoom(id: string): Promise<RoomResponseModel>;
}
