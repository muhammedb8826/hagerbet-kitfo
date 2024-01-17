import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Menu from "@/components/layout/menu/Menu";
import ProductsFeatured from "@/components/layout/menu/ProductsFeatured";

export default function MenuPage() {
  return (
    <main className="bg-light-ivory">
      <Header />
      <ProductsFeatured pb="xl"/>
      <Menu pt="xl" pb="xl"/>
      <Footer />
    </main>
  );
}
