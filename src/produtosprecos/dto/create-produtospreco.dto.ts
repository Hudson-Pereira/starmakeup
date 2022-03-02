import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsDecimal,
  IsBoolean,
} from "class-validator";

export class CreateProdutosPrecosDto {
  @IsString()
  @IsNotEmpty()
  codigoid: string;

  @IsNotEmpty()
  precoCusto: number;

  @IsNotEmpty()
  @IsInt()
  porcentagemLucro: number;

  @IsNotEmpty()
  @IsInt()
  promocaodesconto: number;

  @IsNotEmpty()
  valorVenda: number;

  @IsNotEmpty()
  valorAtacado: number;
}
