-- DropForeignKey
ALTER TABLE "fornecedorProduto" DROP CONSTRAINT "fornecedorProduto_fornecedorid_fkey";

-- AlterTable
ALTER TABLE "Fornecedor" ALTER COLUMN "cnpj" SET DATA TYPE TEXT,
ALTER COLUMN "contato" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "fornecedorProduto" ALTER COLUMN "fornecedorid" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "fornecedorProduto" ADD CONSTRAINT "fornecedorProduto_fornecedorid_fkey" FOREIGN KEY ("fornecedorid") REFERENCES "Fornecedor"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
