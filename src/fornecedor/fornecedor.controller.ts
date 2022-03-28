import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { FornecedorService } from "./fornecedor.service";
import { CreateFornecedorDto } from "./dto/create-fornecedor.dto";
import { UpdateFornecedorDto } from "./dto/update-fornecedor.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("fornecedor")
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createFornecedorDto: CreateFornecedorDto) {
    return this.fornecedorService.create(createFornecedorDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.fornecedorService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.fornecedorService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id") id: string,
    @Body() updateFornecedorDto: UpdateFornecedorDto
  ) {
    return this.fornecedorService.update(+id, updateFornecedorDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.fornecedorService.remove(+id);
  }
}
