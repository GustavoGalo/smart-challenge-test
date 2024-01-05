import { Form } from "@remix-run/react";
import { IoMdClose } from "react-icons/io/index.js";
import { CartItem } from "./cartItem";
import { OrderDetail } from "../../interfaces/entities/orderDetail";

interface Props {
  toggleCart: () => void;
  orderDetails: OrderDetail[];
}

export function CartMenu({ toggleCart, orderDetails }: Props) {
  const total =
    orderDetails.length > 0
      ? orderDetails
          .map((order) => order.unitPrice)
          .reduce((curr, next) => curr + next)
      : 0;

  return (
    <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px] translate-x-0">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Meu Carrinho</p>
        <button aria-label="Fechar carrinho" onClick={toggleCart}>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
            <IoMdClose />
          </div>
        </button>
      </div>
      <div className="flexdiv h-full flex-col justify-between overflow-hidden p-1">
        <ul className="flex-grow overflow-auto py-4">
          {orderDetails.map((order) => (
            <CartItem key={order.id} order={order} />
          ))}
        </ul>
        <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
            <p>Total</p>
            <p className="text-right text-base text-black dark:text-white">
              {total}
              <span className="ml-1 inline">pts</span>
            </p>
          </div>
        </div>
        <Form method="POST">
          <input
            type="text"
            name="orderId"
            value={orderDetails.at(0)?.orderId}
            className="hidden"
            readOnly
          />
          <button className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100">
            Finalizar Pedido
          </button>
        </Form>
      </div>
    </div>
  );
}
