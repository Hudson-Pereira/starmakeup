import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma, Caixa } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCaixaDto } from "./dto/update-caixa.dto";
//TODO mudar todos httpException para exceptions prontas.
@Injectable()
export class CaixaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CaixaUncheckedCreateInput) {
    try {
      const caixa = await this.prisma.caixa.create({ data });
      if (!caixa) {
        throw new HttpException("Nada encontrado", HttpStatus.NOT_FOUND);
      }
      return caixa;
    } catch (error) {
      console.error(error.message);
      throw new HttpException("Erro", HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.caixa.findMany();
      if (total.length === 0) {
        // return "Nenhum item encontrado";

        return new NotFoundException("Nada encontrado");
      }
      return total;
    } catch (error) {
      console.error(error.message);
      throw new HttpException("Erro, tente novamente.", HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      const caixa = await this.prisma.caixa.findUnique({ where: { id } });

      if (!caixa) {
        throw new HttpException(
          "Nenhum item encontrado.",
          HttpStatus.NOT_FOUND
        );
      }
      const vendas = await this.prisma.venda.findMany({
        where: { caixa: id },
      });

      return [`Foram feitas ${vendas.length} vendas nesse dia.`, caixa, vendas];
    } catch (error) {
      console.error(error);
      throw new HttpException("Erro", HttpStatus.BAD_REQUEST);
    }
  }

  async updatePrisma(
    //TODO puxar as informações financeiras automáticamente - falta subtrair porcentagem
    id: number,
    _updateCaixaDto: UpdateCaixaDto
  ) {
    try {
      let caixa = await this.prisma.caixa.findUnique({ where: { id } });
      if (!caixa) {
        return new NotFoundException("Nada encontrado.");
      }
      const vendas = await this.prisma.venda.findMany({
        where: { caixa: id },
      });

      let totDin = 0;
      for (let i = 0; i < vendas.length; i++) {
        totDin = totDin + vendas[i].valorDinheiro;
      }
      let totDeb = 0;
      for (let i = 0; i < vendas.length; i++) {
        totDeb = totDeb + vendas[i].valorDebito;
      }
      let totCred = 0;
      for (let i = 0; i < vendas.length; i++) {
        totCred = totCred + vendas[i].valorCredito;
      }
      let totExt = 0;
      for (let i = 0; i < vendas.length; i++) {
        totExt = totExt + vendas[i].valorExtra;
      }

      const final = totDin + totDeb + totCred + totExt;
      const lucro = final - caixa.saldoInicial;

      caixa = await this.prisma.caixa.update({
        where: { id },
        data: {
          vendasDinheiro: totDin,
          vendasDebito: totDeb,
          vendasCredito: totCred,
          valorFinal: final,
          lucro: lucro,
        },
      });

      return caixa;
    } catch (error) {
      console.error(error.message);
      return new BadRequestException("Tente novamente.");
    }
    // try {
    //   const caixa = await this.prisma.caixa.update({
    //     data: { ..._updateCaixaDto },
    //     where: { id },
    //   });
    //   return caixa;
    // } catch (error) {
    //   throw new HttpException("Erro", HttpStatus.BAD_REQUEST);
    // }
  }
}
