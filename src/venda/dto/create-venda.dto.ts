import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVendaDto {
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsInt()
  @IsNotEmpty()
  quantidade: number;

  @IsInt()
  @IsNotEmpty()
  valorFinal: number;
}
