import { Test, TestingModule } from '@nestjs/testing';
import { FornecedorProdutoService } from './fornecedor-produto.service';

describe('FornecedorProdutoService', () => {
  let service: FornecedorProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FornecedorProdutoService],
    }).compile();

    service = module.get<FornecedorProdutoService>(FornecedorProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
