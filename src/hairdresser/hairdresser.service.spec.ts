import { Test, TestingModule } from '@nestjs/testing';
import { HairdresserService } from './hairdresser.service';

describe('HairdresserService', () => {
  let service: HairdresserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HairdresserService],
    }).compile();

    service = module.get<HairdresserService>(HairdresserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
