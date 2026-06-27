import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], //why when we generated the user module it got imported here automatically ?
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
