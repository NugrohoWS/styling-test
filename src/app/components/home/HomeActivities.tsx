import Link from "next/link";
import Image from "next/image";

const activities = [
  {
    title: "Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout",
    tag: "Public Workshop",
    date: "25 Feb 2022",
  },
  {
    title: "Our New Solution To Hire The Right Person For Your Company",
    tag: "Buka Pintu",
    date: "20 Oct 2021",
  },
  {
    title: "DDI : Among Indonesia's First Signatories of UN WEP",
    tag: "Live Webinar",
    date: "20 Oct 2021",
  },
  {
    title: "Our New Solution To Hire The Right Person For Your Company",
    tag: "Buka Pintu",
    date: "20 Oct 2021",
  },
];

const HomeActivities = () => {
  return (
    <section className="xl:py-20">
      <div className="w-full px-[120px]">
        <div className="flex flex-row justify-between items-center xl:mb-10">
          <h2 className="text-h2 font-tstarPro font-light">
            Upcoming Activities
          </h2>
          <Link href="/activities" className="flex flex-row gap-2 items-start">
            <p className="text-link font-tstarPro text-[#B92322]">View All</p>
            <Image
              src="/assets/svg/next-red.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="flex flex-row justify-between items-start gap-16 border-t border-[#F2F2F2]">
          <div className="w-[481px] 2xl:w-[33.40vw] aspect-square relative">
            <Image
              src="/assets/images/upcoming-activities.png"
              alt="activities"
              fill
            />
          </div>
          <div className="flex-1 flex flex-col gap-10">
            {activities.map((activity, index) => (
              <Link
                key={index}
                href="#"
                className={`flex flex-row gap-10 w-full pt-6 border-t border-[#F2F2F2] ${
                  index === 0 && "border-none"
                }`}
              >
                <div className="w-1/5">
                  <p className="text-section font-trebuchet text-[#8B0B04] mb-2">
                    {activity.tag}
                  </p>
                  <p className="text-caption font-trebuchet text-black/40">
                    {activity.date}
                  </p>
                </div>
                <div className="flex-1 flex flex-row justify-between items-start">
                  <h4 className="text-h4 font-tstarPro font-medium xl:max-w-[378px]">
                    {activity.title}
                  </h4>
                  <Image
                    src="/assets/svg/next-red.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeActivities;
