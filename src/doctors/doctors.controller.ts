import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UpdateProfile } from 'src/account/dto/update-account.dto';
import { DoctorGuard } from '../util/authenticatorGuard.util';
import { imageStorage } from '../util/fileUpload';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorService: DoctorsService) { }

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @UseGuards(DoctorGuard)
  @UseInterceptors(FileInterceptor('file', { storage: diskStorage({ destination: imageStorage.destinationPath, filename: imageStorage.customFileName }) }))
  @Post('profile')
  async profile(@UploadedFile() image, @Body() body: UpdateProfile, @Req() req) {
    if (typeof image === 'object') {
       image = {
        link :'http://localhost:3000' + '/' + image.filename,
        path : image.path
      }
    }
    return await this.doctorService.profile({ ...body, image }, req.user)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorService.remove(Number(id));
  }
}
