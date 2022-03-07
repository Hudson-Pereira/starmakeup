-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "diaValidade" INTEGER NOT NULL,
    "mesValidade" INTEGER NOT NULL,
    "anoValidade" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoProduto" (
    "id" SERIAL NOT NULL,
    "produtoid" TEXT NOT NULL,
    "tipoid" INTEGER NOT NULL,

    CONSTRAINT "tipoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedorProduto" (
    "id" SERIAL NOT NULL,
    "produtoid" TEXT NOT NULL,
    "fornecedorid" INTEGER NOT NULL,

    CONSTRAINT "fornecedorProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "contato" INTEGER NOT NULL,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdutosPrecos" (
    "id" SERIAL NOT NULL,
    "codigoid" TEXT NOT NULL,
    "precoCusto" DOUBLE PRECISION NOT NULL,
    "porcentagemLucro" INTEGER NOT NULL,
    "promocaodesconto" INTEGER NOT NULL,
    "valorVenda" DOUBLE PRECISION NOT NULL,
    "valorAtacado" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProdutosPrecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "role" BOOLEAN NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "isAdmin" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "idUser" TEXT NOT NULL,
    "idProduto" TEXT NOT NULL,
    "campoAlterado" TEXT NOT NULL,
    "valorOriginal" TEXT NOT NULL,
    "valorAlterado" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" SERIAL NOT NULL,
    "mensagem" TEXT NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_codigo_key" ON "Produto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "tipoProduto_id_key" ON "tipoProduto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_id_key" ON "Tipo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "fornecedorProduto_id_key" ON "fornecedorProduto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_id_key" ON "Fornecedor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_cnpj_key" ON "Fornecedor"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "ProdutosPrecos_id_key" ON "ProdutosPrecos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProdutosPrecos_codigoid_key" ON "ProdutosPrecos"("codigoid");

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_key" ON "Usuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Log_id_key" ON "Log"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Mensagem_id_key" ON "Mensagem"("id");

-- AddForeignKey
ALTER TABLE "tipoProduto" ADD CONSTRAINT "tipoProduto_produtoid_fkey" FOREIGN KEY ("produtoid") REFERENCES "Produto"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipoProduto" ADD CONSTRAINT "tipoProduto_tipoid_fkey" FOREIGN KEY ("tipoid") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fornecedorProduto" ADD CONSTRAINT "fornecedorProduto_produtoid_fkey" FOREIGN KEY ("produtoid") REFERENCES "Produto"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fornecedorProduto" ADD CONSTRAINT "fornecedorProduto_fornecedorid_fkey" FOREIGN KEY ("fornecedorid") REFERENCES "Fornecedor"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosPrecos" ADD CONSTRAINT "ProdutosPrecos_codigoid_fkey" FOREIGN KEY ("codigoid") REFERENCES "Produto"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_isAdmin_fkey" FOREIGN KEY ("isAdmin") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
