import { Errors } from "../interfaces/error";
import {
  UserRepository,
  ProductRepository,
  PrismaClientSingleton,
  OrderRepository,
  OrderDetailRepository,
} from "../../infra";

export async function addProductToCart(
  userId: number,
  productId: number,
  count: number
) {
  const prismaClient = PrismaClientSingleton.getInstance().getPrismaClient();

  const userRepository = new UserRepository(prismaClient);
  const productRepository = new ProductRepository(prismaClient);
  const orderRepository = new OrderRepository(prismaClient);
  const orderDetailsRepository = new OrderDetailRepository(prismaClient);

  const user = await userRepository.getById(userId);

  if (!user) return Errors.userNotFound;

  const product = await productRepository.getById(productId);

  if (!product) return Errors.productNotFound;

  let order = await orderRepository.getUnfinishedOrder(userId);

  if (!order) {
    order = await orderRepository.create({ userId });
  }

  const orderDetails = await orderDetailsRepository.create({
    orderId: order.id,
    productId,
    count,
    unitPrice: product.price,
  });

  return orderDetails;
}
