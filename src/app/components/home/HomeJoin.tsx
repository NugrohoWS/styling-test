import Image from "next/image";
import Link from "next/link";

const HomeJoin = () => {
  return (
    <section className="relative w-full aspect-[1440/600] flex flex-col justify-center items-center">
      <Image
        src="/assets/images/home-cta-bg.png"
        alt="join us"
        fill
        className="object-cover"
      />
      <div className="absolute top-0 left-0 w-[62.5%] h-full home-join-gradient"></div>
      <div className="w-full px-[120px]">
        <div className="relative xl:max-w-[481px]">
          <h2 className="text-h2 font-tstarPro font-light text-white mb-2">
            Be a Part of Daya Dimensi Indonesia
          </h2>
          <p className="text-body font-trebuchet text-white/80 mb-10">
            Are you the resilient leaders we are searching for? Join Daya
            Dimensi Indonesia to advance your leadership skill and generate
            exceptional leaders across Indonesia at once.
          </p>
          <Link
            href="#"
            className="text-link font-tstarPro text-white flex flex-row items-center gap-2 uppercase"
          >
            <p>Learn More</p>
            <Image
              src="/assets/svg/next-white.svg"
              alt="Arrow Right"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeJoin;
