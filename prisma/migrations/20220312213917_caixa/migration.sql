-- CreateTable
CREATE TABLE "Caixa" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saldoInicial" INTEGER NOT NULL,
    "usuario" INTEGER NOT NULL,
    "vendasDinheiro" INTEGER NOT NULL,
    "vendasDebito" INTEGER NOT NULL,
    "vendasCredito" INTEGER NOT NULL,
    "valorFinal" INTEGER NOT NULL,
    "lucro" INTEGER NOT NULL,

    CONSTRAINT "Caixa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Caixa_id_key" ON "Caixa"("id");

-- AddForeignKey
ALTER TABLE "Caixa" ADD CONSTRAINT "Caixa_usuario_fkey" FOREIGN KEY ("usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
