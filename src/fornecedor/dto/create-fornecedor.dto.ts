import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFornecedorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  cnpj: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsInt()
  contato: number;
}
