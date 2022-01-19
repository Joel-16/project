import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    if (await this.authService.validateUser(email, password)) {
      const user = await this.authService.validateUser(email, password)
      return user;
      // } else (await this.authService.validateStaff(email, password)) {
      //   const staff = await this.authService.validateStaff(email, password)
      //   return staff
      // }
    }
  }
}