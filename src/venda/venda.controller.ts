import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VendaService } from "./venda.service";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { ProdutoService } from "src/produto/produto.service";
import { Prisma } from "@prisma/client";
import { UpdateProdutoDto } from "src/produto/dto/update-produto.dto";

@Controller("venda")
export class VendaController {
  constructor(
    private readonly vendaService: VendaService,
    private readonly produtoService: ProdutoService
  ) {}

  @Post()
  create(@Body() createVendaDto: Prisma.VendaCreateInput) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  findAll() {
    return this.vendaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.vendaService.findOne(+id);
  }
}
