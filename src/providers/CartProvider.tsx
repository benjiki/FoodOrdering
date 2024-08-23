import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "@/src/types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    const existingItemIndex = items.findIndex(
      (item) => item.product_id === product.id && item.size === size
    );

    if (existingItemIndex > -1) {
      // If the item already exists, increase the quantity
      const updatedItems = items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItems(updatedItems);
    } else {
      // If the item doesn't exist, add a new one
      const newCartItem: CartItem = {
        id: randomUUID(),
        product,
        product_id: product.id,
        size,
        quantity: 1,
      };
      setItems([newCartItem, ...items]);
    }
  };

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
      .filter((item) => item.quantity > 0);

    setItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
