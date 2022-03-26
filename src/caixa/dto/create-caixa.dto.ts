import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCaixaDto {
  @IsNotEmpty()
  @IsInt()
  saldoInicial: number;

  @IsNotEmpty()
  @IsInt()
  usuario: number;

  vendasDinheiro: number;

  vendasDebito: number;

  vendasCredito: number;

  valorFinal: number;

  lucro: number;
}
