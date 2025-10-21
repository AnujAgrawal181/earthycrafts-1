import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Earthycrafts",
  description: "Browse our collection of handmade crafts, home decor, and artisanal products. Find unique pieces for your home.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Products - Earthycrafts",
    description: "Browse our collection of handmade crafts and home decor.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com"}/products`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

