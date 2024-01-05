import { PrismaClient } from "@prisma/client";
import {
  OrderDetail,
  OrderDetailDTO,
} from "../../app/interfaces/entities/orderDetail";
import { Repository } from "../../app/interfaces/repositories/Repository";

export class OrderDetailRepository
  implements Repository<OrderDetail, OrderDetailDTO>
{
  constructor(private prismaClient: PrismaClient) {}

  public async listAll(): Promise<OrderDetail[]> {
    const orders = await this.prismaClient.orderDetails.findMany({
      include: {
        product: true,
        order: true,
      },
    });

    return orders;
  }

  public async getById(id: number): Promise<OrderDetail | null> {
    const order = await this.prismaClient.orderDetails.findUnique({
      where: { id },
    });

    return order;
  }

  public async create(entity: OrderDetailDTO): Promise<OrderDetail> {
    const order = await this.prismaClient.orderDetails.create({
      data: entity,
    });

    return order;
  }

  public async update(
    id: number,
    entity: OrderDetailDTO
  ): Promise<OrderDetail> {
    const order = await this.prismaClient.orderDetails.update({
      where: { id },
      data: entity,
    });

    return order;
  }

  public async delete(id: number): Promise<void> {
    await this.prismaClient.orderDetails.delete({ where: { id } });
  }
}
