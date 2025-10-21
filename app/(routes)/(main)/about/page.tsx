import AboutPage from "@/components/about/about-page";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

export const metadata: Metadata = {
  title: "About Us - Earthycrafts",
  description: "Learn about Earthycrafts, our story, and our passion for creating beautiful handmade crafts and home decor.",
  alternates: {
    canonical: `${baseUrl}/about`,
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
    title: "About Us - Earthycrafts",
    description: "Learn about Earthycrafts, our story, and our passion for creating beautiful handmade crafts.",
    url: `${baseUrl}/about`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function About() {
  return <AboutPage />;
}
