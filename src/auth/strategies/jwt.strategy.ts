import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ExtractJwt } from 'passport-jwt';
import * as process from 'process';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    try {
      const user = await this.userService.findById(+payload.id);
      if (!user) {
        throw new UnauthorizedException('Нет доступа');
      }
      return {
        id: user.id,
      };
    } catch (error) {
      // Здесь вы можете логировать ошибку или обрабатывать ее по-другому, если это необходимо
      throw new UnauthorizedException('Ошибка валидации пользователя');
    }
  }
}
