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
import { TipoService } from "./tipo.service";
import { CreateTipoDto } from "./dto/create-tipo.dto";
import { UpdateTipoDto } from "./dto/update-tipo.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("tipo")
export class TipoController {
  constructor(private readonly tipoService: TipoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createTipoDto: CreateTipoDto) {
    return this.tipoService.create(createTipoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.tipoService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.tipoService.findOne(+id);
  }
}
