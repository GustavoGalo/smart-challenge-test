import { Order } from "@prisma/client";

export interface IOrderRepository {
  getUnfinishedOrder(userId: number): Promise<Order | undefined>;
}
