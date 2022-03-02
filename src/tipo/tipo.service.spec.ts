import { Test, TestingModule } from '@nestjs/testing';
import { TipoService } from './tipo.service';

describe('TipoService', () => {
  let service: TipoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoService],
    }).compile();

    service = module.get<TipoService>(TipoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
