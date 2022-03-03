import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Fornecedor, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFornecedorDto } from "./dto/create-fornecedor.dto";
import { UpdateFornecedorDto } from "./dto/update-fornecedor.dto";

@Injectable()
export class FornecedorService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FornecedorCreateInput): Promise<Fornecedor> {
    try {
      const fornecedor = await this.prisma.fornecedor.create({ data });

      console.log(`Produto ${fornecedor.nome} criado com sucesso.`);
      return fornecedor;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Fornecedor[]> {
    try {
      const total = await this.prisma.fornecedor.findMany();
      console.log(`Temos ${total.length} fornecedores.`);
      if (!total) {
        console.log("Nenhum item encontrado.");
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return total;
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
        console.log("Nenhum item encontrado.");
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
        console.log("Nenhum item encontrado.");
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
        console.log("Nenhum item encontrado.");
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
