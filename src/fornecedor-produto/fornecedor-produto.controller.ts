import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FornecedorProdutoService } from './fornecedor-produto.service';
import { CreateFornecedorProdutoDto } from './dto/create-fornecedor-produto.dto';
import { UpdateFornecedorProdutoDto } from './dto/update-fornecedor-produto.dto';

@Controller('fornecedor-produto')
export class FornecedorProdutoController {
  constructor(private readonly fornecedorProdutoService: FornecedorProdutoService) {}

  @Post()
  create(@Body() createFornecedorProdutoDto: CreateFornecedorProdutoDto) {
    return this.fornecedorProdutoService.create(createFornecedorProdutoDto);
  }

  @Get()
  findAll() {
    return this.fornecedorProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fornecedorProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFornecedorProdutoDto: UpdateFornecedorProdutoDto) {
    return this.fornecedorProdutoService.update(+id, updateFornecedorProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fornecedorProdutoService.remove(+id);
  }
}
