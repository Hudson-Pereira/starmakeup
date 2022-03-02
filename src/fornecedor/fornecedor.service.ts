import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Injectable()
export class FornecedorService {
  create(createFornecedorDto: CreateFornecedorDto) {
    return 'This action adds a new fornecedor';
  }

  findAll() {
    return `This action returns all fornecedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedor`;
  }

  update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    return `This action updates a #${id} fornecedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedor`;
  }
}
