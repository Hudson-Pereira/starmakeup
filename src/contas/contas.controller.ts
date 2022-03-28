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
import { ContasService } from "./contas.service";
import { CreateContaDto } from "./dto/create-conta.dto";
import { UpdateContaDto } from "./dto/update-conta.dto";

@Controller("contas")
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createContaDto: CreateContaDto) {
    return this.contasService.create(createContaDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.contasService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.contasService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateContaDto: UpdateContaDto) {
    return this.contasService.update(+id, updateContaDto);
  }
}
