import { Body, Controller } from '@nestjs/common';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }
}
