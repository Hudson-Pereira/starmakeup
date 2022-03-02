import { Module } from "@nestjs/common";
import { FornecedorService } from "./fornecedor.service";
import { FornecedorController } from "./fornecedor.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [FornecedorController],
  providers: [FornecedorService],
})
export class FornecedorModule {}
