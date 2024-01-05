import { Filter } from "../interfaces/entities/filter";
import { ProductRepository, PrismaClientSingleton } from "../../infra/";

export async function listProducts(filters?: Filter) {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();
  const productsRepository = new ProductRepository(prismaClient);

  const filterObj = {};
  const page = filters?.page || 1;
  const totalItemsInPage = 6;
  const totalItemsToSkip = (page - 1) * totalItemsInPage;

  if (filters && filters.orderBy)
    Object.assign(filterObj, {
      orderBy: {
        price: filters.orderBy,
      },
    });
  if (filters && filters.search)
    Object.assign(filterObj, {
      where: {
        name: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
    });

  const productRecords = await productsRepository.countRecords(filterObj);
  const pages = Math.ceil(productRecords / totalItemsInPage);

  Object.assign(filterObj, {
    take: totalItemsInPage,
    skip: totalItemsToSkip,
  });

  const products = await productsRepository.listAllWithFilters(filterObj);

  return { data: products, page, pages };
}
