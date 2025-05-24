import CategorySection from "@/components/home-page/category-section";
import CustomizeSection from "@/components/home-page/customize-section";
import GalleryGrid from "@/components/home-page/gallery-grid";
import HeroSection from "@/components/home-page/hero-section";
import ProductSlide2 from "@/components/home-page/product-slide2";
import SubCategorySection from "@/components/home-page/sub-category-section";
import YourSpace from "@/components/home-page/your-space-section";

export default async function Home() {
  debugger
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSlide2 />
      <YourSpace />
      <SubCategorySection />
      <CustomizeSection />
      <GalleryGrid />
    </>
  );
}
