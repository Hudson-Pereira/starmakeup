import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFornecedorProdutoDto {
  @IsNotEmpty()
  @IsString()
  produtoid: string;

  @IsNotEmpty()
  @IsInt()
  fornecedorid: number;
}
