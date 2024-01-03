export interface OrderDetail {
  id: number;
  orderId: number;
  productId: number;
  count: number;
  unitPrice: number;
}

export interface OrderDetailDTO {
  orderId: number;
  productId: number;
  count: number;
  unitPrice: number;
}
