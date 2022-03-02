import { Injectable } from '@nestjs/common';
import { CreateFornecedorProdutoDto } from './dto/create-fornecedor-produto.dto';
import { UpdateFornecedorProdutoDto } from './dto/update-fornecedor-produto.dto';

@Injectable()
export class FornecedorProdutoService {
  create(createFornecedorProdutoDto: CreateFornecedorProdutoDto) {
    return 'This action adds a new fornecedorProduto';
  }

  findAll() {
    return `This action returns all fornecedorProduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedorProduto`;
  }

  update(id: number, updateFornecedorProdutoDto: UpdateFornecedorProdutoDto) {
    return `This action updates a #${id} fornecedorProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedorProduto`;
  }
}
