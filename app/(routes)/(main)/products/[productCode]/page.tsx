import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/product-page";
import { INewProduct } from "@/lib/schema";
import { Metadata } from "next";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

async function getProduct(id: string): Promise<INewProduct | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const product = await response.json();

  return product;
}

export async function generateMetadata({ params }: { params: { productCode: string } }): Promise<Metadata> {
  const product = await getProduct(params.productCode);

  if (!product) {
    return {
      title: "Product Not Found - Earthycrafts",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `${product.name} - Earthycrafts`,
    description: product.description || `Buy ${product.name} at Earthycrafts. Handmade with love.`,
    alternates: {
      canonical: `https://earthycrafts.com/products/${params.productCode}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: product.name,
      description: product.description || `Buy ${product.name} at Earthycrafts.`,
      url: `https://earthycrafts.com/products/${params.productCode}`,
      siteName: "Earthycrafts",
      type: "website",
      images: product.images?.[0]?.image ? [{ url: product.images[0].image }] : [],
    },
  };
}

export default async function ProductPage({ params }: { params: { productCode: string } }) {
  const product = await getProduct(params.productCode);

  if (!product) {
    notFound();
  }

  // Generate structured data
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://earthycrafts.com" },
    { name: "Products", url: "https://earthycrafts.com/products" },
    { name: product.name, url: `https://earthycrafts.com/products/${params.productCode}` },
  ]);

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetails product={product} />
    </>
  );
}
