import { Form } from "@remix-run/react";
import { BsCartPlus } from "react-icons/bs/index.js";
import { Product } from "../../interfaces/entities/product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <li className="aspect-square transition-opacity animate-fadeIn">
      <div className="relative inline-block h-full w-full">
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="relative h-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
          <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
              {product.name}
            </h3>
            <p className="flex-none rounded-full bg-blue-600 p-2 text-white mr-2">
              {product.price} pts
            </p>
            <Form method="post">
              <input
                readOnly
                className="hidden"
                type="text"
                name="productId"
                value={product.id}
              />
              <button
                type="submit"
                className="rounded-full bg-blue-600 p-2 text-white"
              >
                <BsCartPlus />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </li>
  );
}
