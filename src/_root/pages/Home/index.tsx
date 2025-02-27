import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react";
import { SlidingNumber } from "@/components/ui/sliding-number";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router";
import Sales from "@/components/shared/Sales";
import ProductCard from "@/components/shared/Productcard";
import { title } from "process";
import Music from "@/components/shared/Music";
import ExploreCard from "@/components/shared/ExploreProducts";

let data = [
  {
    id: 1,
    btn: "-40%",
    image: "../../../public/ProductCards/qiziljoystik.png",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    discount: "$160",
    star: 5,
    coments: "(88)",
  },
  {
    id: 2,
    btn: "-35%",
    image: "../../../public/ProductCards/klava.png",
    title: "AK-900 Wired Keyboard",
    price: "$960",
    discount: "$1160",
    star: 4,
    coments: "(75)",
  },
  {
    id: 3,
    btn: "-30%",
    image: "../../../public/ProductCards/monitor.png",
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    discount: "$400",
    star: 5,
    coments: "(99)",
  },
  {
    id: 4,
    btn: "-25%",
    image: "../../../public/ProductCards/stul.png",
    title: "S-Series Comfort Chair",
    price: "$375",
    discount: "$400",
    star: 4,
    coments: "(99)",
  },
];

let Browse = [
  {
    id: 1,
    title: "Phones",
    src: "../../../public/browse/tel.svg",
  },
  {
    id: 2,
    title: "Computers",
    src: "../../../public/browse/comp.svg",
  },
  {
    id: 3,
    title: "SmartWatch",
    src: "../../../public/browse/watch.svg",
  },
  {
    id: 4,
    title: "Camera",
    src: "../../../public/browse/camera.svg",
  },
  {
    id: 5,
    title: "HeadPhones",
    src: "../../../public/browse/naushni.svg",
  },
  {
    id: 6,
    title: "Gaming",
    src: "../../../public/browse/gaming.svg",
  },
  {
    id: 7,
    title: "Phones",
    src: "../../../public/browse/tel.svg",
  },
];

let data2 = [
  {
    id: 1,
    btn: "-29%",
    image: "../../../public/ProductCards/kurtka.png",
    title: "The north coat",
    price: "$250",
    discount: "$360",
    star: 5,
    coments: "(65)",
  },
  {
    id: 2,
    btn: "-35%",
    image: "../../../public/ProductCards/guccisumka.png",
    title: "Gucci duffle bag",
    price: "$960",
    discount: "$1160",
    star: 4,
    coments: "(65)",
  },
  {
    id: 3,
    btn: "-30%",
    image: "../../../public/ProductCards/deepcool.png",
    title: "RGB liquid CPU Cooler",
    price: "$160",
    discount: "$170",
    star: 5,
    coments: "(99)",
  },
  {
    id: 4,
    btn: "-25%",
    image: "../../../public/ProductCards/polka.png",
    title: "Small BookSelf",
    price: "$360",
    discount: "$400",
    star: 4,
    coments: "(99)",
  },
];
let expData = [
  {
    id: 1,
    isNew: false,
    image: "../../../public/ProductCards/ittioqati.png",
    title: "Breed Dry Dog Food",
    price: "$100",
    star: 5,
    coments: "(35)",
    indicators: false,
    indicatorColors: ["#EEFF61", "#DB4444"],
  },
  {
    id: 2,
    isNew: false,
    image: "../../../public/ProductCards/hdcamera.png",
    title: "CANON EOS DSLR Camera",
    price: "$360",
    star: 5,
    coments: "(95)",
    indicators: false,
    indicatorColors: ["#EEFF61", "#DB4444"],
  },
  {
    id: 3,
    isNew: false,
    image: "../../../public/ProductCards/asus.png",
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    star: 5,
    coments: "(325)",
    indicators: false,
    indicatorColors: ["#EEFF61", "#DB4444"],
  },
  {
    id: 4,
    isNew: false,
    image: "../../../public/ProductCards/crem.png",
    title: "Curology Product Set",
    price: "$500",
    star: 5,
    coments: "(145)",
    indicators: false,
    indicatorColors: ["#EEFF61", "#DB4444"],
  },
  {
    id: 5,
    isNew: true,
    image: "../../../public/ProductCards/minimerc.png",
    title: "Kids Electric Car",
    price: "$960",
    star: 5,
    coments: "(65)",
    indicators: true,
    indicatorColors: "#EEFF61",
  },
  {
    id: 6,
    isNew: false,
    image: "../../../public/ProductCards/adidasbotinka.png",
    title: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    star: 5,
    coments: "(35)",
    indicators: true,
    indicatorColors: "#EEFF61",
  },

  {
    id: 7,
    isNew: true,
    image: "../../../public/ProductCards/GP11.png",
    title: "GP11 Shooter USB Gamepad  ",
    price: "$660",
    star: 5,
    coments: "(55)",
    indicators: true,
    indicatorColors: "#EEFF61",
  },
  {
    id: 8,
    isNew: false,
    image: "../../../public/ProductCards/jaket.png",
    title: "Quilted Satin Jacket",
    price: "$660",
    star: 5,
    coments: "(55)",
    indicators: true,
    indicatorColors: "#EEFF61",
  },
];

