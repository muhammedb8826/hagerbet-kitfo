import About from "@/components/layout/About";
import AboutExtended from "@/components/layout/AboutExtended";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Team from "@/components/layout/Team";
import { Testimonials } from "@/components/layout/Testimonials";

export default function AboutPage() {
  return (
    <main className="bg-light-ivory">
      <Header />
      <AboutExtended />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
