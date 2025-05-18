import { Module } from '@nestjs/common';
import { HairdresserService } from './hairdresser.service';
import { HairdresserController } from './hairdresser.controller';

@Module({
  controllers: [HairdresserController],
  providers: [HairdresserService],
})
export class HairdresserModule {}
