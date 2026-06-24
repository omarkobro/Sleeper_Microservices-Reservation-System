import { DatabaseModule, LoggerModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ReservationsRepository } from './reservation.repo';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import {
  ReservationDocument,
  ReservationSchema,
} from './reservations/models/reservation.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
