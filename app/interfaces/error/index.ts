export type ErrorType =
  | "userNotFound"
  | "productNotFound"
  | "orderDetailNotFound";

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
};
