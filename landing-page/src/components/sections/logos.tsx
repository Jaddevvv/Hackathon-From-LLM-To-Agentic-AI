import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "ebay",
    image: "ebay_PNG9-339848959.png",
    className: "h-10"
  },
  {
    name: "etsy",
    image: "Etsy-Logo-3577338453.png",
    className: "h-100"
  },
  {
    name: "rakuten",
    image: "Rakuten-logo-4071634441.png",
    customClass: "h-20"
  },
  {
    name: "vinted",
    image: "Vinted_(logo,_2022)-4243615128.png",
    className: "h-3"
  },
  {
    name: "leboncoin",
    image: "leboncoin-fr_BIG-4ed5bcda-2978202023.png",
    customClass: "h-10"
  }
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          WORKS ON ALL MARKETPLACES
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((company, idx) => (
              <div key={idx} className="mx-12 flex items-center justify-center">
                <Image
                  width={200}
                  height={50}
                  src={company.image}
                  className={`w-auto object-contain dark:brightness-0 dark:invert grayscale opacity-30 ${company.customClass || 'h-12'}`}
                  alt={company.name}
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
