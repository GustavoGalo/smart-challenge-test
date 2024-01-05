import { IoMdClose } from "react-icons/io/index.js";

import { OrderDetail } from "../../interfaces/entities/orderDetail";
import { Form } from "@remix-run/react";

interface Props {
  order: OrderDetail;
}

export function CartItem({ order }: Props) {
  return (
    <div className="relative flex w-full flex-row justify-between px-1 py-4">
      <div className="absolute z-40 -mt-2 ml-[55px]">
        <Form method="DELETE">
          <input
            className="hidden"
            type="text"
            name="orderDetailId"
            value={order.id}
            readOnly
          />
          <button
            type="submit"
            aria-label="Remove cart item"
            aria-disabled="false"
            className="ease flex h-[17px] w-[17px] items-center justify-center text-black rounded-full bg-neutral-500 transition-all duration-200"
          >
            <IoMdClose />
          </button>
        </Form>
      </div>
      <div className="z-30 flex flex-row space-x-4">
        <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="relative h-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col text-base">
          <span className="leading-tight truncate max-w-36">
            {order.product?.name}
          </span>
        </div>
      </div>
      <div className="flex h-16 flex-col justify-between">
        <p className="flex justify-end space-y-2 text-right text-sm">
          {order.product?.price}
          <span className="ml-1 inline">pts</span>
        </p>
      </div>
    </div>
  );
}