function Home() {
  return (
    <>
      <main className="max-w-[1170px] mx-auto">
        <section className="flex gap-[45px] mb-[140px]">
          <ul className=" border-r box-content pr-4 pt-10 border-r-gray-300 w-[217px] flex flex-col gap-4">
            <Accordion type="single" className="w-[217px]" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Woman's Fashion</AccordionTrigger>
                <AccordionContent>
                  Womans fashion Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Reiciendis, quo?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="w-[217px]" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Men's Fashion</AccordionTrigger>
                <AccordionContent>
                  Men's Fashion Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Reiciendis, quo?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <li className="cursor-pointer hover:underline">Electronics</li>
            <li className="cursor-pointer hover:underline">Home & Lifestyle</li>
            <li className="cursor-pointer hover:underline">Medicine</li>
            <li className="cursor-pointer hover:underline">Sports & Outdoor</li>
            <li className="cursor-pointer hover:underline">Baby's & Toys</li>
            <li className="cursor-pointer hover:underline">Groceries & Pets</li>
            <li className="cursor-pointer hover:underline">Health & Beauty</li>
          </ul>
          <Carousel className="mt-10 max-w-[892px]">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card>
                      <CardContent className="bg-black max-w-[892px] h-[344px]">
                        <div className="flex justify-between">
                          <div className="pt-[58px] pl-[60px] pb-[47px] flex flex-col gap-5">
                            <div className="flex items-center gap-6">
                              <img
                                src="../../../public/carousel/olma.svg"
                                alt=""
                              />
                              <p className="text-white">iPhone 14 Series</p>
                            </div>
                            <p className="text-white max-w-[294px]  font-semibold text-5xl">
                              Up to 10% off Voucher
                            </p>
                            <div className="flex items-center gap-2">
                              <Link className="text-white underline" to={"/"}>
                                Shop Now
                              </Link>
                              <svg
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.5 8H18M18 8L11 1M18 8L11 15"
                                  stroke="#FAFAFA"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <img
                            src="../../../public/carousel/ayfon15.png"
                            alt=""
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </section>
        <Sales
          timer={true}
          title={"Flash Sales"}
          headline={"Today's"}
          buttons={true}
          right={false}
        />
        <section className="mb-[100px] flex gap-[30px]">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              havediscount={true}
              discount={item.btn}
              image={item.image}
              title={item.title}
              price={item.price}
              price2={item.discount}
              comments={item.coments}
            />
          ))}
        </section>
        <Sales
          timer={false}
          title="Browse By Category"
          headline="Categories"
          buttons={true}
          right={false}
        />
        <Carousel className="w-full pb-[70px] border-b border-b-gray-300 mb-[70px]">
          <CarouselContent className="-ml-1">
            {Browse.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-1 md:basis-1/4 lg:basis-1/6"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center transition-all justify-center p-6  hover:bg-[#DB4444] rounded-lg hover:text-white">
                      <div className="flex flex-col items-center gap-4">
                        <img
                          style={{
                            fill: "white",
                            stroke: "white",
                          }}
                          className="hover:text-white"
                          src={item.src}
                          alt=""
                        />
                        <p>{item.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Sales
          headline="This Month"
          title="Best Selling Products"
          timer={false}
          buttons={false}
          right={true}
        />
        <section className="mb-[100px] flex gap-[30px]">
          {data2.map((item) => (
            <ProductCard
              havediscount={false}
              key={item.id}
              discount={item.btn}
              image={item.image}
              title={item.title}
              price={item.price}
              price2={item.discount}
              comments={item.coments}
            />
          ))}
        </section>
        <Music />
        <Sales
          headline="Our Products"
          title="Explore Our Products"
          timer={false}
          buttons={true}
          right={false}
        />
        <div className="grid grid-cols-4 gap-[60px] mb-[140px]">
          {expData.map((item) => (
            <ExploreCard
              key={item.id}
              isNew={item.isNew}
              image={item.image}
              title={item.title}
              price={item.price}
              comments={item.coments}
              indicators={item.indicators}
            />
          ))}
        </div>
        <Sales
          timer={false}
          title="New Arrival"
          headline="Featured"
          buttons={false}
          right={false}
        />
      </main>
    </>
  );
}

export default Home;
