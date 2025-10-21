import ContactPage from "@/components/contact/contact-page";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

export const metadata: Metadata = {
  title: "Contact Us - Earthycrafts",
  description: "Get in touch with Earthycrafts. We'd love to hear from you about custom orders, inquiries, or any questions.",
  alternates: {
    canonical: `${baseUrl}/contact`,
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
    title: "Contact Us - Earthycrafts",
    description: "Get in touch with Earthycrafts for custom orders and inquiries.",
    url: `${baseUrl}/contact`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Contact() {
  return <ContactPage />;
}
