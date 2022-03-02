import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoService } from './tipo.service';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';

@Controller('tipo')
export class TipoController {
  constructor(private readonly tipoService: TipoService) {}

  @Post()
  create(@Body() createTipoDto: CreateTipoDto) {
    return this.tipoService.create(createTipoDto);
  }

  @Get()
  findAll() {
    return this.tipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDto: UpdateTipoDto) {
    return this.tipoService.update(+id, updateTipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoService.remove(+id);
  }
}
