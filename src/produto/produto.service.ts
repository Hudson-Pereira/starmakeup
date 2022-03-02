import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Produto } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(data: Prisma.ProdutoCreateInput): Promise<Produto> {
    try {
      const prod = await this.prisma.produto.create({ data });
      console.log(`Produto ${prod.nome} criado com sucesso.`);
      return prod;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        "Erro de cadastro, favor tente novamente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAllPrisma(): Promise<Produto[]> {
    try {
      const total = await this.prisma.produto.findMany();
      console.log(`Temos ${total.length} produtos.`);
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

  async findOnePrisma(id: number): Promise<Produto> {
    try {
      const prod = await this.prisma.produto.findUnique({ where: { id } });
      if (!prod) {
        console.log("Nenhum item encontrado.");
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return prod;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async updatePrisma(
    id: number,
    _updateProdutoDto: UpdateProdutoDto
  ): Promise<Produto> {
    try {
      const prod = await this.prisma.produto.update({
        data: { ..._updateProdutoDto },
        where: { id },
      });
      if (!prod) {
        console.log("Nenhum item encontrado.");
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return prod;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async removePrisma(id: number) {
    try {
      const prod = await this.prisma.produto.delete({ where: { id } });
      if (!prod) {
        console.log("Nenhum item encontrado.");
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return prod;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        "Erro ao excluir, tente novamente",
        HttpStatus.NOT_FOUND
      );
    }
  }

  async uploadFilePrisma(dados: any) {
    if (!dados) {
      console.log("Item vazio.");
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
    const dado = dados.shift();
    try {
      dados.map(async (dados) => {
        await this.prisma.produto.update({
          data: {
            codigo: dados[0],
            imagem: dados[1],
            nome: dados[3],
            descricao: dados[2],
            dataValidade: dados[3],
            quantidade: dados[4],
          },
          where: { codigo: dados[0] },
        });
      });
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }
}
