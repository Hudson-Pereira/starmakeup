import { Module } from "@nestjs/common";
import { ContasService } from "./contas.service";
import { ContasController } from "./contas.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
