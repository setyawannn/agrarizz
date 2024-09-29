import Image from "next/image";
import Drone from "@/app/assets/Drone.svg";

export default function About() {
  return (
    <div className="mt-10 min-h-[60rem] w-full md:min-h-fit md:px-10">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="lg:px-8 xl:px-20">
          <Image
            className="-mt-1 aspect-square md:w-[18rem] lg:w-[20rem] xl:w-[36rem]"
            src={Drone}
            width={0}
            alt="Picture of the author"
          />
        </div>
        <div className="-mt-6 flex w-full flex-col items-center px-10 md:w-1/2 md:items-start">
          <h1 className="text-3xl font-bold md:text-lg lg:text-xl xl:text-5xl">
            Tentang Kami
          </h1>
          <div className="text-sm md:text-[14px] lg:text-sm xl:text-lg">
            <p className="mt-6 text-justify">
              AgraRizz adalah platform yang berfokus pada pemberdayaan petani
              Indonesia melalui penerapan teknologi pertanian 4.0. Kami
              menghubungkan para petani dengan mentor berpengalaman yang siap
              berbagi pengetahuan tentang inovasi teknologi seperti Internet of
              Things (IoT), otomatisasi, dan analitik data untuk meningkatkan
              produktivitas dan keberlanjutan pertanian.
            </p>
            <p className="mt-6 text-justify">
              {" "}
              Melalui AgraRizz, petani belajar bagaimana memanfaatkan teknologi
              canggih untuk mengelola lahan mereka dengan lebih efisien,
              meningkatkan hasil panen, dan mengurangi biaya operasional. Para
              mentor kami, yang berasal dari kalangan profesional dan akademisi,
              memberikan edukasi langsung melalui sesi mentoring, baik secara
              offline maupun melalui platform kami.
            </p>
            <p className="mt-6">
              <span className="font-bold">Visi kami:</span> menghadirkan
              pertanian masa depan yang lebih maju dengan teknologi 4.0, di mana
              petani tidak hanya bertahan, tetapi tumbuh dan berkembang dengan
              kekuatan inovasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
