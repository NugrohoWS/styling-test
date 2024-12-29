"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const reviews = [
  {
    img: "/assets/images/kolaborasi.png",
    clientLogo: "/assets/images/kemdikbud.png",
    client: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
    review:
      "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
  },
  {
    img: "/assets/images/kolaborasi.png",
    clientLogo: "/assets/images/kemdikbud.png",
    client: "Client 2",
    review:
      "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
  },
  {
    img: "/assets/images/kolaborasi.png",
    clientLogo: "/assets/images/kemdikbud.png",
    client: "Client 3",
    review:
      "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
  },
  {
    img: "/assets/images/kolaborasi.png",
    clientLogo: "/assets/images/kemdikbud.png",
    client: "Client 4",
    review:
      "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
  },
  {
    img: "/assets/images/kolaborasi.png",
    clientLogo: "/assets/images/kemdikbud.png",
    client: "Client 5",
    review:
      "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
  },
];

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-0 right-0 flex flex-row z-10 w-full h-14 gap-16">
      <div className="w-1/2"></div>
      <div className="w-1/2 flex flex-row gap-8">
        <div className="flex-1 h-full relative">
          <div className="swiper-progressbar"></div>
        </div>
        <div className="inline-flex flex-row gap-5">
          <button
            onClick={() => swiper.slidePrev()}
            className="w-14 h-14 rounded-full flex items-center justify-center border border-white cursor-pointer"
          >
            <Image
              src="/assets/svg/chevron-white.svg"
              alt="arrow"
              width={28}
              height={28}
              className="rotate-180"
            />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="w-14 h-14 rounded-full flex items-center justify-center border border-white cursor-pointer"
          >
            <Image
              src="/assets/svg/chevron-white.svg"
              alt="arrow"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeReviews = () => {
  return (
    <section className="relative">
      <div className="w-full px-[120px] xl:py-20 relative z-10">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[EffectFade, Pagination]}
          pagination={{
            type: "progressbar",
            el: ".swiper-progressbar",
            renderProgressbar: function (progressbarFillClass) {
              return `<span class="${progressbarFillClass}"></span>`;
            },
          }}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex flex-row gap-16">
                <Image
                  src={review.img}
                  alt="review"
                  width={100}
                  height={100}
                  className="w-1/2"
                />
                <div className="w-1/2 flex flex-col">
                  <Image
                    src={review.clientLogo}
                    alt="client"
                    width={98}
                    height={72}
                    className="w-[98px] mb-5"
                  />
                  <p className="text-h4 font-tstarPro font-medium text-white mb-6">
                    "{review.review}"
                  </p>
                  <h3 className="text-h6 font-tstarPro text-white">
                    "{review.client}"
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNav />
        </Swiper>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-row">
        <div className="flex-1 h-full flex flex-col">
          <div className="w-full h-1/2 bg-[#F5F5F5]"></div>
        </div>
        <div className="w-[77.43%] h-full bg-[#B92322] overflow-hidden relative">
          <div className="w-[640px] aspect-square bg-[#600000] rounded-full absolute left-1/2 -translate-x-1/2 opacity-30 bottom-1/2"></div>
          <div className="w-[754px] aspect-square bg-[#600000] rounded-full absolute top-[18%] right-[-10%] opacity-30"></div>
          <div className="w-[754px] aspect-square bg-[#600000] rounded-full absolute top-[18%] left-[-10%] opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
