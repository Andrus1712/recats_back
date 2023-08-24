import { RoomRepository } from '../../interfaces/repositories/room-repository';
import { GetAllRoomsUseCase } from '../../interfaces/use-cases/get-all-rooms-use-case';
import { RoomResponseModel } from '../../models/rooms';

export class GetAllRooms implements GetAllRoomsUseCase {
    private readonly roomRepository: RoomRepository;

    constructor(roomRepository: RoomRepository) {
        this.roomRepository = roomRepository;
    }

    async execute(): Promise<RoomResponseModel[]> {
        try {
            const result = await this.roomRepository.getAllRooms();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
