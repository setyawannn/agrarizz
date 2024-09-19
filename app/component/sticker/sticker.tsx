import Image from "next/image";
import UsersThree from "@/app/assets/UsersThree.svg";
import Toga from "@/app/assets/Toga.svg";
import Hat from "@/app/assets/Hat.svg";

export default function Sticker() {
  return (
    <div className="flex min-h-36 w-full flex-col items-center justify-center gap-y-10 bg-[#F5E9D1] bg-opacity-30 py-10 md:mt-10 md:flex-row md:gap-x-[4rem] xl:gap-x-[18rem]">
      <div className="flex h-fit min-w-[14rem] gap-4">
        <Image
          className="-mt-1 aspect-square w-16"
          src={UsersThree}
          width={0}
          alt="Picture of the author"
        />
        <div className="">
          <h1 className="text-2xl font-bold">27 Juta</h1>
          <span className="">Petani di Indonesia</span>
        </div>
      </div>
      <div className="flex h-fit gap-4">
        <Image
          className="-mt-1 aspect-square w-16"
          src={Toga}
          width={0}
          alt="Picture of the author"
        />
        <div className="">
          <h1 className="text-2xl font-bold">80 %</h1>
          <span className="">Berpendidikan Rendah</span>
        </div>
      </div>
      <div className="flex h-fit gap-4">
        <Image
          className="-mt-1 h-14 w-14"
          src={Hat}
          width={0}
          alt="Picture of the author"
        />
        <div className="">
          <h1 className="text-2xl font-bold">72 Ribu</h1>
          <span className="">Penyuluh petani</span>
        </div>
      </div>
    </div>
  );
}
