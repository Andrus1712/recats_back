import { MysqlAuthDataSource } from '../../data/data-sources/mysql/auth-data-source';
import mysqlConn from '../../data/db/mysql-connection';
import { AuthRepositoryImpl } from '../../domain/repositories/auth-repository';
import { LoginUser } from '../../domain/use-cases/auth/login-user';
import { AuthController } from '../controllers/auth-controller';

const mysqlAuthDataSource = new MysqlAuthDataSource(mysqlConn);

const authRepositoryImpl = new AuthRepositoryImpl(mysqlAuthDataSource);

const loginUser = new LoginUser(authRepositoryImpl);

export const authController = new AuthController(loginUser);
