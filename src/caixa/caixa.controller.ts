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
import { AuthGuard } from "@nestjs/passport";
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
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.caixaService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.caixaService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateCaixaDto: UpdateCaixaDto) {
    return this.caixaService.updatePrisma(+id, updateCaixaDto);
  }
}
