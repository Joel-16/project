import { HttpException, HttpStatus } from "@nestjs/common";
import { randomBytes } from "crypto";
import { resolve } from "path";

type mimetype = 'image/png' |'image/jpg' | 'image/jpeg'
const validmime : mimetype[] =['image/png','image/jpg' , 'image/jpeg']
export class imageStorage {
 
  static async customFileName(req, file, cb) {
    if (!validmime.includes(file.mimetype)){
      throw new HttpException('file is not an image', HttpStatus.UNSUPPORTED_MEDIA_TYPE)
    }
    let name = await randomBytes(16).toString('hex');
    let fileExtension = "";
    if(file.mimetype.indexOf("jpeg") > -1){
        fileExtension = "jpg"
    }else if(file.mimetype.indexOf("png") > -1){
        fileExtension = "png";
    } else if(file.mimetype.indexOf("jpg") > -1){
      fileExtension = "jpg"; 
    } else {
      throw new HttpException('file is not an image', HttpStatus.UNSUPPORTED_MEDIA_TYPE)
    }
    const originalName = file.originalname.split(".")[0];
    cb(null, name+"."+fileExtension);
  }
  
  static destinationPath(req, file, cb) {
    cb(null, resolve(__dirname,'..', 'uploads'))
  }
     
 }