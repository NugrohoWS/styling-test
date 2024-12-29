import Image from "next/image";

const clients = [
  {
    name: "astra",
    image: "/assets/images/astrainternational.png",
  },
  {
    name: "blibli",
    image: "/assets/images/blibli.png",
  },
  {
    name: "bri",
    image: "/assets/images/bri.png",
  },
  {
    name: "ifg",
    image: "/assets/images/ifg.png",
  },
  {
    name: "kalbe",
    image: "/assets/images/kalbefarma.png",
  },
  {
    name: "kemendikbud",
    image: "/assets/images/kemdikbud.png",
  },
  {
    name: "mandiri",
    image: "/assets/images/mandiri.png",
  },
  {
    name: "mindid",
    image: "/assets/images/mindid.png",
  },
  {
    name: "pertamina",
    image: "/assets/images/pertamina.png",
  },
  {
    name: "pln",
    image: "/assets/images/pln.png",
  },
];

const AboutClient = () => {
  return (
    <section className="relative bg-[#2F2A2A]">
      <div className="w-full px-[120px] xl:py-20">
        <h2 className="text-h2 font-tstarPro font-light mb-10 text-white">
          Our Clients
        </h2>
        <div className="grid grid-cols-6 gap-8">
          {clients.map((client) => (
            <div key={client.name} className="w-full aspect-square relative">
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutClient;
