import {
  ConsoleLogger,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { Prisma, Mensagem } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MensagemCreateInput): Promise<Mensagem> {
    try {
      const tam = await this.prisma.mensagem.findMany();
      if (tam.length === 0) {
        const msg = await this.prisma.mensagem.create({ data });
        console.log("Mensagem criada com sucesso.");

        return msg;
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
      console.log(`Temos ${total.length} mensagens.`);
      return total;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, data: UpdateMessageDto): Promise<Mensagem> {
    try {
      const msg = await this.prisma.mensagem.update({ data, where: { id } });
      console.log("Mensagem alterada com sucesso.");
      return msg;
    } catch (error) {
      console.error(error);
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }
}
