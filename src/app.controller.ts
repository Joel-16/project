import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AccountService } from './account/account.service';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/util/local-auth.guard';
import { DoctorsService } from './doctors/doctors.service';
import { RegisterDto } from './dto/dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly accountService : AccountService,
    private readonly authService : AuthService,
    private readonly doctorService : DoctorsService
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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req){
    let token = await this.authService.login(req.user)
    return {token : token, user : req.user}
  }

  @Get('find-doctor')
  async getDoctors(@Query() query){
    return await this.doctorService.findByLocation(query)
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
