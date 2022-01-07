import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AccountService } from './account/account.service';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { RegisterDto } from './dto/dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly accountService : AccountService,
    private readonly authService : AuthService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async register(@Body() body: RegisterDto){
    if(!body.password || !body.email){
      throw new HttpException('All fields are required', HttpStatus.NOT_ACCEPTABLE)
    }
    let a = await this.authService.register(body)
    return a
  }

  @Get('all')
  async all (){
    return await this.accountService.findAll()
  }

  @Delete()
  async delete(){
    let a = await this.accountService.remove()
    return a 
  }
}