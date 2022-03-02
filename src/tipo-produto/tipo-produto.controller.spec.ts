import { Test, TestingModule } from '@nestjs/testing';
import { TipoProdutoController } from './tipo-produto.controller';
import { TipoProdutoService } from './tipo-produto.service';

describe('TipoProdutoController', () => {
  let controller: TipoProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoProdutoController],
      providers: [TipoProdutoService],
    }).compile();

    controller = module.get<TipoProdutoController>(TipoProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
