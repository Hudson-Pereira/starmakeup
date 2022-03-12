import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCaixaDto {
  @IsNotEmpty()
  @IsInt()
  saldoInicial: number;

  @IsNotEmpty()
  @IsInt()
  usuario: number;

  @IsNotEmpty()
  @IsInt()
  vendasDinheiro: number;

  @IsNotEmpty()
  @IsInt()
  vendasDebito: number;

  @IsNotEmpty()
  @IsInt()
  vendasCredito: number;

  @IsNotEmpty()
  @IsInt()
  valorFinal: number;

  @IsNotEmpty()
  @IsInt()
  lucro: number;
}
