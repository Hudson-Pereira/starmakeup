import { Test, TestingModule } from '@nestjs/testing';
import { TipoProdutoService } from './tipo-produto.service';

describe('TipoProdutoService', () => {
  let service: TipoProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoProdutoService],
    }).compile();

    service = module.get<TipoProdutoService>(TipoProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
