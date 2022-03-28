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
import { FornecedorProdutoService } from "./fornecedor-produto.service";
import { CreateFornecedorProdutoDto } from "./dto/create-fornecedor-produto.dto";
import { UpdateFornecedorProdutoDto } from "./dto/update-fornecedor-produto.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("fornecedor-produto")
export class FornecedorProdutoController {
  constructor(
    private readonly fornecedorProdutoService: FornecedorProdutoService
  ) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createFornecedorProdutoDto: CreateFornecedorProdutoDto) {
    return this.fornecedorProdutoService.create(createFornecedorProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.fornecedorProdutoService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.fornecedorProdutoService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id") id: string,
    @Body() updateFornecedorProdutoDto: UpdateFornecedorProdutoDto
  ) {
    return this.fornecedorProdutoService.update(
      +id,
      updateFornecedorProdutoDto
    );
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.fornecedorProdutoService.remove(+id);
  }
}
