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
import { VendaService } from "./venda.service";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { ProdutoService } from "src/produto/produto.service";
import { Prisma } from "@prisma/client";
import { UpdateProdutoDto } from "src/produto/dto/update-produto.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("venda")
export class VendaController {
  constructor(
    private readonly vendaService: VendaService,
    private readonly produtoService: ProdutoService
  ) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createVendaDto: Prisma.VendaCreateInput) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.vendaService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.vendaService.findOne(+id);
  }
}
