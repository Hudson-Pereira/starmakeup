import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCaixaDto {
  @IsInt()
  saldoInicial: number;

  @IsInt()
  usuario: number;

  vendasDinheiro: number;

  vendasDebito: number;

  vendasCredito: number;

  valorFinal: number;

  lucro: number;
}
