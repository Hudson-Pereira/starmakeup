import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVendaDto {
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsInt()
  @IsNotEmpty()
  quantidade: number;

  valorExtra: number;

  desconto: number;

  @IsString()
  @IsNotEmpty()
  pagamento: string;

  @IsInt()
  @IsNotEmpty()
  valorFinal: number;
}
