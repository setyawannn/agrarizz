import Image from "next/image";
import HeroImg from "@/app/assets/hero-img.png";
export default function Hero() {
  return (
    <div className="h-[80vh] w-full px-20 font-bold lg:flex">
      {/*START HERO BAGIAN KIRI */}
      <div className="flex w-1/2 flex-col justify-center">
        <h1 className="leading-tight lg:text-5xl">
          <span className="underline-offset-10 decoration-{#ECAB2E}-weight underline">
            Mentoring Petani
          </span>{" "}
          Untuk Mewujudkan Pertanian Berkelanjutan
        </h1>
        <div>
          <button className="mt-10 rounded-xl bg-secondary px-14 py-3 text-ourwhite">
            Bergabung Sekarang!
          </button>
        </div>
        {/*END HERO BAGIAN KIRI */}
      </div>
      <div className="item-end flex w-1/2 justify-end">
        <Image src={HeroImg} width={500} alt="Picture of the author" />
      </div>
    </div>
  );
}
