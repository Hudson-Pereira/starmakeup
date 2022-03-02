import { PartialType } from '@nestjs/swagger';
import { CreateTipoDto } from './create-tipo.dto';

export class UpdateTipoDto extends PartialType(CreateTipoDto) {}
