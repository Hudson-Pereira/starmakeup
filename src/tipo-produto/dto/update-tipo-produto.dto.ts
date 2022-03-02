import { PartialType } from '@nestjs/swagger';
import { CreateTipoProdutoDto } from './create-tipo-produto.dto';

export class UpdateTipoProdutoDto extends PartialType(CreateTipoProdutoDto) {}
