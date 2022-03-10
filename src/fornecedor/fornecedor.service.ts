import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Fornecedor, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFornecedorDto } from "./dto/create-fornecedor.dto";
import { UpdateFornecedorDto } from "./dto/update-fornecedor.dto";

@Injectable()
export class FornecedorService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FornecedorCreateInput) {
    try {
      const fornecedor = await this.prisma.fornecedor.create({ data });

      return [fornecedor, `Fornecedor ${fornecedor.nome} criado com sucesso.`];
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.fornecedor.findMany();

      if (!total) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return [total, `Temos ${total.length} fornecedores.`];
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Fornecedor> {
    try {
      const fornecedor = await this.prisma.fornecedor.findUnique({
        where: { id },
      });
      if (!fornecedor) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return fornecedor;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: number,
    _updateFornecedorDto: UpdateFornecedorDto
  ): Promise<Fornecedor> {
    try {
      const fornecedor = await this.prisma.fornecedor.update({
        data: { ..._updateFornecedorDto },
        where: { id },
      });
      if (!fornecedor) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return fornecedor;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const fornecedor = await this.prisma.fornecedor.delete({ where: { id } });
      if (!fornecedor) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return fornecedor;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        "Erro ao excluir, tente novamente",
        HttpStatus.NOT_FOUND
      );
    }
  }
}
