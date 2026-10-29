"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function FloatingAddToCart({ onAddToCart }) {
  const buttonRef = useRef(null);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const observer = new IntersectionObserver(([entry]) => {
      const rect = entry.boundingClientRect;

      // Show only after the original button passes above the viewport.
      setShowFloating(!entry.isIntersecting && rect.bottom < 0);
    });

    observer.observe(button);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={buttonRef}>
        <button
          onClick={onAddToCart}
          className="w-full bg-primary py-2 rounded-lg text-white"
        >
          Add to Cart
        </button>
      </div>

      {showFloating && (
        <button
          onClick={onAddToCart}
          aria-label="Add to cart"
          className="fixed bottom-6 right-6 z-50 flex h-18 w-18 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105"
        >
          <ShoppingCart size={24} />
        </button>
      )}
    </>
  );
}
