import { Injectable } from '@nestjs/common';
import { date } from 'joi';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservation.repo';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationRepo: ReservationsRepository) {}
  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepo.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  async findAll() {
    console.log('TESTT');
    const reservations = this.reservationRepo.find({});

    return reservations;
  }

  findOne(_id: string) {
    return this.reservationRepo.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepo.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservationRepo.findOneAndDelete({ _id });
  }
}
