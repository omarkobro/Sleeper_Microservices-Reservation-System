import { AbstaractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReservationDocument } from './reservations/models/reservation.schema';

@Injectable()
export class ReservationsRepository extends AbstaractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    ReservationsModel: Model<ReservationDocument>,
  ) {
    super(ReservationsModel);
  }
}
