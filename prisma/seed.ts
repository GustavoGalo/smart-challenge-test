import { PrismaClientSingleton } from "../infra/services/prismaClientSingleton.server";
const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();

async function main() {
  const user = await prismaClient.user.create({
    data: {
      email: "sample@mail.com",
      firstname: "Fulano",
      lastname: "de Tal",
      password: "1234",
      username: "fulanodetal",
    },
  });
  const products = await prismaClient.product.createMany({
    data: [
      {
        name: "Smart Tv 50'' 4k Uhd 50cu7700 2023 Preta Samsung",
        price: 2.499,
        count: 100,
      },
      {
        name: "Caixa De Som Bluetooth Xtreme 3 50w À Prova D'água Preta Jbl 110V/220V",
        price: 1.199,
        count: 555,
      },
      {
        name: "Fone de ouvido on-ear sem fio JBL Tune 520BT preto",
        price: 268,
        count: 11,
      },
      {
        name: "Notebook Samsung Book I3 4gb 256gb Ssd 15,6'' W11 Cor Cinza-místico",
        price: 1.899,
        count: 12,
      },
      {
        name: "Bicicleta Aro 29 Krw Alumínio 24 Vel Freio A Disco X42",
        price: 879,
        count: 123,
      },
      {
        name: "Smartphone Samsung Galaxy A04e 64gb Preto 3gb Ram",
        price: 531,
        count: 55,
      },
      {
        name: "Fritadeira Sem Óleo Air Fryer Afn-40-bft 4l 1500w Mondial Cor Preto 110V",
        price: 359,
        count: 4523,
      },
      {
        name: "Cadeira de escritório TGT Heron RGB TGT-HR-RGB gamer ergonômica preta com estofado de couro sintético",
        price: 489,
        count: 1234,
      },
      {
        name: "Tênis Masculino E Feminino Advantage Court Base",
        price: 200,
        count: 65,
      },
      {
        name: "Furadeira parafusadeira sem fio de 10mm Wap BPF 12K3 12V + acessório 110V/220V",
        price: 199,
        count: 5,
      },
    ],
  });

  console.log([user, products]);
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
