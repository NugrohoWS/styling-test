"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutHero = () => {
  const pathname = usePathname();

  return (
    <section className="w-full xl:aspect-[1440/700] relative flex flex-row">
      <div className="xl:w-[36.875%] h-full bg-[#2F2A2A]">
        <div className="w-full h-full flex flex-col justify-end items-start pl-[120px] pr-8 pb-[60px] pt-[120px] relative overflow-hidden">
          <Image
            src="/assets/svg/polygon.svg"
            alt="Polygon"
            width={328}
            height={328}
            className="absolute xl:top-1/2 xl:left-[50px] -translate-y-1/2"
          />
          <Image
            src="/assets/svg/polygon.svg"
            alt="Polygon"
            width={328}
            height={328}
            className="absolute xl:bottom-[5%] xl:left-[-28%] rotate-[-34.6deg]"
          />
          <div className="flex items-center gap-2 mb-auto">
            <Link href="/" className="text-h6 font-tstarPro text-white/80">
              Home
            </Link>
            <p className="text-h6 font-tstarPro text-white/80">/</p>
            <p className="text-h6 font-tstarPro font-bold text-white capitalize">
              {pathname.split("/")[1]}
            </p>
          </div>
          <div>
            <h1 className="text-h2 font-tstarPro font-normal text-white mb-2">
              Force of Progress
            </h1>
            <p className="text-body font-trebuchet font-normal text-white/80">
              Daya Dimensi Indonesia is a leadership consultant that supports
              organisations develop and deliver strategic programmes such as
              assessment centre, selection, learning, and personal &
              organisational transformation.
            </p>
          </div>
          <Image
            src="/assets/svg/next-white.svg"
            alt="Next"
            width={24}
            height={24}
            className="rotate-90 mt-20"
          />
        </div>
      </div>
      <div className="flex-1 h-full relative">
        <Image
          src="/assets/images/about-hero.png"
          alt="Hero Background"
          fill
          className="absolute top-0 left-0 right-0 bottom-0 object-cover"
        />
      </div>
    </section>
  );
};

export default AboutHero;
