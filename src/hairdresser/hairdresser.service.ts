import { Injectable } from '@nestjs/common';
import { CreateHairdresserDto } from './dto/create-hairdresser.dto';
import { UpdateHairdresserDto } from './dto/update-hairdresser.dto';

@Injectable()
export class HairdresserService {
  create(createHairdresserDto: CreateHairdresserDto) {
    return 'This action adds a new hairdresser';
  }

  findAll() {
    return `This action returns all hairdresser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hairdresser`;
  }

  update(id: number, updateHairdresserDto: UpdateHairdresserDto) {
    return `This action updates a #${id} hairdresser`;
  }

  remove(id: number) {
    return `This action removes a #${id} hairdresser`;
  }
}
