import Footer from "../_components/layout/Footer";
import Header from "../_components/layout/Header";
import ToastProvider from "../_components/ui/ToastProvider";
import Providers from "../_redux/Providers";

function StoreLayout({ children }) {
  return (
    <div
      className={`min-h-full grid grid-rows-[min-content_1fr_min-content] grid-cols-1`}
    >
      <Providers>
        <Header />
        <main className="h-full space-y-8 my-8 px-4">{children}</main>
        <Footer />
        <ToastProvider />
      </Providers>
    </div>
  );
}

export default StoreLayout;
