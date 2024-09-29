import Video from "@/app/assets/video.svg";
import Image from "next/image";
import Swiper from "@/app/component/swiper/vertikalSwiper";

export default function Testimoni() {
  return (
    <div className="bg-testimoni h-full min-h-[50rem] w-full overflow-hidden bg-ourwhite p-10 md:min-h-[50rem] md:px-24 md:py-10">
      <div className="gap-x-5 md:flex lg:gap-x-[10rem] xl:gap-x-[20rem]">
        {/* LEFT SIDE */}
        <div className="flex min-h-[20rem] flex-col gap-y-10 md:block md:w-[40%] xl:w-1/2">
          {/* ISI LEFT SIDE */}
          <h1 className="text-center text-3xl font-bold md:my-10 md:text-left lg:text-5xl">
            Testimoni
          </h1>
          <div className="w-full rounded-3xl bg-primary p-6 pb-28 md:h-full md:rounded-b-none">
            <div className="flex justify-center">
              <Image
                className="w-full"
                src={Video}
                width={0}
                alt="Picture of the author"
              />
            </div>
            <div className="mt-16 text-center text-3xl font-normal text-ourwhite md:px-32 lg:text-3xl">
              <h1>Kilas Balik Mentoring di Desa Sukamaju</h1>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="z-0 mt-20 md:mt-0 md:w-[60%] xl:w-1/2">
          <Swiper></Swiper>
        </div>
      </div>
    </div>
  );
}
