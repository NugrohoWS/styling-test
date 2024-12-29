import Image from "next/image";
import Link from "next/link";

const AboutNumber = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[#F5F5F5] xl:h-[560px] 2xl:h-[38vw]"></div>
      <div className="w-full xl:pr-[120px] xl:pl-[223px] xl:pb-[120px] relative">
        <div className="flex flex-col justify-start items-start xl:pt-[100px]">
          <h2 className="text-h2 font-tstarPro font-normal mb-10">
            Daya Dimensi In Numbers
          </h2>
          <div className="flex flex-row justify-between items-start w-full xl:mb-[100px]">
            <div>
              <p className="font-tstarPro font-light text-[72px] leading-[80px] text-[#B92322]">
                24+ Years
              </p>
              <p className="text-h5 font-trebuchet font-normal text-black/40">
                Experience
              </p>
            </div>
            <div>
              <p className="font-tstarPro font-light text-[72px] leading-[80px] text-[#B92322]">
                50.000+
              </p>
              <p className="text-h5 font-trebuchet font-normal text-black/40">
                Executive Clients
              </p>
            </div>
            <div>
              <p className="font-tstarPro font-light text-[72px] leading-[80px] text-[#B92322]">
                400+
              </p>
              <p className="text-h5 font-trebuchet font-normal text-black/40">
                Organization Clients
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start gap-8 w-full">
            <div className="w-full max-w-[33.40vw] relative group">
              <Image
                src="/assets/images/about-leaders.png"
                alt="About Leaders"
                width={450}
                height={450}
                className="w-full aspect-square object-cover mb-5"
              />
              <h3 className="text-h3 font-tstarPro font-normal text-black mb-2">
                Leaders of a New Planet
              </h3>
              <p className="text-body font-trebuchet font-normal text-[#504B49] mb-4">
                It is our intention is to generate leaders whose mission is to
                advance humanity through fresh ideas, forefront skills, and
                compassion for future generations. We call them Leaders of a New
                Planet.
              </p>
              <Link
                href="#"
                className="flex flex-row justify-start items-center gap-2 text-link font-trebuchet font-normal text-[#B92322] opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden"
              >
                <p>Learn More</p>
                <Image
                  src="/assets/svg/next-red.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="w-full xl:flex-1 relative group">
              <Image
                src="/assets/images/about-innovations.png"
                alt="About Leaders"
                width={450}
                height={450}
                className="w-full aspect-[584/778] object-cover mb-5"
              />
              <h3 className="text-h3 font-tstarPro font-normal text-black mb-2">
                Continuous Innovations
              </h3>
              <p className="text-body font-trebuchet font-normal text-[#504B49] mb-4">
                In working with clients, we curate and provide integrated
                business and leadership solutions. Therefore, we strive to grow
                our digital solutions to better cater your needs.
              </p>
              <Link
                href="#"
                className="flex flex-row justify-start items-center gap-2 text-link font-trebuchet font-normal text-[#B92322] opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden"
              >
                <p>Learn More</p>
                <Image
                  src="/assets/svg/next-red.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumber;
