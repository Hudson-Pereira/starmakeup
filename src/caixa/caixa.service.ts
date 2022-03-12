import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Caixa } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCaixaDto } from "./dto/create-caixa.dto";
import { UpdateCaixaDto } from "./dto/update-caixa.dto";

@Injectable()
export class CaixaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CaixaCreateInput) {
    try {
      const caixa = await this.prisma.caixa.create({ data });
      if (!caixa) {
        throw new HttpException("Erro vazio", HttpStatus.BAD_REQUEST);
      }
      return caixa;
    } catch (error) {
      console.error(error);
      throw new HttpException("Erro", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Caixa[]> {
    return await this.prisma.caixa.findMany();
  }

  async findOne(id: number): Promise<Caixa> {
    return this.prisma.caixa.findUnique({ where: { id } });
  }
}
