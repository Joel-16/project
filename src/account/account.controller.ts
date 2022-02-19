import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageStorage } from '../util/fileUpload';
import { AuthenticatorGuard } from '../util/authenticatorGuard.util';
import { AccountService } from './account.service';
import { UpdateProfile } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @UseGuards(AuthenticatorGuard)
  @UseInterceptors(FileInterceptor('file', { storage: diskStorage({ destination: imageStorage.destinationPath, filename: imageStorage.customFileName }) }))
  @Post('profile')
  async profile(@UploadedFile() image, @Body() body: UpdateProfile, @Req() req) {
    if (typeof image === 'object') {
       image = {
        link :'http://localhost:3000' + '/' + image.filename,
        path : image.path
      }
    }
    return await this.accountService.profile({ ...body, image }, req.user)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove();
  }
}
