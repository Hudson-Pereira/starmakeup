import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Venda } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VendaCreateInput) {
    //TODO colocar mais de um produto para venda
    try {
      const venda = await this.prisma.venda.create({ data });
      if (!venda) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }

      try {
        const produ = await this.prisma.produto.findUnique({
          where: { codigo: venda.produto },
        });
        if (!produ) {
          throw new HttpException(
            "Nenhum item encontrado",
            HttpStatus.NOT_FOUND
          );
        }
        const qtdVenda = produ.quantidade - venda.quantidade;
        const prod = await this.prisma.produto.update({
          data: { quantidade: qtdVenda },
          where: { codigo: venda.produto },
        });
        if (!prod) {
          throw new HttpException(
            "Nenhum item encontrado",
            HttpStatus.NOT_FOUND
          );
        }
      } catch (error) {
        console.error(error);
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return [venda, `Venda realizada com sucesso.`];
    } catch (error) {
      console.error(error);
      throw new HttpException("Venda não realizada.", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.venda.findMany();
      if (total.length === 0) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return [total, `${total.length} vendas realizadas.`];
    } catch (error) {
      console.error(error);
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      const venda = await this.prisma.venda.findUnique({ where: { id } });
      if (!venda) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return venda;
    } catch (error) {
      console.error(error);
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
  }
}
