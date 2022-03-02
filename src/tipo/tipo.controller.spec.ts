import { Test, TestingModule } from '@nestjs/testing';
import { TipoController } from './tipo.controller';
import { TipoService } from './tipo.service';

describe('TipoController', () => {
  let controller: TipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoController],
      providers: [TipoService],
    }).compile();

    controller = module.get<TipoController>(TipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
