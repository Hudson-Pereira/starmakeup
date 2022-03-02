import { Module } from "@nestjs/common";
import { FornecedorProdutoService } from "./fornecedor-produto.service";
import { FornecedorProdutoController } from "./fornecedor-produto.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [FornecedorProdutoController],
  providers: [FornecedorProdutoService],
})
export class FornecedorProdutoModule {}
