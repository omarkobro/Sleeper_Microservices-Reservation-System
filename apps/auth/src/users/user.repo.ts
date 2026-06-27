import { AbstaractRepository } from '@app/common';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './models/user.schema';

export class UserRepo extends AbstaractRepository<UserDocument> {
  protected readonly logger = new Logger(UserRepo.name);

  // why UserDocument.name not user documentr only ?
  constructor(@InjectModel(UserDocument.name) UserModule: Model<UserDocument>) {
    super(UserModule);
  }
}
