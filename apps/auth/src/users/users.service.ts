import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { UserRepo } from './user.repo';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepo) {}

  async createUser(data: CreateUserDTO) {
    return this.userRepo.create(data);
  }
}
