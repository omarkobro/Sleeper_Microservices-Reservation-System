import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
      }),
    }),
  ], // we are telling the config to load env variables and all the env files
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}
