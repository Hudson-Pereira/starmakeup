import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Produto } from "@prisma/client";
import { isRFC3339 } from "class-validator";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    data: Prisma.ProdutoUncheckedCreateInput
  ): Promise<Produto> {
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
      console.log(`Produto ${prod.nome}.`);

      const data = new Date();
      const ano = `${data.getFullYear()}`;
      const anoFormatado = parseInt(ano);

      const anoVal = prod.anoValidade;
      const mesVal = prod.mesValidade;
      const mesFormatado = `${data.getMonth() + 1}`;
      const mesNumber = parseInt(mesFormatado);

      if (anoVal >= anoFormatado && mesVal - mesNumber === 1) {
        console.log(
          `ATENÇÃO: Produto vencendo em ${prod.diaValidade}/${mesVal}.`
        );
      } else if (
        anoVal >= anoFormatado &&
        mesVal - mesNumber < 2 &&
        mesVal - mesNumber > 1
      ) {
        console.log(`Produto vencendo em ${prod.diaValidade}/${mesVal}.`);
      } else if (
        anoVal < anoFormatado ||
        (anoVal >= anoFormatado && mesVal - mesNumber < 1)
      ) {
        console.log(
          `PRODUTO VENCIDO EM ${prod.diaValidade}/${mesVal}/${anoVal}.`
        );
      } else {
        console.log(`Vencimento do produto em ${prod.diaValidade}/${mesVal}.`);
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
            nome: dados[2],
            descricao: dados[3],
            diaValidade: dados[4],
            mesValidade: dados[5],
            anoValidade: dados[6],
            quantidade: dados[7],
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
