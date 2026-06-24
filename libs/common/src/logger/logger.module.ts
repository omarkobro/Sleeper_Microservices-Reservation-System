import { Module } from '@nestjs/common';
import { LoggerModule as PintoLoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    PintoLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: { singleLine: true },
        },
      },
    }),
  ],
})
export class LoggerModule {}
