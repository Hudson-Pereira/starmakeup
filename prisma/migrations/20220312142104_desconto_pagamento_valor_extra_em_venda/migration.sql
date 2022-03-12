/*
  Warnings:

  - Added the required column `desconto` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagamento` to the `Venda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorExtra` to the `Venda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venda" ADD COLUMN     "desconto" INTEGER NOT NULL,
ADD COLUMN     "pagamento" TEXT NOT NULL,
ADD COLUMN     "valorExtra" INTEGER NOT NULL;
