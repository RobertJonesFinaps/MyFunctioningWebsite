import { Test, TestingModule } from '@nestjs/testing';
import { RijksController } from './rijks.controller';

describe('RijksController', () => {
  let controller: RijksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RijksController],
    }).compile();

    controller = module.get<RijksController>(RijksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
