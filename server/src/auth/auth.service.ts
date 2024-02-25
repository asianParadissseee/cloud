import {Injectable, InternalServerErrorException, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {

    }

    async validateUser(email: string, password: string) {
        try {
            const user = await this.usersService.findByEmail(email)
            if (user && user.password === password) {
                const {password, ...result} = user
                return result
            }
            throw new UnauthorizedException("Неверные учетные данные")
        } catch (e) {
            throw new InternalServerErrorException("ошибка валидации юзера")
        }
    }

}
