import { useState } from "react";
import { Nav } from "./nav";
import { CartMenu } from "./cartMenu";
import { OrderDetail } from "../../interfaces/entities/orderDetail";

interface Props {
  children: React.ReactNode;
  orderDetails: OrderDetail[];
}

export function Layout({ children, orderDetails }: Props) {
  const [showCartMenu, setShowCartMenu] = useState(false);

  return (
    <div className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
      <Nav toggleCart={() => setShowCartMenu(!showCartMenu)} />
      <main>{children}</main>
      {showCartMenu && (
        <CartMenu
          orderDetails={orderDetails}
          toggleCart={() => setShowCartMenu(!showCartMenu)}
        />
      )}
    </div>
  );
}
