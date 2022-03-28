import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Produto } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateProdutoDto } from "./dto/update-produto.dto";

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}
  async createPrisma(data: Prisma.ProdutoUncheckedCreateInput) {
    try {
      const prod = await this.prisma.produto.create({ data });

      return [prod, `Produto ${prod.nome} criado com sucesso.`];
    } catch (error) {
      console.error(error);
      throw new HttpException(
        "Erro de cadastro, favor tente novamente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAllPrisma() {
    try {
      const total = await this.prisma.produto.findMany();
      let tam = total.length;
      let disp = 0;

      if (!total) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      total.map(async (total) => {
        if (total.quantidade != 0) {
          disp = disp + 1;
        }
      });
      return [
        `Temos um total de ${tam} produtos cadastrados e ${disp} produtos disponíveis.`,
        total,
      ];
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async findOnePrisma(id: number) {
    try {
      const prod = await this.prisma.produto.findUnique({ where: { id } });
      const preco = await this.prisma.produtosPrecos.findUnique({
        where: { id },
      });
      const tipo = await this.prisma.tipoProduto.findUnique({ where: { id } });
      const fornecedor = await this.prisma.fornecedorProduto.findUnique({
        where: { id },
      });
      if (!prod || !preco || !tipo || !fornecedor) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }

      const data = new Date();
      const ano = `${data.getFullYear()}`;
      const anoFormatado = parseInt(ano);
      const mesFormatado = `${data.getMonth() + 1}`;
      const mesNumber = parseInt(mesFormatado);
      const diaFormatado = `${data.getDay()}`;
      const diaNumber = parseInt(diaFormatado);

      if (
        prod.anoValidade >= anoFormatado &&
        prod.mesValidade - mesNumber === 1
      ) {
        console.log(
          `ATENÇÃO: Produto vencendo em ${prod.diaValidade}/${prod.mesValidade}.`
        );
      } else if (
        prod.anoValidade >= anoFormatado &&
        prod.mesValidade - mesNumber < 2 &&
        prod.mesValidade - mesNumber > 1
      ) {
        console.log(
          `Produto vencendo em ${prod.diaValidade}/${prod.mesValidade}.`
        );
      } else if (
        prod.anoValidade < anoFormatado ||
        (prod.anoValidade >= anoFormatado &&
          prod.mesValidade - mesNumber < 1 &&
          prod.diaValidade - diaNumber < 1)
      ) {
        console.log(
          `PRODUTO VENCIDO EM ${prod.diaValidade}/${prod.mesValidade}/${prod.anoValidade}.`
        );
      } else {
        console.log(
          `Vencimento do produto em ${prod.diaValidade}/${prod.mesValidade}/${prod.anoValidade}.`
        );
      }

      if (prod.quantidade <= 0) {
        console.log("Produto sem estoque.");
      } else if (prod.quantidade < 10) {
        console.log("Produto com baixo estoque.");
      }

      const venda = `Valor total da venda: R$ ${
        prod.quantidade * preco.valorVenda
      }.`;
      const estoque = `Valor total do estoque: R$ ${
        prod.quantidade * preco.precoCusto
      }.`;
      return [prod, preco, tipo, fornecedor, estoque, venda];
    } catch (error) {
      console.error(error.message);
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
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
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return prod;
    } catch (error) {
      console.error(error);
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
  }

  async removePrisma(id: number) {
    try {
      const prod = await this.prisma.produto.delete({ where: { id } });
      if (!prod) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return prod;
    } catch (error) {
      console.error(error);
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
  }

  async uploadFilePrisma(dados: any) {
    if (!dados) {
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

  async uploadFile(dados: any) {
    if (!dados) {
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
    const dado = dados.shift();
    try {
      dados.map(async (dados) => {
        await this.prisma.produto.create({
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
        });
      });
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }
}
