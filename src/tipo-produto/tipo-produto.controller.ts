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
import { TipoProdutoService } from "./tipo-produto.service";
import { CreateTipoProdutoDto } from "./dto/create-tipo-produto.dto";
import { UpdateTipoProdutoDto } from "./dto/update-tipo-produto.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("tipo-produto")
export class TipoProdutoController {
  constructor(private readonly tipoProdutoService: TipoProdutoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createTipoProdutoDto: CreateTipoProdutoDto) {
    return this.tipoProdutoService.create(createTipoProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.tipoProdutoService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.tipoProdutoService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id") id: string,
    @Body() updateTipoProdutoDto: UpdateTipoProdutoDto
  ) {
    return this.tipoProdutoService.update(+id, updateTipoProdutoDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.tipoProdutoService.remove(+id);
  }
}
