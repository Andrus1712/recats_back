import { AuthRequestModel, AuthResponseModel } from '../../models/auth';

export interface AuthRepository {
    login(infoUser: AuthRequestModel): Promise<AuthResponseModel>;
}
