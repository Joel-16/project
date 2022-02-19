import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthenticatorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      let token = req.headers.authorization.split(' ')[1]
      let decodedTokn = jwt.verify(token, process.env.JWT_SECRET)
      let a  = JSON.parse(JSON.stringify(decodedTokn))
      req.user= a
      return true;
    } catch (err){ 
      throw new HttpException("Expired Token, please Re-direct to login page", HttpStatus.UNAUTHORIZED)    
    } 
  }
}

@Injectable()
export class DoctorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      let token = req.headers.authorization.split(' ')[1]
      let decodedTokn = jwt.verify(token, process.env.DOCTOR_SECRET)
      let a  = JSON.parse(JSON.stringify(decodedTokn))
      req.user= a
      return true;
    } catch (err){ 
      throw new HttpException("Expired Token, please Re-direct to login page", HttpStatus.UNAUTHORIZED)    
    } 
  }
}

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      let token = req.headers.authorization.split(' ')[1]
      let decodedTokn = jwt.verify(token, process.env.ADMIN_SECRET)
      let a  = JSON.parse(JSON.stringify(decodedTokn))
      req.user= a
      return true;
    } catch (err){ 
      throw new HttpException("Expired Token, please Re-direct to login page", HttpStatus.UNAUTHORIZED)    
    } 
  }
}
