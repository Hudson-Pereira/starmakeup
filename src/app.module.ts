import { PrismaModule } from "./prisma/prisma.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./usuario/usuario.module";
import { ProdutoModule } from "./produto/produto.module";
import { AuthModule } from "./auth/auth.module";
import { ProdutosprecosModule } from "./produtosprecos/produtosprecos.module";
import { RoleModule } from "./role/role.module";
import { LogModule } from "./log/log.module";
// import { LogsModule } from './logs/logs.module';
// import { CamposModule } from './campos/campos.module';
import { MessageModule } from "./message/message.module";
import { FornecedorModule } from "./fornecedor/fornecedor.module";
import { TipoModule } from "./tipo/tipo.module";
import { TipoProdutoModule } from "./tipo-produto/tipo-produto.module";
import { FornecedorProdutoModule } from "./fornecedor-produto/fornecedor-produto.module";
import { VendaModule } from "./venda/venda.module";
import { CaixaModule } from "./caixa/caixa.module";
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [
    UsuarioModule,
    PrismaModule,
    ProdutoModule,
    AuthModule,
    ProdutosprecosModule,
    RoleModule,
    LogModule,
    MessageModule,
    FornecedorModule,
    TipoModule,
    TipoProdutoModule,
    FornecedorProdutoModule,
    VendaModule,
    CaixaModule,
    ContasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
