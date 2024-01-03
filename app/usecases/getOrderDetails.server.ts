import { OrderDetailRepository, PrismaClientSingleton } from "../../infra";

export async function getOrderDetails(orderId: number) {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();
  const orderDetailsRepository = new OrderDetailRepository(prismaClient);
  const orderDetails = await orderDetailsRepository.getById(orderId);

  return orderDetails;
}
