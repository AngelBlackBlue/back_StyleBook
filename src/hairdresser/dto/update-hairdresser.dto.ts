import { PartialType } from '@nestjs/mapped-types';
import { CreateHairdresserDto } from './create-hairdresser.dto';

export class UpdateHairdresserDto extends PartialType(CreateHairdresserDto) {}
