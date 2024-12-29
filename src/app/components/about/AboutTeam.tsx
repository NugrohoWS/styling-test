"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    title: "Family",
    description: "Introducing the DayaLima Family",
    href: "/about/family",
  },
  {
    title: "Board of Management",
    description: "Meet the Board of Management",
    href: "/about/management",
  },
  {
    title: "Partners",
    description: "Our Partners",
    href: "/about/partners",
  },
];

const AboutTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="relative w-full aspect-[1440/600] flex flex-col justify-end items-center">
      <Image
        src="/assets/images/about-cta.png"
        alt="About Team"
        fill
        className="w-full h-full object-cover"
      />
      <div className="w-full px-[120px] relative">
        <div className="w-full flex flex-row justify-end items-end gap-8 pb-16">
          {teams.map((team, index) => (
            <Link
              href={team.href}
              key={team.title}
              className={`w-full flex flex-col border-b pb-5 ${
                hoveredIndex === index ? "border-white" : "border-white/40"
              }`}
              style={{
                borderBottomWidth: hoveredIndex === index ? "2px" : "1px",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-h2 font-tstarPro font-light text-white">
                {team.title}
              </h2>
              <div
                style={{ height: hoveredIndex === index ? "78px" : "0px" }}
                className="overflow-hidden transition-all duration-300"
              >
                <p className="text-body font-trebuchet text-white/80 mb-6 mt-1.5">
                  {team.description}
                </p>
                <div className="text-link font-tstarPro text-white flex flex-row items-center gap-2 uppercase">
                  <p>Learn More</p>
                  <Image
                    src="/assets/svg/next-white.svg"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
