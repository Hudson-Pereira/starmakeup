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
        console.log("Verifique os dados e tente novamente");
        throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
      }
      return tipo;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return `This action returns all tipo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipo`;
  }

  update(id: number, updateTipoDto: UpdateTipoDto) {
    return `This action updates a #${id} tipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipo`;
  }
}
