import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVendaDto {
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsInt()
  @IsNotEmpty()
  quantidade: number;

  @IsInt()
  valorExtra: number;

  @IsInt()
  desconto: number;

  @IsInt()
  @IsNotEmpty()
  valorDebito: number;

  @IsInt()
  @IsNotEmpty()
  valorCredito: number;

  @IsInt()
  @IsNotEmpty()
  valorDinheiro: number;

  @IsInt()
  @IsNotEmpty()
  valorFinal: number;

  @IsInt()
  @IsNotEmpty()
  caixa: number;
}
