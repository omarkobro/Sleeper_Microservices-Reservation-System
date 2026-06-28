import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../decorators/current-user.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { UserDocument } from './models/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument){
    return user
  }
}
