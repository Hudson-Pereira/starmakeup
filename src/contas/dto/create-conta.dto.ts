import { IsInt, IsNotEmpty } from "class-validator";

export class CreateContaDto {
  @IsNotEmpty()
  @IsInt()
  pagamento: number;

  @IsNotEmpty()
  @IsInt()
  compra: number;
}
