import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { listProducts } from "../usecases/listProducts.server";
import { Layout } from "../presentation/components/layout";
import { ProductCard } from "../presentation/components/productCard";
import { CardList } from "../presentation/components/cardList";
import { addProductToCart } from "../usecases/addProductToCart";
import { getOrderDetails } from "../usecases/getOrderDetails.server";
import { removeProductFromCart } from "../usecases/removeProductFromCart";
import { cartCheckout } from "../usecases/cartCheckout";

export const meta: MetaFunction = () => {
  return [{ title: "FAKER STORE" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || undefined;
  const page = url.searchParams.get("page") || undefined;
  const orderBy = url.searchParams.get("orderBy");

  const products = await listProducts({
    search: q,
    page: page ? parseInt(page) : 1,
    orderBy: orderBy === "desc" ? "desc" : "asc",
  });

  const orderDetails = await getOrderDetails();

  return { products, orderDetails };
}

export default function Index() {
  const { products, orderDetails } = useLoaderData<typeof loader>();

  return (
    <Layout orderDetails={orderDetails}>
      <CardList pages={products.pages}>
        {products.data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </CardList>
    </Layout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  console.log("request.method: ", request.method);
  switch (request.method) {
    case "POST": {
      const productId = body.get("productId");
      const orderId = body.get("orderId");

      console.log("orderId: ", orderId);
      if (productId) {
        await addProductToCart(1, parseInt(productId.toString()), 1);
      }
      if (orderId) {
        await cartCheckout(parseInt(orderId.toString()));
      }
      return productId;
    }
    case "DELETE": {
      // orderDetailId
      const orderDetailId = body.get("orderDetailId");
      if (orderDetailId)
        removeProductFromCart(parseInt(orderDetailId.toString()));
      return false;
    }
    default: {
      return true;
    }
  }
}
