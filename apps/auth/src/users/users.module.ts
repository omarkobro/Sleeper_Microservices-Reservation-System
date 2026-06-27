import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { UserDocument, UserSchema } from './models/user.schema';
import { UserRepo } from './user.repo';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepo],
})
export class UsersModule {}
