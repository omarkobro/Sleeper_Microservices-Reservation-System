import { Injectable, UnauthorizedException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { GetUserDto } from './DTOs/get-user.dto';
import { UserRepo } from './user.repo';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepo) {}

  async createUser(data: CreateUserDTO) {
    return this.userRepo.create({
      ...data,
      password: await bcrypt.hash(data.password,10)
    });


  }

  async verifyUser(email: string, password: string){
    const user = await this.userRepo.findOne({email})
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(isPasswordValid){
      throw new UnauthorizedException("Invalid Credentials")
    }

    return user // DOES THE strategy here attach this user to the requset object ?
  }

  async getUser(getUserDTO: GetUserDto){
    return this.userRepo.findOne(getUserDTO)
  }
}
