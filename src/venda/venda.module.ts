import { Module } from "@nestjs/common";
import { VendaService } from "./venda.service";
import { VendaController } from "./venda.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProdutoService } from "src/produto/produto.service";

@Module({
  imports: [PrismaModule],
  controllers: [VendaController],
  providers: [ProdutoService, VendaService],
})
export class VendaModule {}
