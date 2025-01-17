import Image from "next/image";
import HeroImg from "@/app/assets/hero-img.png";
//  SUMBER  : https://www.freepik.com/free-photo/smiley-agronomist-looking-camera_5142856.htm#fromView=search&page=1&position=8&uuid=678eacee-80a4-45a0-98ec-bafeb34b7569
export default function Hero() {
  return (
    <div className="md:mt-30 mt-40">
      {/*START HERO BAGIAN KIRI */}
      <div className="mt-14 flex w-full flex-col items-center font-bold md:mt-0 md:flex-row md:px-20">
        <div className="w-full justify-center md:flex md:w-1/2 md:flex-col">
          <h1 className="w-full text-center font-space-grotesk text-3xl leading-tight md:text-left lg:text-4xl xl:text-6xl">
            <span className="underline-offset-10 decoration-{#ECAB2E}-weight underline">
              Mentoring Petani
            </span>{" "}
            Untuk Mewujudkan Pertanian Berkelanjutan
          </h1>
          <div className="mt-10 flex justify-center md:justify-normal">
            <button className="rounded-xl bg-secondary px-8 py-3 text-sm text-ourwhite md:px-14 xl:px-10 xl:py-5 xl:text-xl">
              Bergabung Sekarang!
            </button>
          </div>
          {/*END HERO BAGIAN KIRI */}
        </div>
        {/* START HERO BAGIAN */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <Image
            className="-ms-24 w-[30rem] sm:w-[20rem] lg:w-[25rem] xl:w-[35rem]"
            src={HeroImg}
            width={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
