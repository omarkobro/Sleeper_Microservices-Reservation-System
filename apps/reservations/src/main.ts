import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { ReservationsModule } from './reservations.module';
async function bootstrap() {
  console.log("test");
  
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
        const configService = app.get(ConfigService);

const port = configService.getOrThrow<string | number>('PORT');
await app.listen(port);
bootstrap();
}