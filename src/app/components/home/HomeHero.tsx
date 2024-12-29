import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="w-full xl:aspect-[1440/700] relative">
      <Image
        src="/assets/images/hero-bg.png"
        alt="Hero Background"
        fill
        className="absolute top-0 left-0 right-0 bottom-0 object-cover"
      />
      <div className="w-full h-full flex flex-col items-start justify-end relative">
        <div className="w-full px-[120px]">
          <div className="xl:w-[33.125%] xl:pb-[88px]">
            <h1 className="text-h1 font-tstarPro font-light text-white mb-2">
              Adopt Globally, Adapt Locally
            </h1>
            <p className="text-body font-trebuchet text-white/80">
              Daya Dimensi Indonesia is a world-class strategic partner for
              individual and organisational transformation through
              humanity-based and technology-supported solutions to help you
              hire, promote, and develop exceptional leaders.
            </p>
            <div className="flex flex-row items-center xl:gap-16 xl:mt-10">
              <Link
                href="/about"
                className="text-link font-tstarPro text-white flex flex-row items-center gap-2 uppercase"
              >
                <p>Learn More About Us</p>
                <Image
                  src="/assets/svg/next-white.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="/contact"
                className="text-link font-tstarPro text-white flex flex-row items-center gap-2 uppercase"
              >
                <p>Contact Us</p>
                <Image
                  src="/assets/svg/next-white.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full home-hero-gradient">
          <div className="flex flex-row items-start justify-between bg-white xl:w-[55.76%] xl:py-[42px] xl:pl-[120px] xl:pr-20">
            <div>
              <h3 className="text-h3 font-tstarPro font-light text-[#B92322]">
                24+ Years
              </h3>
              <p className="text-body font-trebuchet text-black/40">
                Experience
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-tstarPro font-light text-[#B92322]">
                50.000+
              </h3>
              <p className="text-body font-trebuchet text-black/40">
                Executive Clients
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-tstarPro font-light text-[#B92322]">
                400+
              </h3>
              <p className="text-body font-trebuchet text-black/40">
                Organization Clients
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center xl:gap-8 xl:ml-8">
            <Image
              src="/assets/images/unwomen.png"
              alt="UN Women"
              width={195}
              height={64}
              className="h-[64px] w-auto"
            />
            <Image
              src="/assets/images/iso-updated.png"
              alt="ISO"
              width={260}
              height={64}
              className="h-[64px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
