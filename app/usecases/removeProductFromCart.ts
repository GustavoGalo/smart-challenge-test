import { Errors } from "../interfaces/error";
import { OrderDetailRepository, PrismaClientSingleton } from "../../infra";

export async function removeProductFromCart(orderDetailsId: number) {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();
  const orderDetailsRepository = new OrderDetailRepository(prismaClient);

  const orderDetail = await orderDetailsRepository.getById(orderDetailsId);

  if (!orderDetail) return Errors.orderDetailNotFound;

  await orderDetailsRepository.delete(orderDetailsId);
}
