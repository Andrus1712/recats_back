import { RoomResponseModel } from '../../models/rooms';

export interface GetAllRoomsUseCase {
    execute(): Promise<RoomResponseModel[]>;
}
