import {
  About,
  DeliveryOptions,
  Faq,
  FeaturedProducts,
  Hero,
  ProductCategories,
} from "@/components/sections";
import Occasions from "@/components/sections/occasions";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ProductCategories />
      <Occasions />
      <DeliveryOptions />
      <About />
      <Faq />
    </>
  );
}
