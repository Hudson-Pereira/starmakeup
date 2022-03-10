import { Prisma, Tipo } from "@prisma/client";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTipoDto } from "./dto/create-tipo.dto";
import { UpdateTipoDto } from "./dto/update-tipo.dto";

@Injectable()
export class TipoService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.TipoCreateInput): Promise<Tipo> {
    try {
      const tipo = await this.prisma.tipo.create({ data });
      if (!tipo) {
        throw new HttpException(
          "Verifique os dados e tente novamente",
          HttpStatus.BAD_REQUEST
        );
      }
      return tipo;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        "Verifique os dados e tente novamente",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAll(): Promise<Tipo[]> {
    return await this.prisma.tipo.findMany();
  }

  async findOne(id: number): Promise<Tipo> {
    return await this.prisma.tipo.findUnique({ where: { id } });
  }
}
