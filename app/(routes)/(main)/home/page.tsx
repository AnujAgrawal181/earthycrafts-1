import CategorySection from "@/components/home-page/category-section";
import CustomizeSection from "@/components/home-page/customize-section";
import HeroSection from "@/components/home-page/hero-section";
import ProductSlide2 from "@/components/home-page/product-slide2";
import SubCategorySection from "@/components/home-page/sub-category-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earthycrafts - Handmade Crafts with Love",
  description: "Discover unique handmade crafts, home decor, and artisanal products at Earthycrafts. Each piece is crafted with love and care.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Earthycrafts - Handmade Crafts with Love",
    description: "Discover unique handmade crafts, home decor, and artisanal products at Earthycrafts.",
    url: "https://earthycrafts.com/home",
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSlide2 />
      {/* <YourSpace /> */}
      <SubCategorySection />
      <CustomizeSection />
    </>
  );
}
