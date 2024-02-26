import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.usersService.findByEmail(email);
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
      throw new UnauthorizedException('Неверные учетные данные');
    } catch (e) {
      throw new InternalServerErrorException('ошибка валидации юзера');
    }
  }

  async registration(dto: CreateUserDto) {
    try {
      const user = await this.usersService.create(dto);
      return {
        token: this.jwtService.sign({ id: user.id }),
      };
    } catch (e) {
      throw new ForbiddenException('Ошибка при регистрации юзера');
    }
  }

  async login(user: UserEntity) {
    const payload = { id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
