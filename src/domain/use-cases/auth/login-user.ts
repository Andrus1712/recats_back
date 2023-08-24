import { AuthRepository } from '../../interfaces/repositories/auth-repository';
import { LoginUserUseCase } from '../../interfaces/use-cases/login-user-use-case';
import { AuthRequestModel, AuthResponseModel } from '../../models/auth';

export class LoginUser implements LoginUserUseCase {
    private readonly authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async execute(infoUser: AuthRequestModel): Promise<AuthResponseModel> {
        try {
            const result = await this.authRepository.login(infoUser);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
