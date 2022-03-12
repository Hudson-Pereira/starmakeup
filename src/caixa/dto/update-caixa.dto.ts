import { PartialType } from '@nestjs/swagger';
import { CreateCaixaDto } from './create-caixa.dto';

export class UpdateCaixaDto extends PartialType(CreateCaixaDto) {}
