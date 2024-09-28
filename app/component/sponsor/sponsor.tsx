"use client";

import Image from "next/image";
import heart from "@/app/assets/heart.svg";

const sponsor = () => {
  const imageData = [
    {
      id: 1,
      image: require("@/app/assets/blu.svg"),
    },
    {
      id: 2,
      image: require("@/app/assets/shopee.svg"),
    },
    {
      id: 3,
      image: require("@/app/assets/flip.svg"),
    },
    {
      id: 4,
      image: require("@/app/assets/citi.svg"),
    },
    {
      id: 5,
      image: require("@/app/assets/bsi.svg"),
    },
    {
      id: 6,
      image: require("@/app/assets/cimb.svg"),
    },
    {
      id: 7,
      image: require("@/app/assets/miniso.svg"),
    },
    {
      id: 8,
      image: require("@/app/assets/astra.svg"),
    },
    {
      id: 9,
      image: require("@/app/assets/yuzu.svg"),
    },
    {
      id: 10,
      image: require("@/app/assets/xiaomi.svg"),
    },
  ];

  const imageList = imageData.map((imageData, index) => (
    <Image
      key={index}
      className="md:w-[12rem]"
      src={imageData.image}
      width={0}
      alt="Picture of the author"
    />
  ));

  return (
    <div className="mt-20 min-h-[50rem] px-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-ourgreen text-center text-3xl font-bold">
          Partner Kolaborasi Sukses
        </h1>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5">{imageList}</div>
        <p className="text-ourgray mt-5 text-center text-sm md:text-lg xl:w-[40%]">
          Lebih dari 20 partner telah berhasil berkolaborasi dengan kami,
          mendukung petani melalui teknologi pertanian modern. Bergabunglah
          dengan kami untuk bersama memajukan pertanian Indonesia.
        </p>
        <button className="bg-ourgreen mb-32 mt-10 flex items-center rounded-lg px-4 py-3 font-semibold text-ourwhite">
          <span className="me-3">Ayo Berkolaborasi Bersama Kami</span>
          <span>
            <Image
              className="w-6"
              src={heart}
              width={0}
              alt="Picture of the author"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default sponsor;
