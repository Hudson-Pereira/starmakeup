import { PartialType } from '@nestjs/swagger';
import { CreateFornecedorProdutoDto } from './create-fornecedor-produto.dto';

export class UpdateFornecedorProdutoDto extends PartialType(CreateFornecedorProdutoDto) {}
