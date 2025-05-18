import { Test, TestingModule } from '@nestjs/testing';
import { HairdresserController } from './hairdresser.controller';
import { HairdresserService } from './hairdresser.service';

describe('HairdresserController', () => {
  let controller: HairdresserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HairdresserController],
      providers: [HairdresserService],
    }).compile();

    controller = module.get<HairdresserController>(HairdresserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
