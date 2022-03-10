import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Mensagem } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateMessageDto } from "./dto/update-message.dto";

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MensagemCreateInput) {
    try {
      const tam = await this.prisma.mensagem.findMany();
      if (tam.length === 0) {
        const msg = await this.prisma.mensagem.create({ data });
        return [msg, `Mensagem criada com sucesso.`];
      }
      throw new HttpException(
        "Já existe mensagem cadastrada, por favor, utilize a opção 'Alterar mensagem'.",
        HttpStatus.BAD_REQUEST
      );
    } catch (error) {
      console.error(error);
      throw new HttpException(
        "Já existe mensagem cadastrada, por favor, utilize a opção 'Alterar mensagem'.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAll(): Promise<Mensagem[]> {
    try {
      const total = await this.prisma.mensagem.findMany();
      if (total.length === 0) {
        throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
      return total;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, data: UpdateMessageDto) {
    try {
      const msg = await this.prisma.mensagem.update({ data, where: { id } });

      return [msg, "Mensagem alterada com sucesso."];
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }
}
