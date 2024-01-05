export type ErrorType =
  | "userNotFound"
  | "productNotFound"
  | "orderDetailNotFound"
  | "orderNotFound"
  | "emptyCart"
  | "expiredProduct";

export type ErrorObject = {
  status: number;
  message: string;
};

export const Errors: Record<ErrorType, ErrorObject> = {
  userNotFound: {
    status: 404,
    message: "Usúario não encontrado.",
  },
  productNotFound: {
    status: 404,
    message: "Produto não encotrado.",
  },
  orderDetailNotFound: {
    status: 404,
    message: "Item não encontrado.",
  },
  orderNotFound: {
    status: 404,
    message: "Pedido não encontrado.",
  },
  emptyCart: {
    status: 400,
    message: "Carrinho vazio.",
  },
  expiredProduct: {
    status: 400,
    message: "Produto esgotado.",
  },
};
