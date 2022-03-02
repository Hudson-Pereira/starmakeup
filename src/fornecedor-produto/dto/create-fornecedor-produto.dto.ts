import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFornecedorProdutoDto {
  @IsNotEmpty()
  @IsInt()
  produtoid: number;

  @IsNotEmpty()
  @IsInt()
  fornecedorid: number;
}
