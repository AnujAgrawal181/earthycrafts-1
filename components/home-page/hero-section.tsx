import BackgroundVideo from "@/components/video/background-video";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const text = "More than just handicraft, a symphony of natural stone and design.";

  const landscapeVideo = "https://bseuburnlk.ufs.sh/f/qq9xtZ1seAvycvd2SwJuyfq493Yi7VxRAZmMlNvjh6CD5LP8";
  const portraitVideo = "https://bseuburnlk.ufs.sh/f/qq9xtZ1seAvyvnez94u9dIKFSu3x2U5kXC7s6GO4jaWgZEqT";

  return (
    <main className="relative">
      {/* Landscape Intro Video */}
      <BackgroundVideo
        src={landscapeVideo}
        className="md:absolute md:block hidden top-0 right-0 brightness-75 z-0"
        format="webm"
        poster="/videos/intro-landscape.png"
      />

      {/* Portrait Intro Video */}
      <BackgroundVideo
        src={portraitVideo}
        className="md:hidden absolute top-0 right-0 brightness-75 z-0"
        format="webm"
        poster="/videos/intro-portrait.png"
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
        <h3 className=" px-1 text-lg sm:text-3xl md:text-4xl font-semibold max-w-[700px] " aria-label={text}>
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
