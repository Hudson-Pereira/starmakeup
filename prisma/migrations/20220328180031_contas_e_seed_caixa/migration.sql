/*
  Warnings:

  - You are about to drop the column `pagamento` on the `Venda` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[data]` on the table `Caixa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `caixa` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorCredito` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorDebito` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorDinheiro` to the `Venda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Caixa" ALTER COLUMN "vendasDinheiro" SET DEFAULT 0,
ALTER COLUMN "vendasDebito" SET DEFAULT 0,
ALTER COLUMN "vendasCredito" SET DEFAULT 0,
ALTER COLUMN "valorFinal" SET DEFAULT 0,
ALTER COLUMN "lucro" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Venda" DROP COLUMN "pagamento",
ADD COLUMN     "caixa" INTEGER NOT NULL,
ADD COLUMN     "valorCredito" INTEGER NOT NULL,
ADD COLUMN     "valorDebito" INTEGER NOT NULL,
ADD COLUMN     "valorDinheiro" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Contas" (
    "id" SERIAL NOT NULL,
    "pagamento" INTEGER NOT NULL,
    "compra" INTEGER NOT NULL,

    CONSTRAINT "Contas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contas_id_key" ON "Contas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Caixa_data_key" ON "Caixa"("data");

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_caixa_fkey" FOREIGN KEY ("caixa") REFERENCES "Caixa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
