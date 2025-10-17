import { INewProduct, IBlog } from "./schema";

/**
 * Generate Organization structured data for the website
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Earthycrafts",
    url: "https://earthycrafts.com",
    logo: "https://earthycrafts.com/images/logo.png",
    description: "Handmade crafts with love. Discover unique handmade crafts, home decor, and artisanal products.",
    sameAs: [
      process.env.NEXT_PUBLIC_FB_URL || "",
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
      process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://earthycrafts.com/contact",
    },
  };
}

/**
 * Generate WebSite structured data
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Earthycrafts",
    url: "https://earthycrafts.com",
    description: "Handmade crafts with love. Discover unique handmade crafts, home decor, and artisanal products.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://earthycrafts.com/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate Product structured data
 */
export function generateProductSchema(product: INewProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images?.map((img) => img.image) || [],
    sku: product.productCode,
    brand: {
      "@type": "Brand",
      name: "Earthycrafts",
    },
    offers: {
      "@type": "Offer",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://earthycrafts.com/products/${product.productCode}`,
      priceCurrency: "INR",
    },
  };
}

/**
 * Generate Article structured data for blog posts
 */
export function generateArticleSchema(blog: IBlog, blogId: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.content?.[0]?.substring(0, 160) || "",
    author: {
      "@type": "Organization",
      name: "Earthycrafts",
    },
    publisher: {
      "@type": "Organization",
      name: "Earthycrafts",
      logo: {
        "@type": "ImageObject",
        url: "https://earthycrafts.com/images/logo.png",
      },
    },
    datePublished: blog.createdAt?.toISOString(),
    dateModified: blog.updatedAt?.toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://earthycrafts.com/blog/${blogId}`,
    },
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate ItemList structured data for product listings
 */
export function generateItemListSchema(products: INewProduct[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.slice(0, 10).map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://earthycrafts.com/products/${product.productCode}`,
      name: product.name,
    })),
  };
}

