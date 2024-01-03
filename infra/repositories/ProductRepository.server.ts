import { PrismaClient } from "@prisma/client";
import { Product, ProductDTO } from "../../app/interfaces/entities/product";
import { Repository } from "../../app/interfaces/repositories/Repository";

export class ProductRepository implements Repository<Product, ProductDTO> {
  constructor(private prismaClient: PrismaClient) {}

  public async listAll(): Promise<Product[]> {
    const products = await this.prismaClient.product.findMany();

    return products;
  }

  public async getById(id: number): Promise<Product | null> {
    const product = await this.prismaClient.product.findUnique({
      where: { id },
    });

    return product;
  }

  public async create(entity: ProductDTO): Promise<Product> {
    const product = await this.prismaClient.product.create({
      data: entity,
    });

    return product;
  }

  public async update(id: number, entity: ProductDTO): Promise<Product> {
    const product = await this.prismaClient.product.update({
      where: { id },
      data: entity,
    });

    return product;
  }

  public async delete(id: number): Promise<void> {
    await this.prismaClient.product.delete({ where: { id } });
  }
}
