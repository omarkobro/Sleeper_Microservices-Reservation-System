import { isEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @isEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
