-- CreateTable
CREATE TABLE "Venda" (
    "id" SERIAL NOT NULL,
    "produto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorFinal" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Venda_id_key" ON "Venda"("id");

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_produto_fkey" FOREIGN KEY ("produto") REFERENCES "Produto"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
