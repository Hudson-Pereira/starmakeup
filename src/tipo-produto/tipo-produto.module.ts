import { Module } from "@nestjs/common";
import { TipoProdutoService } from "./tipo-produto.service";
import { TipoProdutoController } from "./tipo-produto.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [TipoProdutoController],
  providers: [TipoProdutoService],
})
export class TipoProdutoModule {}
