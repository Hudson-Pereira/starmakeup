import { fornecedorProduto, Prisma } from "@prisma/client";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFornecedorProdutoDto } from "./dto/create-fornecedor-produto.dto";
import { UpdateFornecedorProdutoDto } from "./dto/update-fornecedor-produto.dto";

@Injectable()
export class FornecedorProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.fornecedorProdutoUncheckedCreateInput
  ): Promise<fornecedorProduto> {
    try {
      const fornProd = await this.prisma.fornecedorProduto.create({ data });
      console.log(`Criado com sucesso.`);
      return fornProd;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<fornecedorProduto[]> {
    try {
      const total = await this.prisma.fornecedorProduto.findMany();
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

  async findOne(id: number): Promise<fornecedorProduto> {
    try {
      const fornProd = await this.prisma.fornecedorProduto.findUnique({
        where: { id },
      });
      if (!fornProd) {
        console.log("Nenhum item encontrado.");
        throw new HttpException(
          "Nenhum item encontrado.",
          HttpStatus.NOT_FOUND
        );
      }
      return fornProd;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: number,
    _updateFornecedorProdutoDto: UpdateFornecedorProdutoDto
  ): Promise<fornecedorProduto> {
    try {
      const fornProd = await this.prisma.fornecedorProduto.update({
        data: { ..._updateFornecedorProdutoDto },
        where: { id },
      });
      if (!fornProd) {
        console.log("Nenhum item encontrado.");
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return fornProd;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const fornProd = await this.prisma.fornecedorProduto.delete({
        where: { id },
      });
      if (!fornProd) {
        console.log("Nenhum item encontrado.");
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return fornProd;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }
}
