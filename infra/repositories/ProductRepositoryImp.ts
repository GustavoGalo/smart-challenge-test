import { PrismaClient } from "@prisma/client";
import { Product } from "../../app/interfaces/entities/product";
import { ProductRepository } from "../../app/interfaces/repositories/ProductRepository";

export class ProductRepositoryImp implements ProductRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async listProducts(): Promise<Product[]> {
    const products = await this.prismaClient.product.findMany();

    return products;
  }
}
