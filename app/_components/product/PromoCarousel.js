import PromoCard from "./PromoCard";

export default function PromoCarousel({ promoItems }) {
  return (
    <section aria-label="Featured promotions" className="w-full min-w-0">
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory
          scroll-smooth pb-2
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {promoItems.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </section>
  );
}
