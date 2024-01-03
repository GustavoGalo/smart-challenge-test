import { ProductRepository, PrismaClientSingleton } from "../../infra/";

export async function listProducts() {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();
  const productsRepository = new ProductRepository(prismaClient);
  const products = await productsRepository.listAll();

  return products;
}
