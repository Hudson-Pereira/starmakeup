import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateTipoProdutoDto {
  @IsNotEmpty()
  @IsString()
  produtoid: string;

  @IsNotEmpty()
  @IsInt()
  tipoid: number;
}
