'use client' //
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function HeroSection() {

  // const text =
    // "More than just handicraft, a symphony of natural stone and design.";

  return (
    <main className="relative">
      <Carousel autoPlay={true} interval={2000} showThumbs={false} infiniteLoop={true} >
        <div key="SET01">
          <img src="/images/heroSection/SET01.png" />
        </div>
        <div key="SET02">
          <img src="/images/heroSection/SET02.jpg" />
        </div>
        <div key="SET03">
          <img src="/images/heroSection/SET03.jpg" />
        </div>
        <div key="SET04">
          <img src="/images/heroSection/SET04.png" />
        </div>
      </Carousel>


    </main>
  );
}

//   {/* Earthycrafts Logo */}
//   <Image
//   src="/images/logo-white.svg"
//   className="sm:scale-100 scale-[0.8]"
//   width={400}
//   height={400}
//   alt="Earthycrafts logo"
//   priority
// />
// {/* Tag line */}
// <h3
//   className="px-1 text-lg sm:text-3xl md:text-4xl font-semibold max-w-[700px] "
//   aria-label={text}
// >
//   {text}
// </h3>
// {/* Explore Action Button */}
// <Link
//   className="px-6 py-1 rounded-full gap-0.5 flex items-center bg-transparent hover:bg-black/20 text-white border-2 group"
//   href="/products"
// >
//   Explore
//   <ArrowRight className="w-0 inline-flex group-hover:w-5 transition-all duration-500" />
// </Link>