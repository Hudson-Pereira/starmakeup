import { Module } from "@nestjs/common";
import { TipoService } from "./tipo.service";
import { TipoController } from "./tipo.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [TipoController],
  providers: [TipoService],
})
export class TipoModule {}
