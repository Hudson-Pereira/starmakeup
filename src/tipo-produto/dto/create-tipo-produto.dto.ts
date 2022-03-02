import { IsInt, IsNotEmpty } from "class-validator";
export class CreateTipoProdutoDto {
  @IsNotEmpty()
  @IsInt()
  produtoid: number;

  @IsNotEmpty()
  @IsInt()
  tipoid: number;
}
