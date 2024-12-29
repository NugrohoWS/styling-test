"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Program", href: "/program" },
  { name: "Odyssey", href: "/odyssey" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/career" },
];

const AppHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled && "backdrop-blur-xl"
      }`}
    >
      <div className="w-full px-[120px]">
        <div className="w-full h-20 flex items-center justify-between">
          <div>
            <Image
              src="/assets/images/dadi-whitecut@2x.png"
              alt="Daya Dimensi Indonesia"
              width={160}
              height={50}
              priority
            />
          </div>
          <nav className="flex items-center gap-10">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-h6 font-tstarPro flex flex-col items-center gap-1 hover:opacity-100 ${
                  pathname === item.href
                    ? "font-bold opacity-100"
                    : "opacity-80"
                } ${pathname === "/" ? "text-white" : "text-black"}`}
              >
                <p>{item.name}</p>
                <div
                  className={`w-[6px] h-[6px] bg-red-500 rounded-full ${
                    pathname === item.href ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
