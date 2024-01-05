import { useLocation } from "@remix-run/react";
import { RxHamburgerMenu } from "react-icons/rx/index.js";
import { IoIosSearch } from "react-icons/io/index.js";
import { GiShoppingCart } from "react-icons/gi/index.js";

interface Props {
  toggleCart: () => void;
}

export function Nav({ toggleCart }: Props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";

  return (
    <>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <button
            aria-label="Abrir menu mobile"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <div className="flex w-full md:w-1/3">
          <a
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            href="/"
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase lg:block">
              Faker Store
            </div>
          </a>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <form
            method="GET"
            className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
          >
            <input
              type="text"
              placeholder="Procurar por produtos..."
              className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
              name="q"
              defaultValue={q}
            />
            <button type="submit">
              <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <IoIosSearch />
              </div>
            </button>
          </form>
        </div>
        <div className="flex justify-end md:w-1/3">
          <button aria-label="Abrir carrinho" onClick={toggleCart}>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <GiShoppingCart />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}
