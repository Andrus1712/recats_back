import { Request, Response } from 'express';
import { GetAllRooms } from '../../domain/use-cases/room/get-all-rooms';

export class RoomController {
    private readonly getAllRoomsUseCase: GetAllRooms;
    constructor(getAllRoomsUseCase: GetAllRooms) {
        this.getAllRoomsUseCase = getAllRoomsUseCase;
    }
    async run(req: Request, res: Response) {
        try {
            const data = await this.getAllRoomsUseCase.execute();
            if (data) {
                return res.status(200).send(data);
            } else {
                return res.status(404).send('Rooms not found');
            }
        } catch (error) {
            return res.status(500).send();
        }
    }
}
