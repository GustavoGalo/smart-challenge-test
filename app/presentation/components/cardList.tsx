import { useLocation, Link } from "@remix-run/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io/index.js";

interface Props {
  children: React.ReactNode;
  pages: number;
}

export function CardList({ children, pages }: Props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = params.has("page") ? params.get("page") : "1";
  const orderBy = params.get("orderBy") || "asc";
  const q = params.get("q") || undefined;

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
      <div className="min-h-screen w-full">
        <div className="flex gap-4 flex-col-reverse ">
          <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {children}
          </ul>
          <div className="flex justify-end">
            {pages !== 0 && (
              <nav className="flex gap-2 justify-between ">
                <ul className="flex gap-4">
                  <li className="flex font-bold text-sm text-neutral-500 dark:text-neutral-400 md:block">
                    Ordenar por
                  </li>
                  <li className="flex text-sm text-black dark:text-white">
                    <Link
                      className={`${
                        orderBy === "asc" &&
                        "underline hover:underline-offset-4"
                      }w-full hover:underline hover:underline-offset-4`}
                      to={`?orderBy=asc`}
                    >
                      Menor preço
                    </Link>
                  </li>
                  <li className="flex text-sm text-black dark:text-white">
                    <Link
                      to={`?orderBy=desc`}
                      className={`${
                        orderBy === "desc" &&
                        "underline hover:underline-offset-4"
                      }w-full hover:underline hover:underline-offset-4`}
                    >
                      Maior Preço
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
        {pages >= Number(page) && (
          <div className="flex justify-center gap-4 mt-4 mb-4">
            {Number(page) !== 1 && (
              <Link
                to={
                  q
                    ? `?orderBy=${orderBy}&page=${Number(page) - 1}&q=${q}`
                    : `?orderBy=${orderBy}&page=${Number(page) - 1}`
                }
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                  <IoIosArrowBack />
                </div>
              </Link>
            )}
            <div className="flex items-center ">
              {Number(page)}/{pages}
            </div>
            {Number(page) !== pages && (
              <Link
                to={
                  q
                    ? `?orderBy=${orderBy}&page=${Number(page) + 1}&q=${q}`
                    : `?orderBy=${orderBy}&page=${Number(page) + 1}`
                }
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                  <IoIosArrowForward />
                </div>
              </Link>
            )}
          </div>
        )}
        {pages === 0 && (
          <div className="text-center">
            Não há produtos que correspondam a{" "}
            <span className="font-extrabold">{`"${q}"`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
