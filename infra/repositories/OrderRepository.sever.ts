import { PrismaClient } from "@prisma/client";
import { Order, OrderDTO } from "../../app/interfaces/entities/order";
import { Repository } from "../../app/interfaces/repositories/Repository";

export class OrderRepository implements Repository<Order, OrderDTO> {
  constructor(private prismaClient: PrismaClient) {}

  public async listAll(): Promise<Order[]> {
    const orders = await this.prismaClient.order.findMany();

    return orders;
  }

  public async getById(id: number): Promise<Order | null> {
    const order = await this.prismaClient.order.findUnique({
      where: { id },
    });

    return order;
  }

  public async create(entity: OrderDTO): Promise<Order> {
    const order = await this.prismaClient.order.create({
      data: entity,
    });

    return order;
  }

  public async update(id: number, entity: OrderDTO): Promise<Order> {
    const order = await this.prismaClient.order.update({
      where: { id },
      data: entity,
    });

    return order;
  }

  public async delete(id: number): Promise<void> {
    await this.prismaClient.order.delete({ where: { id } });
  }
}
