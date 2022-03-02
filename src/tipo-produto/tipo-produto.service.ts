import { Injectable } from '@nestjs/common';
import { CreateTipoProdutoDto } from './dto/create-tipo-produto.dto';
import { UpdateTipoProdutoDto } from './dto/update-tipo-produto.dto';

@Injectable()
export class TipoProdutoService {
  create(createTipoProdutoDto: CreateTipoProdutoDto) {
    return 'This action adds a new tipoProduto';
  }

  findAll() {
    return `This action returns all tipoProduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoProduto`;
  }

  update(id: number, updateTipoProdutoDto: UpdateTipoProdutoDto) {
    return `This action updates a #${id} tipoProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoProduto`;
  }
}
