import React from "react";
import Btn from "./Btn";
import Image from "next/image";
import girl from "@/public/images/girl2.jpg";
import group from "@/public/images/group.png";
import vector1 from "@/public/images/vector1.png";
import vector2 from "@/public/images/vector2.png";
import card from "@/public/images/card.png";
import shadow from "@/public/images/Shadow.png";
import { FaPagelines } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-3 md:gap-10 xl:gap-0 lg:justify-center xl:justify-between pt-28 lg:pt-10 pb-10">
      <div className="flex flex-col gap-3 md:gap-5 px-3 w-full md:w-[500px] mx-auto lg:mx-0">
        <h1 className="font-extrabold text-xl md:text-4xl lg:text-6xl text-gray-900">
          A special credit
          <br className="hidden lg:block"/> card made for
          <br className="hidden lg:block"/> Developers.
        </h1>
        <p className="text-gray-600">
          Crafting dynamic and responsive websites with a keen
          <br />
          eye for detail and a passion for cutting-edge technology.
        </p>

        <div className="h-14 w-full relative">
          <input
            type="text"
            className="w-full h-full border-gray-400 rounded-lg border-[1px] outline-none ps-2 text-lg pe-32 lg:pe-36"
            placeholder="Enter email address"
          />

          <Btn
            name="Get Free Card"
            styles="bg-gray-900 text-white rounded-lg font-semibold absolute right-1.5 bottom-1.5 top-1.5 text-xs md:text-sm"
          />
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center justify-center gap-1 md:gap-3">
            <p className="text-2xl md:text-4xl font-bold">2943</p>
            <p className="text-xs tracking-wide font-extrabold text-gray-600">
              Cards <br />
              Delivered
            </p>
          </div>
          <div>
            <FaPagelines size={30} className=" text-yellow-800 h-6 w-6 sm:h-14 sm:w-14" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <p className="text-2xl md:text-4xl font-bold">$1M+</p>
            <p className="text-xs tracking-wide font-extrabold text-gray-600">
              Transaction <br />
              Completed
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[450px] md:h-[550px] w-[100%] md:w-[500px]">
        <Image
          src={girl}
          alt="girl"
          fill
          placeholder="blur"
          className="object-cover object-center md:rounded-lg"
        />
        <Image
          src={group}
          alt="girl"
          width={90}
          height={50}
          placeholder="blur"
          className="hidden md:block object-cover object-center rounded-lg absolute z-10 -left-10 -top-10"
        />
        <Image
          src={vector2}
          alt="girl"
          width={50}
          height={50}
          placeholder="blur"
          className="object-cover object-center rounded-lg absolute z-10 -top-3 right-24"
        />
        <Image
          src={vector1}
          alt="girl"
          width={30}
          height={30}
          placeholder="blur"
          className="hidden md:block object-cover object-center rounded-lg absolute z-10 top-24 -right-3"
        />

        <div className="absolute bottom-0 right-0 left-0 h-[200px]">
          <div className="relative h-full w-full">
            <Image
              src={shadow}
              alt="girl"
              fill
              placeholder="blur"
              className=" rounded-lg object-cover object-center opacity-50"
            />
          </div>
        </div>

        <div className="absolute -bottom-4 md:bottom-2 left-1 z-20">
          <div className="relative h-[200px] w-[250px] sm:w-[300px]">
            <Image
              src={card}
              alt="girl"
              fill
              placeholder="blur"
              sizes="100vw"
              className="rounded-lg object-contain"
            />
            <p className="absolute bottom-12 left-4 md:bottom-10 backdrop-blur-3xl md:left-5 text-[10px] font-extrabold tracking-wider text-black/80 ">
              GEORGEWILL HOPE
            </p>
            <p className="absolute bottom-8 left-4 md:bottom-5 backdrop-blur-3xl md:left-5 text-[10px] font-extrabold tracking-wider text-black/80 ">
              <span className="text-yellow-800">JS</span> DEVELOPMENT INC
            </p>
            <div className="absolute backdrop-blur-3xl right-4 top-7 md:right-5 md:top-5 px-3">
              <p className="text-black/80 tracking-wider font-bold border-b-2 border-yellow-800">
                <span className="text-rose-500 -me-3 font-extrabold">/</span>
                GEORGEWILL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
