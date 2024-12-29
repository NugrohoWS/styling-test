"use client";

import Link from "next/link";
import Image from "next/image";

const AppFooter = () => {
  return (
    <footer className="bg-[#2F2A2A] relative">
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="absolute -top-7 right-[120px] bg-[#B92322] rounded-full w-14 h-14 flex items-center justify-center"
      >
        <Image
          src="/assets/svg/next-white.svg"
          alt="Close"
          width={28}
          height={28}
          className="-rotate-90"
        />
      </button>
      <div className="w-full px-[120px] pt-[50px] pb-14 flex flex-row justify-between items-start">
        <div className="flex flex-row items-start gap-6 mr-[72px]">
          <Image
            src="/assets/images/gptw.png"
            alt="GPTW"
            width={35}
            height={60}
          />
          <Image
            src="/assets/images/unwomen.png"
            alt="UN Women"
            width={152}
            height={50}
          />
          <Image
            src="/assets/images/iso-updated.png"
            alt="ISO"
            width={206}
            height={50}
          />
        </div>
        <div className="flex flex-row items-center gap-6 mr-[68px]">
          <Link href="#">
            <Image
              src="/assets/svg/socmed.svg"
              alt="Facebook"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/svg/socmed-1.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/svg/socmed-2.svg"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/svg/socmed-3.svg"
              alt="Youtube"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/svg/socmed-4.svg"
              alt="Twitter"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex flex-1 2xl:max-w-[400px] flex-col gap-2.5">
          <p className="text-h4 text-white font-tstarPro font-light">
            Subscribe. Join the Community.
          </p>
          <div className="flex flex-row items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="flex-1 h-[40px] px-4 py-2 bg-white text-body2 text-black font-trebuchet 2xl:max-w-[400px]"
            />
            <button className="w-10 h-10 bg-[#B92322] flex items-center justify-center">
              <Image
                src="/assets/svg/next-white.svg"
                alt="Arrow Right"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-white/40">
        <div className="w-full px-[120px] flex flex-row justify-between items-center py-6">
          <p className="text-body2 text-white font-trebuchet">
            Copyright © 2022 Daya Dimensi Indonesia. Website crafted by
            Antikode.
          </p>
          <div className="flex items-center gap-2.5">
            <Link
              href="#"
              className="text-body2 text-white font-tstarPro font-bold"
            >
              Privacy Policy
            </Link>
            <p className="text-body2 text-white font-tstarPro font-bold">|</p>
            <Link
              href="#"
              className="text-body2 text-white font-tstarPro font-bold"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
