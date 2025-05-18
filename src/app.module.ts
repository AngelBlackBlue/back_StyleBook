import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HairdresserModule } from './hairdresser/hairdresser.module';
import { CalendarModule } from './calendar/calendar.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, HairdresserModule, CalendarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
