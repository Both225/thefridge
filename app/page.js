import Header from "./_components/layout/Header";

import PromoBar from "./_components/ui/PromoBar";

export default function Home() {
  return (
    <div>
      <Header />
      <PromoBar>
        Special offer for new user with 20% discount for all products
      </PromoBar>
    </div>
  );
}
