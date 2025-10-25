import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/product-page";
import { INewProduct } from "@/lib/schema";
import { Metadata } from "next";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

// Enable ISR (Incremental Static Regeneration) - revalidate every hour
export const revalidate = 3600;

async function getProduct(slug: string): Promise<INewProduct | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${slug}`, {
    cache: "force-cache",
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

  return {
    title: `${product.name} - Earthycrafts`,
    description: product.description || `Buy ${product.name} at Earthycrafts. Handmade with love.`,
    alternates: {
      canonical: `${baseUrl}/products/${product.slug}`,
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
      url: `${baseUrl}/products/${product.slug}`,
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

  // Generate structured data
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Products", url: `${baseUrl}/products` },
    { name: product.name, url: `${baseUrl}/products/${product.slug}` },
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
