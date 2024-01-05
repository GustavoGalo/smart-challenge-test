import { OrderDetailRepository, PrismaClientSingleton } from "../../infra";

export async function getOrderDetails() {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();
  const orderDetailsRepository = new OrderDetailRepository(prismaClient);
  const orderDetails = await orderDetailsRepository.listAll();

  return orderDetails;
}
