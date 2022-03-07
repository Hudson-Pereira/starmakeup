import { Prisma, tipoProduto } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTipoProdutoDto } from "./dto/create-tipo-produto.dto";
import { UpdateTipoProdutoDto } from "./dto/update-tipo-produto.dto";

@Injectable()
export class TipoProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.tipoProdutoUncheckedCreateInput
  ): Promise<tipoProduto> {
    return await this.prisma.tipoProduto.create({ data });
  }

  async findAll(): Promise<tipoProduto[]> {
    return await this.prisma.tipoProduto.findMany();
  }

  async findOne(id: number): Promise<tipoProduto> {
    return await this.prisma.tipoProduto.findUnique({ where: { id } });
  }

  async update(id: number, _updateTipoProdutoDto: UpdateTipoProdutoDto) {
    return await this.prisma.tipoProduto.update({
      data: { ..._updateTipoProdutoDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.tipoProduto.delete({ where: { id } });
  }
}
