import Image from "next/image";
import Mentor from "@/app/assets/mentor-img.svg";
//SUMBER : https://www.freepik.com/free-photo/portrait-asian-farmer-man-woman-working-with-laptop-organic-vegetable-hydroponic-farm-hydroponic-salad-garden-owner-checking-quality-vegetable-greenhouse-plantation_22818195.htm#fromView=search&page=1&position=5&uuid=e33a7e0d-62f4-415a-9e2d-908f6e32b557
import Check from "@/app/assets/double-check.svg";
import Arrow from "@/app/assets/arrow.svg";
const fundedData = [
  { id: "1", title: "Self-Funded" },
  { id: "2", title: "Partial-Funded" },
  { id: "3", title: "Full-Funded" },
];
const mentor = () => {
  const fundedList = fundedData.map((fundedData) => (
    <span
      className="w-1/3 rounded-lg bg-lightgreen px-2 py-2 text-center text-[10px] font-bold text-ourgreen md:px-6 md:text-lg"
      key={fundedData.id}
    >
      {fundedData.title}
    </span>
  ));
  return (
    <div className="bg-mentor min-h-[40rem] w-full bg-lightgreen bg-opacity-15 px-10 py-28 md:flex md:px-16">
      <div className="flex flex-col items-center justify-start md:w-2/4 md:items-start">
        <div className="w-full md:w-[70%]">
          <Image
            className="md:w w-full"
            src={Mentor}
            width={0}
            alt="Picture of the author"
          />
          <div className="w-full">
            <div className="mx-4 flex gap-x-1 md:mx-9">{fundedList}</div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center md:w-2/4">
        <div className="min-h-[50%] md:px-10">
          <h1 className="text-left font-space-grotesk text-3xl text-ourgreen md:text-5xl">
            <span className="font-bold">Jadilah Mentor</span> untuk Masa Depan
            Pertanian Indonesia
          </h1>

          <p className="mt-8 text-sm md:text-lg">
            Di AgraRizz, kami mengundang para ahli untuk membantu petani
            Indonesia memanfaatkan teknologi pertanian 4.0. Sebagai mentor, Anda
            berperan penting dalam membawa perubahan nyata melalui edukasi dan
            bimbingan langsung.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-y-4 font-bold md:w-[70%] md:gap-x-10 md:gap-y-0 md:font-normal">
            <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
              <Image
                className="aspect-square md:w-[2rem]"
                src={Check}
                width={0}
                alt="Picture of the author"
              />
              <span>Sertifikat Penghargaan</span>
            </span>
            <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
              <Image
                className="aspect-square md:w-[2rem]"
                src={Check}
                width={0}
                alt="Picture of the author"
              />
              <span>Dukungan Pendanaan</span>
            </span>
            <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
              <Image
                className="aspect-square md:w-[2rem]"
                src={Check}
                width={0}
                alt="Picture of the author"
              />
              <span>Jaringan Profesional</span>
            </span>
            <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
              <Image
                className="aspect-square md:w-[2rem]"
                src={Check}
                width={0}
                alt="Picture of the author"
              />
              <span>Pengalaman Praktis</span>
            </span>
          </div>
          <button className="group mt-10 flex items-center gap-x-4 rounded-lg bg-secondary px-4 py-2 text-sm text-ourwhite md:text-lg">
            Mulai Menginspirasi Petani
            <span className="transition-all duration-200 ease-in group-hover:ps-4 md:group-hover:ps-6">
              <Image
                className="md:w w-4"
                src={Arrow}
                width={0}
                alt="Picture of the author"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default mentor;
