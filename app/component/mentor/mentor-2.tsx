import Image from "next/image";
import Mentor2 from "@/app/assets/mentor-img-2.svg";
import Check from "@/app/assets/double-check.svg";
import Arrow from "@/app/assets/arrow.svg";

const mentor2 = () => {
  return (
    <div>
      <div className="min-h-[40rem] w-full bg-secondary bg-opacity-5 px-10 py-28 md:flex md:flex-row-reverse md:px-16">
        <div className="flex flex-col items-center justify-start md:w-2/4 md:items-end">
          <div className="w-full md:w-[70%]">
            <Image
              className="w-full"
              src={Mentor2}
              width={0}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center md:w-2/4">
          <div className="min-h-[50%] md:px-10">
            <h1 className="text-left text-3xl text-ourgreen md:text-5xl">
              <span className="font-bold">
                Bergabung dengan Komunitas Petani AgraRizz
              </span>
            </h1>

            <p className="mt-8 text-sm md:text-lg">
              Kami di Agrarizz terus mencari petani-petani potensial yang siap
              berkembang dengan memanfaatkan teknologi 4.0. Jika Anda adalah
              petani yang ingin meningkatkan hasil panen, mengelola lahan dengan
              lebih efektif, dan mendapatkan bimbingan langsung dari mentor
              ahli, inilah kesempatan Anda untuk bergabung dengan komunitas
              kami.
            </p>
            <div className="mt-10 grid w-full grid-cols-2 gap-y-4 font-bold md:w-[100%] md:gap-x-16 md:gap-y-0 md:font-normal">
              <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
                <Image
                  className="aspect-square md:w-[2rem]"
                  src={Check}
                  width={0}
                  alt="Picture of the author"
                />
                <span>Prioritas Mentoring</span>
              </span>
              <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
                <Image
                  className="aspect-square md:w-[2rem]"
                  src={Check}
                  width={0}
                  alt="Picture of the author"
                />
                <span>Forum Diskusi</span>
              </span>
              <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
                <Image
                  className="aspect-square md:w-[2rem]"
                  src={Check}
                  width={0}
                  alt="Picture of the author"
                />
                <span>Akses ke Teknologi Pertanian 4.0</span>
              </span>
              <span className="flex items-center gap-x-1 text-[10px] md:gap-x-3 md:text-lg">
                <Image
                  className="aspect-square md:w-[2rem]"
                  src={Check}
                  width={0}
                  alt="Picture of the author"
                />
                <span>Jaringan Komunitas</span>
              </span>
            </div>
            <button className="group mt-10 flex items-center gap-x-4 rounded-lg bg-secondary px-4 py-2 text-sm text-ourwhite md:text-lg">
              Masuk ke Komunitas Petani{" "}
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
    </div>
  );
};

export default mentor2;
