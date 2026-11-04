"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../_redux/features/cartSlice";

function CartPersistence() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        dispatch(setCart(JSON.parse(savedCart)));
      } catch {
        localStorage.removeItem("cart");
      }
    }

    setIsHydrated(true);
  }, [dispatch]);

  // Save cart only after loading is complete
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, isHydrated]);

  return null;
}

export default CartPersistence;
