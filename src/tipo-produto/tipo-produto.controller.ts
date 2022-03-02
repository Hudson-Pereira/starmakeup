import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoProdutoService } from './tipo-produto.service';
import { CreateTipoProdutoDto } from './dto/create-tipo-produto.dto';
import { UpdateTipoProdutoDto } from './dto/update-tipo-produto.dto';

@Controller('tipo-produto')
export class TipoProdutoController {
  constructor(private readonly tipoProdutoService: TipoProdutoService) {}

  @Post()
  create(@Body() createTipoProdutoDto: CreateTipoProdutoDto) {
    return this.tipoProdutoService.create(createTipoProdutoDto);
  }

  @Get()
  findAll() {
    return this.tipoProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoProdutoDto: UpdateTipoProdutoDto) {
    return this.tipoProdutoService.update(+id, updateTipoProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoProdutoService.remove(+id);
  }
}
