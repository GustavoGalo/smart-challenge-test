import { Product } from "@prisma/client";

export interface ProductRepository {
  listProducts(): Promise<Product[]>;
}
