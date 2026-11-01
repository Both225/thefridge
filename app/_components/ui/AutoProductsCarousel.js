"use client";

import { useEffect, useRef } from "react";
import PromoCard from "../product/PromoCard";

function AutoPromoCarousel({ promos, title }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    let interval;

    function slideRight() {
      const firstCard = carousel.firstElementChild;

      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 20;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (maxScroll <= 0) return;

      if (carousel.scrollLeft >= maxScroll - 5) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }

    function startInterval() {
      interval = setInterval(slideRight, 5000);
    }

    function stopInterval() {
      clearInterval(interval);
    }

    startInterval();

    carousel.addEventListener("mouseenter", stopInterval);
    carousel.addEventListener("mouseleave", startInterval);

    return () => {
      stopInterval();
      carousel.removeEventListener("mouseenter", stopInterval);
      carousel.removeEventListener("mouseleave", startInterval);
    };
  }, []);

  return (
    <section className="w-full space-y-5">
      {title && (
        <h2 className="text-2xl font-semibold text-t-strong">{title}</h2>
      )}

      <div
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {promos.map((promo) => (
          <div key={promo.id} className="shrink-0">
            <PromoCard promo={promo} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AutoPromoCarousel;
