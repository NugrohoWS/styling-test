import Image from "next/image";
import Link from "next/link";

const expertise = [
  {
    title: "Applied Science & Imagination Centre",
    icon: "/assets/svg/learning-white.svg",
    img: "/assets/images/expertise-img.jpg",
  },
  {
    title: "Diagnostics and Assessments",
    icon: "/assets/svg/diagnostic-white.svg",
    img: "/assets/images/expertise-img.jpg",
  },
  {
    title: "Human Resources & Organizational Transformation",
    icon: "/assets/svg/transformation-white.svg",
    img: "/assets/images/expertise-img.jpg",
  },
  {
    title: "Klobility",
    icon: "/assets/svg/klobility-white.svg",
    img: "/assets/images/expertise-img.jpg",
  },
  {
    title: "Leadership Development",
    icon: "/assets/svg/executive-white.svg",
    img: "/assets/images/expertise-img.jpg",
  },
  {
    title: "On-Demand Online Learning",
    icon: "/assets/svg/learning-white.svg",
    img: "/assets/images/expertise-img.jpg",
  },
];

const HomeExpertise = () => {
  return (
    <section className="bg-[#F5F5F5] pb-10">
      <div className="w-full px-[120px] xl:py-20">
        <div className="xl:w-[60%] xl:mb-14">
          <h2 className="text-h2 font-tstarPro font-normal text-black mb-2">
            Expertise
          </h2>
          <p className="text-body font-trebuchet text-[#504B49]">
            "Organisations who will succeed in the long-run are those who are
            open to new ideas, embrace innovations, instill compassion in every
            act and decision, and consistent in advancing humanity through
            sustainability." - Excerpts from 'Leaders of a New Planet' book.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 xl:gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="w-full aspect-square bg-[#8B0B04] relative"
            >
              <Link
                href="#"
                className="w-full h-full flex flex-col items-start justify-start gap-5 xl:py-8 xl:px-6 group"
              >
                <div className="home-expertise-shadow w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-full h-full bg-black/40 absolute top-0 left-0"></div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-all duration-300 overflow-hidden">
                  <div className="w-full h-full bg-[#600000] rounded-full absolute bottom-[26%] left-[12%] opacity-30 scale-105"></div>
                  <div className="w-full h-full bg-[#600000] rounded-full absolute top-[48%] right-[12%] opacity-30 scale-125"></div>
                </div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="relative z-10"
                />
                <h3 className="text-h3 font-tstarPro font-light text-white relative z-10">
                  {item.title}
                </h3>
                <Image
                  src="/assets/svg/next-white.svg"
                  alt="arrow-right"
                  width={40}
                  height={40}
                  className="relative z-10 mt-auto self-end"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeExpertise;
