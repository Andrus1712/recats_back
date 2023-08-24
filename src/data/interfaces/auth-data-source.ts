import { AuthRequestModel, AuthResponseModel } from '../../domain/models/auth';

export interface AuthDataSource {
    login(infoUser: AuthRequestModel): Promise<AuthResponseModel>;
}
