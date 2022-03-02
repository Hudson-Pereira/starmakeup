import { Test, TestingModule } from '@nestjs/testing';
import { FornecedorProdutoController } from './fornecedor-produto.controller';
import { FornecedorProdutoService } from './fornecedor-produto.service';

describe('FornecedorProdutoController', () => {
  let controller: FornecedorProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FornecedorProdutoController],
      providers: [FornecedorProdutoService],
    }).compile();

    controller = module.get<FornecedorProdutoController>(FornecedorProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
