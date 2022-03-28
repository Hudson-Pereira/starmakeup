import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Contas, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateContaDto } from "./dto/update-conta.dto";

@Injectable()
export class ContasService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ContasCreateInput) {
    try {
      const conta = await this.prisma.contas.create({ data });

      return conta;
    } catch (error) {
      console.error(error.message);
      return new BadRequestException("Erro");
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.contas.findMany();
      if (total.length === 0) {
        return new NotFoundException("Nada encontrado");
      }
      return total;
    } catch (error) {
      console.error(error.messagem);
      return new BadRequestException("Erro");
    }
  }

  async findOne(id: number) {
    try {
      const conta = await this.prisma.contas.findUnique({ where: { id } });
      if (!conta) {
        return new NotFoundException("Nada encontrado");
      }

      return [
        `Foram gastos R$${conta.pagamento} em pagamentos de contas e R$${conta.compra} em compras.`,
        conta,
      ];
    } catch (error) {
      console.error(error.message);
      return new BadRequestException("Erro");
    }
  }

  async update(id: number, data: UpdateContaDto) {
    try {
      const conta = await this.prisma.contas.update({
        data,
        where: { id },
      });
      if (!conta) {
        return new NotFoundException("Nada encontrado");
      }
      return conta;
    } catch (error) {
      console.error(error.message);
      return new BadRequestException("Erro");
    }
  }
}
