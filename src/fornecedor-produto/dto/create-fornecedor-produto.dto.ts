import { IsNotEmpty, IsString } from "class-validator";

export class CreateFornecedorProdutoDto {
  @IsNotEmpty()
  @IsString()
  produtoid: string;

  @IsNotEmpty()
  @IsString()
  fornecedorid: string;
}
