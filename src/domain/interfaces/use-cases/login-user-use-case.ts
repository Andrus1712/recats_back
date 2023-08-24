import { AuthRequestModel, AuthResponseModel } from '../../models/auth';

export interface LoginUserUseCase {
    execute(infoUser: AuthRequestModel): Promise<AuthResponseModel>;
}
