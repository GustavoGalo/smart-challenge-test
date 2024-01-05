import { Order } from "./order";
import { Product } from "./product";

export interface OrderDetail {
  id: number;
  orderId: number;
  productId: number;
  count: number;
  unitPrice: number;
  order?: Order;
  product?: Product;
}

export interface OrderDetailDTO {
  orderId: number;
  productId: number;
  count: number;
  unitPrice: number;
}
