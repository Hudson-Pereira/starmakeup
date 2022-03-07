import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsInt, IsString, IsDate } from "class-validator";

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "123456",
    description: `O campo produto será utilizado para cadastrar um dado único para o produto`,
  })
  codigo: string;

  @IsString()
  @ApiProperty({
    example: "http://www.imagemqualquer.com.br/çlkmasndlasnlfnafkjdaf",
    description: `Campo utilizado para inserir url da imagem do produto.`,
  })
  imagem: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "calça",
    description: `O campo nome será utilizado para cadastrar um dado para o produto`,
  })
  nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "calça preta, tamanho M....",
    description: `O campo descricao será utilizado para cadastrar informações sobre o produto`,
  })
  descricao: string;

  @IsNotEmpty()
  @IsInt()
  diaValidade: number;
  mesValidade: number;
  anoValidade: number;

  @IsNotEmpty()
  @IsInt()
  quantidade: number;
}
