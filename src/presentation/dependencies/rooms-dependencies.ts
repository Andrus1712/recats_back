import { MysqlRoomDataSource } from '../../data/data-sources/mysql/room-repository';
import mysqlConn from '../../data/db/mysql-connection';
import { RoomRopositoryImpl } from '../../domain/repositories/room-repository';
import { GetAllRooms } from '../../domain/use-cases/room/get-all-rooms';
import { RoomController } from '../controllers/room-controller';

const mysqlRoomDataSource = new MysqlRoomDataSource(mysqlConn);

const roomRopositoryImpl = new RoomRopositoryImpl(mysqlRoomDataSource);

const getAllRooms = new GetAllRooms(roomRopositoryImpl);
// El controlador es quien se encarga de recibir la peticion y poner en funcionamiento el caso de uso
// Si son mas casos de uso se deben ir agregando aqui UserController(userByIdUseCase, createNewUser, ...);
export const userController = new RoomController(getAllRooms);
