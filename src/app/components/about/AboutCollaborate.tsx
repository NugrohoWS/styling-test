import Image from "next/image";

const AboutCollaborate = () => {
  return (
    <section className="relative bg-[#F5F5F5]">
      <div className="w-full px-[120px] xl:pt-20 xl:pb-[100px]">
        <h2 className="text-h2 font-tstarPro font-light mb-20">
          Reasons to Collaborate
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col justify-start items-start pt-5 border-t border-[#E0E0E0]">
            <Image
              src="/assets/svg/learning-red.svg"
              alt="Ethical"
              width={64}
              height={64}
              className="mb-5"
            />
            <h3 className="text-h3 font-tstarPro font-light mb-2">Ethical</h3>
            <p className="text-body font-trebuchet font-normal text-[#504B49]">
              We maintain the confidentiality of our clients' data. We uphold
              our integrity by practicing zero-tolerance policy for bribery.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start pt-5 border-t border-[#E0E0E0]">
            <Image
              src="/assets/svg/skills.svg"
              alt="Reliable"
              width={64}
              height={64}
              className="mb-5"
            />
            <h3 className="text-h3 font-tstarPro font-light mb-2">Reliable</h3>
            <p className="text-body font-trebuchet font-normal text-[#504B49]">
              We strive to provide solutions that are supported by data and
              technology.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start pt-5 border-t border-[#E0E0E0]">
            <Image
              src="/assets/svg/compassion.svg"
              alt="Agile"
              width={64}
              height={64}
              className="mb-5"
            />
            <h3 className="text-h3 font-tstarPro font-light mb-2">Agile</h3>
            <p className="text-body font-trebuchet font-normal text-[#504B49]">
              We listen to our clients deliberately and deliver bespoke
              solutions to achieve excellent outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollaborate;
