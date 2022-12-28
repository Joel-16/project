import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { existsSync, mkdir } from 'fs';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try{ 
    if (!existsSync(join(__dirname, 'uploads'))){
      mkdir(join(__dirname, 'uploads'),{recursive :true}, (err) => {
        if (err) {
            return console.error(err);
        }
      })
    }
  } catch {
    return
  }
  app.use(express.static(join(process.cwd(),'dist','uploads')));
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
