import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const text =
    "More than just handicraft, a symphony of natural stone and design.";

  return (
    <main className="relative">
      <Image
        className="md:hidden absolute top-0 right-0 brightness-75 z-0"
        src="/videos/intro-portrait.png"
        alt="Earthycrafts background"
        fill
        priority
      />

      <Image
        className="md:absolute md:block hidden top-0 right-0 brightness-75 z-0"
        src="/videos/intro-landscape.png"
        alt="Earthycrafts background"
        fill
        priority
      />

      <div className="z-10 text-white drop-shadow-lg h-screen flex flex-col gap-2 items-center justify-center text-center">
        {/* Earthycrafts Logo */}
        <Image
          src="/images/logo-white.svg"
          className="sm:scale-100 scale-[0.8]"
          width={400}
          height={400}
          alt="Earthycrafts logo"
          priority
        />
        {/* Tag line */}
        <h3
          className="px-1 text-lg sm:text-3xl md:text-4xl font-semibold max-w-[700px] "
          aria-label={text}
        >
          {text}
        </h3>
        {/* Explore Action Button */}
        <Link
          className="px-6 py-1 rounded-full gap-0.5 flex items-center bg-transparent hover:bg-black/20 text-white border-2 group"
          href="/products"
        >
          Explore
          <ArrowRight className="w-0 inline-flex group-hover:w-5 transition-all duration-500" />
        </Link>
      </div>
    </main>
  );
}
