import CustomizationPage from "@/components/customization/customization-page";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

export const metadata: Metadata = {
  title: "Custom Orders - Earthycrafts",
  description: "Request custom handmade crafts tailored to your preferences. We create unique pieces just for you.",
  alternates: {
    canonical: `${baseUrl}/customization`,
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
    title: "Custom Orders - Earthycrafts",
    description: "Request custom handmade crafts tailored to your preferences.",
    url: `${baseUrl}/customization`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Customization() {
  return <CustomizationPage />;
}
