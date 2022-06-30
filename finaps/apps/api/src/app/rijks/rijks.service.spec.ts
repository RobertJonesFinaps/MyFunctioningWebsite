import { Test, TestingModule } from '@nestjs/testing';
import { RijksService } from './rijks.service';

describe('RijksService', () => {
  let service: RijksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RijksService],
    }).compile();

    service = module.get<RijksService>(RijksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
