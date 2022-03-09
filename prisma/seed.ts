import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const roleUserSeed = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      role: false,
    },
  });

  const roleAdminSeed = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      role: true,
    },
  });

  const adminSeed = await prisma.usuario.upsert({
    where: { email: "admin@seed.com" },
    update: {},
    create: {
      email: "admin@seed.com",
      nome: "AdminSeed",
      senha: "$2b$10$3TfMrWr6KdjDju0mk1bDpOaz3wd/EVt0.RnvavFqSfYA9.K9Xg29a",
      //senha: "admin"
      isAdmin: 2,
    },
  });

  const userSeed = await prisma.usuario.upsert({
    where: { email: "user@seed.com" },
    update: {},
    create: {
      email: "user@seed.com",
      nome: "UserSeed",
      senha: "$2b$10$mSs7Yq/oaXzRnXd5PCvtS.FH2LSIjajRSHHfqN4h8uoFHcrrThVxC",
      //senha: "user"
      isAdmin: 1,
    },
  });

  const tipoUnidade = await prisma.tipo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      tipo: "unidade",
    },
  });

  const tipoPacote = await prisma.tipo.upsert({
    where: { id: 2 },
    update: {},
    create: {
      tipo: "pacote",
    },
  });

  const tipoCaixa = await prisma.tipo.upsert({
    where: { id: 3 },
    update: {},
    create: {
      tipo: "caixa",
    },
  });

  const fornecedor1 = await prisma.fornecedor.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: "fornecedor 1 seed",
      cnpj: "15484115000145",
      email: "fornecedor1@seed.com",
      contato: "38984113383",
    },
  });

  const fornecedor2 = await prisma.fornecedor.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nome: "fornecedor 2 seed",
      cnpj: "15484115000146",
      email: "fornecedor2@seed.com",
      contato: "38984288917",
    },
  });

  const produto1Seed = await prisma.produto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      codigo: "29.14.1159",
      imagem: "http://teste.com.br",
      nome: "produto 1",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto2Seed = await prisma.produto.upsert({
    where: { id: 2 },
    update: {},
    create: {
      codigo: "29.14.1160",
      imagem: "http://teste.com.br",
      nome: "produto 2",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto3Seed = await prisma.produto.upsert({
    where: { id: 3 },
    update: {},
    create: {
      codigo: "29.14.1161",
      imagem: "http://teste.com.br",
      nome: "produto 3",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto4Seed = await prisma.produto.upsert({
    where: { id: 4 },
    update: {},
    create: {
      codigo: "29.14.1162",
      imagem: "http://teste.com.br",
      nome: "produto 4",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto5Seed = await prisma.produto.upsert({
    where: { id: 5 },
    update: {},
    create: {
      codigo: "29.14.1163",
      imagem: "http://teste.com.br",
      nome: "produto 5",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto6Seed = await prisma.produto.upsert({
    where: { id: 6 },
    update: {},
    create: {
      codigo: "29.14.1164",
      imagem: "http://teste.com.br",
      nome: "produto 6",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto7Seed = await prisma.produto.upsert({
    where: { id: 7 },
    update: {},
    create: {
      codigo: "29.14.1165",
      imagem: "http://teste.com.br",
      nome: "produto 7",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto8Seed = await prisma.produto.upsert({
    where: { id: 8 },
    update: {},
    create: {
      codigo: "29.14.1166",
      imagem: "http://teste.com.br",
      nome: "produto 8",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto9Seed = await prisma.produto.upsert({
    where: { id: 9 },
    update: {},
    create: {
      codigo: "29.14.1167",
      imagem: "http://teste.com.br",
      nome: "produto 9",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto10Seed = await prisma.produto.upsert({
    where: { id: 10 },
    update: {},
    create: {
      codigo: "29.14.1168",
      imagem: "http://teste.com.br",
      nome: "produto 10",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const produto11Seed = await prisma.produto.upsert({
    where: { id: 11 },
    update: {},
    create: {
      codigo: "29.14.1169",
      imagem: "http://teste.com.br",
      nome: "produto 11",
      descricao: "branca, regata, com desenho.",
      diaValidade: 25,
      mesValidade: 10,
      anoValidade: 2025,
      quantidade: 10,
    },
  });

  const tipoProduto1 = await prisma.tipoProduto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      produtoid: "29.14.1159",
      tipoid: 1,
    },
  });

  const tipoProduto2 = await prisma.tipoProduto.upsert({
    where: { id: 2 },
    update: {},
    create: {
      produtoid: "29.14.1160",
      tipoid: 1,
    },
  });

  const tipoProduto3 = await prisma.tipoProduto.upsert({
    where: { id: 3 },
    update: {},
    create: {
      produtoid: "29.14.1161",
      tipoid: 2,
    },
  });

  const tipoProduto4 = await prisma.tipoProduto.upsert({
    where: { id: 4 },
    update: {},
    create: {
      produtoid: "29.14.1162",
      tipoid: 1,
    },
  });

  const tipoProduto5 = await prisma.tipoProduto.upsert({
    where: { id: 5 },
    update: {},
    create: {
      produtoid: "29.14.1163",
      tipoid: 2,
    },
  });

  const tipoProduto6 = await prisma.tipoProduto.upsert({
    where: { id: 6 },
    update: {},
    create: {
      produtoid: "29.14.1164",
      tipoid: 3,
    },
  });

  const tipoProduto7 = await prisma.tipoProduto.upsert({
    where: { id: 7 },
    update: {},
    create: {
      produtoid: "29.14.1165",
      tipoid: 1,
    },
  });

  const tipoProduto8 = await prisma.tipoProduto.upsert({
    where: { id: 8 },
    update: {},
    create: {
      produtoid: "29.14.1166",
      tipoid: 2,
    },
  });

  const tipoProduto9 = await prisma.tipoProduto.upsert({
    where: { id: 9 },
    update: {},
    create: {
      produtoid: "29.14.1167",
      tipoid: 3,
    },
  });

  const tipoProduto10 = await prisma.tipoProduto.upsert({
    where: { id: 10 },
    update: {},
    create: {
      produtoid: "29.14.1168",
      tipoid: 1,
    },
  });

  const tipoProduto11 = await prisma.tipoProduto.upsert({
    where: { id: 11 },
    update: {},
    create: {
      produtoid: "29.14.1169",
      tipoid: 2,
    },
  });

  const fornecedorProduto1 = await prisma.fornecedorProduto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      produtoid: "29.14.1159",
      fornecedorid: "15484115000145",
    },
  });

  const fornecedorProduto2 = await prisma.fornecedorProduto.upsert({
    where: { id: 2 },
    update: {},
    create: {
      produtoid: "29.14.1160",
      fornecedorid: "15484115000146",
    },
  });

  const fornecedorProduto3 = await prisma.fornecedorProduto.upsert({
    where: { id: 3 },
    update: {},
    create: {
      produtoid: "29.14.1161",
      fornecedorid: "15484115000145",
    },
  });

  const fornecedorProduto4 = await prisma.fornecedorProduto.upsert({
    where: { id: 4 },
    update: {},
    create: {
      produtoid: "29.14.1162",
      fornecedorid: "15484115000146",
    },
  });

  const fornecedorProduto5 = await prisma.fornecedorProduto.upsert({
    where: { id: 5 },
    update: {},
    create: {
      produtoid: "29.14.1163",
      fornecedorid: "15484115000145",
    },
  });

  const fornecedorProduto6 = await prisma.fornecedorProduto.upsert({
    where: { id: 6 },
    update: {},
    create: {
      produtoid: "29.14.1164",
      fornecedorid: "15484115000146",
    },
  });

  const fornecedorProduto7 = await prisma.fornecedorProduto.upsert({
    where: { id: 7 },
    update: {},
    create: {
      produtoid: "29.14.1165",
      fornecedorid: "15484115000145",
    },
  });

  const fornecedorProduto8 = await prisma.fornecedorProduto.upsert({
    where: { id: 8 },
    update: {},
    create: {
      produtoid: "29.14.1166",
      fornecedorid: "15484115000146",
    },
  });

  const fornecedorProduto9 = await prisma.fornecedorProduto.upsert({
    where: { id: 9 },
    update: {},
    create: {
      produtoid: "29.14.1167",
      fornecedorid: "15484115000145",
    },
  });

  const fornecedorProduto10 = await prisma.fornecedorProduto.upsert({
    where: { id: 10 },
    update: {},
    create: {
      produtoid: "29.14.1168",
      fornecedorid: "15484115000146",
    },
  });

  const fornecedorProduto11 = await prisma.fornecedorProduto.upsert({
    where: { id: 11 },
    update: {},
    create: {
      produtoid: "29.14.1169",
      fornecedorid: "15484115000145",
    },
  });

  const produtoPreco1Seed = await prisma.produtosPrecos.upsert({
    where: { id: 1 },
    update: {},
    create: {
      codigoid: "29.14.1159",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco2Seed = await prisma.produtosPrecos.upsert({
    where: { id: 2 },
    update: {},
    create: {
      codigoid: "29.14.1160",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco3Seed = await prisma.produtosPrecos.upsert({
    where: { id: 3 },
    update: {},
    create: {
      codigoid: "29.14.1161",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco4Seed = await prisma.produtosPrecos.upsert({
    where: { id: 4 },
    update: {},
    create: {
      codigoid: "29.14.1162",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco5Seed = await prisma.produtosPrecos.upsert({
    where: { id: 5 },
    update: {},
    create: {
      codigoid: "29.14.1163",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco6Seed = await prisma.produtosPrecos.upsert({
    where: { id: 6 },
    update: {},
    create: {
      codigoid: "29.14.1164",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco7Seed = await prisma.produtosPrecos.upsert({
    where: { id: 7 },
    update: {},
    create: {
      codigoid: "29.14.1165",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco8Seed = await prisma.produtosPrecos.upsert({
    where: { id: 8 },
    update: {},
    create: {
      codigoid: "29.14.1166",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco9Seed = await prisma.produtosPrecos.upsert({
    where: { id: 9 },
    update: {},
    create: {
      codigoid: "29.14.1167",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco10Seed = await prisma.produtosPrecos.upsert({
    where: { id: 10 },
    update: {},
    create: {
      codigoid: "29.14.1168",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const produtoPreco11Seed = await prisma.produtosPrecos.upsert({
    where: { id: 11 },
    update: {},
    create: {
      codigoid: "29.14.1169",
      precoCusto: 9.99,
      porcentagemLucro: 50,
      promocaodesconto: 10,
      valorVenda: 15,
      valorAtacado: 13,
    },
  });

  const mensagemSeed = await prisma.mensagem.upsert({
    where: { id: 1 },
    update: {},
    create: { mensagem: "Louvado seja o Senhor." },
  });

  console.log({ mensagemSeed });
  console.log({ produtoPreco1Seed });
  console.log({ produtoPreco2Seed });
  console.log({ produtoPreco3Seed });
  console.log({ produtoPreco4Seed });
  console.log({ produtoPreco5Seed });
  console.log({ produtoPreco6Seed });
  console.log({ produtoPreco7Seed });
  console.log({ produtoPreco8Seed });
  console.log({ produtoPreco9Seed });
  console.log({ produtoPreco10Seed });
  console.log({ produtoPreco11Seed });
  console.log({ fornecedorProduto1 });
  console.log({ fornecedorProduto2 });
  console.log({ fornecedorProduto3 });
  console.log({ fornecedorProduto4 });
  console.log({ fornecedorProduto5 });
  console.log({ fornecedorProduto6 });
  console.log({ fornecedorProduto7 });
  console.log({ fornecedorProduto8 });
  console.log({ fornecedorProduto9 });
  console.log({ fornecedorProduto10 });
  console.log({ fornecedorProduto11 });
  console.log({ tipoProduto1 });
  console.log({ tipoProduto2 });
  console.log({ tipoProduto3 });
  console.log({ tipoProduto4 });
  console.log({ tipoProduto5 });
  console.log({ tipoProduto6 });
  console.log({ tipoProduto7 });
  console.log({ tipoProduto8 });
  console.log({ tipoProduto9 });
  console.log({ tipoProduto10 });
  console.log({ tipoProduto11 });
  console.log({ produto1Seed });
  console.log({ produto2Seed });
  console.log({ produto3Seed });
  console.log({ produto4Seed });
  console.log({ produto5Seed });
  console.log({ produto6Seed });
  console.log({ produto7Seed });
  console.log({ produto8Seed });
  console.log({ produto9Seed });
  console.log({ produto10Seed });
  console.log({ produto11Seed });
  console.log({ fornecedor1 });
  console.log({ fornecedor2 });
  console.log({ tipoCaixa });
  console.log({ tipoPacote });
  console.log({ tipoUnidade });
  console.log({ adminSeed });
  console.log({ userSeed });
  console.log({ roleAdminSeed });
  console.log({ roleUserSeed });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
