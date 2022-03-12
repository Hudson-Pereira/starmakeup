import { Test, TestingModule } from '@nestjs/testing';
import { CaixaController } from './caixa.controller';
import { CaixaService } from './caixa.service';

describe('CaixaController', () => {
  let controller: CaixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaixaController],
      providers: [CaixaService],
    }).compile();

    controller = module.get<CaixaController>(CaixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
