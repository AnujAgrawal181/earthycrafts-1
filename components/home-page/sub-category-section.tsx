import GridLayout from "../grid-layout";
import SubCategoryCarousel from "./components/sub-category-carousel";

const categories1 = [
  {
    id: 1,
    title: "Agra Red",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/agra-red.jpg",
    link: "/products?category=agra-red",
  },
  {
    id: 2,
    title: "Sandstone",
    description: "Handmade with love.",
    videoUrl: "/videos/sub-categories/sandstone.mp4",
    link: "/products?category=sandstone",
  },
  {
    id: 3,
    title: "Beslana",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/beslana.jpg",
    link: "/products?category=beslana",
  },
];
const categories2 = [
  {
    id: 1,
    title: "Bali",
    description: "Handmade with love.",
    videoUrl: "/videos/sub-categories/bali.mp4",
    link: "products?category=bali-marble",
  },
  {
    id: 2,
    title: "Blue Pottery",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/blue-pottery.jpg",
    link: "/products?category=blue-pottery",
  },
  {
    id: 3,
    title: "Tukdi Art",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/tukdi.jpg",
    link: "/products?category=tukdi-art",
  },
];

const categories3 = [
  {
    id: 1,
    title: "Temple",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/temple.jpg",
    link: "/products?category=temple",
  },
  {
    id: 2,
    title: "White Marble",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/white-marble.jpg",
    link: "/products?category=white-marble",
  },
  {
    id: 3,
    title: "Furniture",
    description: "Handmade with love.",
    videoUrl: "/videos/sub-categories/furniture.mp4",
    link: "/products?category=furniture",
  },
  {
    id: 4,
    title: "Handicrafts",
    description: "Handmade with love.",
    videoUrl: "/images/sub-categories/handicrafts.jpg",
    link: "/products?category=handicrafts",
  },
];

export default function SubCategorySection() {
  return (
    <section className="md:py-12 py-4">
      <h1 className="md:text-5xl text-4xl font-bold text-center mb-12">Shop by Our Collection</h1>
      <div className="container lg:flex hidden flex-col gap-8 mx-auto md:px-24 sm:px-16 px-8 ">
        <GridLayout categories={categories1} className="" right />
        <GridLayout categories={categories2} className="" />
        <GridLayout categories={categories3} className="" />
      </div>

      <SubCategoryCarousel categories={[...categories1, ...categories2, ...categories3]} />
    </section>
  );
}
