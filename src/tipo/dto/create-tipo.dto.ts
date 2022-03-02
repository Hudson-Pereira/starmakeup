import { IsNotEmpty, IsString } from "class-validator";
export class CreateTipoDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;
}
