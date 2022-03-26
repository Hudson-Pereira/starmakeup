import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CaixaService } from "./caixa.service";
import { CreateCaixaDto } from "./dto/create-caixa.dto";
import { UpdateCaixaDto } from "./dto/update-caixa.dto";

@Controller("caixa")
export class CaixaController {
  constructor(private readonly caixaService: CaixaService) {}

  @Post()
  create(@Body() createCaixaDto: CreateCaixaDto) {
    return this.caixaService.create(createCaixaDto);
  }

  @Get()
  findAll() {
    return this.caixaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.caixaService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCaixaDto: UpdateCaixaDto) {
    return this.caixaService.updatePrisma(+id, updateCaixaDto);
  }
}
