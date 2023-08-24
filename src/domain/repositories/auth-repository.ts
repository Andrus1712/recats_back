import { AuthDataSource } from '../../data/interfaces/auth-data-source';
import { AuthRepository } from '../interfaces/repositories/auth-repository';
import { AuthRequestModel, AuthResponseModel } from '../models/auth';

export class AuthRepositoryImpl implements AuthRepository {
    private authDataSource: AuthDataSource;
    constructor(authDataSource: AuthDataSource) {
        this.authDataSource = authDataSource;
    }

    async login(infoUser: AuthRequestModel): Promise<AuthResponseModel> {
        return await this.authDataSource.login(infoUser);
    }
}
