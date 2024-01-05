import { Errors } from "../interfaces/error";
import { OrderRepository, PrismaClientSingleton } from "../../infra";

export async function cartCheckout(orderId: number) {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();
  const orderRepository = new OrderRepository(prismaClient);

  const order = await orderRepository.getById(orderId);

  if (!order) return Errors.userNotFound;

  const details = await prismaClient.orderDetails.findMany({
    where: { orderId: order.id },
  });

  if (details.length === 0) return Errors.emptyCart;

  const toUpdate = [];
  for (let index = 0; index < details.length; index++) {
    const product = await prismaClient.product.findUnique({
      where: { id: details[index].productId },
    });

    if (!product) return Errors.productNotFound;

    if (details[index].count > product.count) return Errors.expiredProduct;
    toUpdate.push({
      ...product,
      count: product.count - details[index].count,
    });
  }

  for (const product of toUpdate) {
    try {
      await prismaClient.product.update({
        where: { id: product.id },
        data: product,
      });
    } catch (error) {
      return { error };
    }
  }

  for (const detail of details) {
    try {
      await prismaClient.orderDetails.delete({
        where: {
          id: detail.id,
        },
      });
    } catch (error) {
      return { error };
    }
  }

  const finishedOrder = prismaClient.order.update({
    where: { id: order.id },
    data: {
      finished: true,
    },
  });

  return finishedOrder;
}
