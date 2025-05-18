import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HairdresserService } from './hairdresser.service';
import { CreateHairdresserDto } from './dto/create-hairdresser.dto';
import { UpdateHairdresserDto } from './dto/update-hairdresser.dto';

@Controller('hairdresser')
export class HairdresserController {
  constructor(private readonly hairdresserService: HairdresserService) {}

  @Post()
  create(@Body() createHairdresserDto: CreateHairdresserDto) {
    return this.hairdresserService.create(createHairdresserDto);
  }

  @Get()
  findAll() {
    return this.hairdresserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hairdresserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHairdresserDto: UpdateHairdresserDto) {
    return this.hairdresserService.update(+id, updateHairdresserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hairdresserService.remove(+id);
  }
}
