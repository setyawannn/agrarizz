"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const testimoniData = [
  {
    id: 1,
    image: require("@/app/assets/pak-hakim.svg"),
    // SUMBER : https://www.freepik.com/free-photo/asian-middle-aged-farmer-man-wearing-straw-hat-write-clipboard-rice-field-with-smile-keep-data_21517385.htm#fromView=search&page=1&position=13&uuid=e7327b2e-a1f7-4990-9533-c33e214f57b5
    nama: "Pak Hakim",
    alamat: "Petani Desa Jati, Pulau Sulawesi",
    desc: "Dulu saya kesulitan menentukan waktu terbaik untuk menyiram tanaman. Setelah bergabung dengan AgraRizz, saya diajari menggunakan aplikasi yang bisa memantau kebutuhan air tanaman secara otomatis. Hasilnya, tanaman saya tumbuh lebih subur, dan penggunaan air jadi lebih hemat!",
  },
  {
    id: 2,
    image: require("@/app/assets/pak-slamet.svg"),
    // SUMBER : https://malangkota.go.id/2021/06/18/asa-melukis-senja-di-balik-wajah-optimis-petani-perkotaan/
    nama: "Pak Slamet",
    alamat: "Petani Desa Beringin, Pulau Kalimantan",
    desc: "Setelah mengikuti mentoring dari AgraRizz, saya belajar menggunakan sensor IoT untuk memantau kondisi tanah. Hasil panen saya meningkat drastis, dan sekarang saya bisa lebih efisien dalam mengelola lahan. Teknologi ini benar-benar mengubah cara saya bertani.",
  },
  {
    id: 3,
    image: require("@/app/assets/pak-widodo.svg"),
    //SUMBER : https://mail.bakti.or.id/praktik-cerdas/kedaulatan-pangan-di-salassae
    nama: "Pak Widodo",
    alamat: "Petani Desa Sukajadi, Pulau Jawa",
    desc: "Sebelumnya, saya sulit memasarkan produk saya ke luar daerah. Dengan platform Agrarizz, saya sekarang bisa menjual hasil tani saya langsung ke konsumen tanpa perantara. Pendapatan saya meningkat, dan saya bisa menjangkau pasar yang lebih luas.",
  },
  {
    id: 4,
    image: require("@/app/assets/nurul.jpg"),
    //SUMBER : https://koran.tempo.co/read/profil/467092/duta-petani-milenial-dari-sumatera-utara-mendirikan-start-up-pertanian
    nama: "Pak Nurul",
    alamat: "Petani Desa Rawawi, Pulau Papua",
    desc: "Berkat pelatihan dari AgraRizz, saya mulai menggunakan drone untuk pemetaan lahan. Ini sangat membantu dalam mengatur pola tanam dan memantau kesehatan tanaman dari jarak jauh. Pertanian jadi lebih mudah, dan saya bisa memaksimalkan produksi dengan teknologi modern",
  },
];

const Slider = () => {
  const SlideList = testimoniData.map((testimoniData) => (
    <SwiperSlide className="listSwiper my" key={testimoniData.id}>
      {testimoniData.id % 2 === 0 ? (
        // CARD UNTUK ID GENAP
        <div className="slides flex min-h-[10rem] flex-row-reverse p-1 md:min-h-[15rem]">
          <div className="left-side ms-6 md:ms-10">
            <div className="flex aspect-square w-10 justify-center rounded-full md:w-20">
              <Image
                className="aspect-square overflow-clip rounded-full bg-center md:h-[4rem] md:w-[4rem]"
                src={testimoniData.image}
                width={0}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="card min-h-[10rem] w-full rounded-r-2xl rounded-bl-2xl bg-purewhite p-4 outline outline-1 outline-outline md:p-6 md:outline-2 lg:min-w-[30rem]">
            <div>
              <h1 className="text-[14px] font-semibold tracking-wider md:mb-0 md:text-2xl md:tracking-normal">
                {testimoniData.nama}
              </h1>
              <span className="text-[10px] font-medium tracking-wider text-secondary md:text-lg">
                {testimoniData.alamat}
              </span>
              <p className="mt-2 text-[8px] font-semibold md:mt-8 md:text-xl">
                {testimoniData.desc}
              </p>
            </div>
          </div>
        </div>
      ) : (
        // UNTUK CARD YANG ID NYA GANJIL
        <div className="slides flex min-h-[10rem] p-1 md:min-h-[15rem]">
          <div className="left-side me-2 md:me-10">
            <div className="flex aspect-square w-20 justify-center rounded-full">
              <Image
                className="aspect-square overflow-clip rounded-full bg-center md:h-[4rem] md:w-[4rem]"
                src={testimoniData.image}
                width={0}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="card min-h-[10rem] w-full rounded-r-2xl rounded-bl-2xl bg-purewhite p-4 outline outline-1 outline-outline md:p-6 md:outline-2">
            <div>
              <h1 className="text-[14px] font-semibold tracking-wider md:mb-0 md:text-2xl md:tracking-normal">
                {testimoniData.nama}
              </h1>
              <span className="text-[10px] font-medium tracking-wider text-secondary md:text-lg">
                {testimoniData.alamat}
              </span>
              <p className="mt-2 text-[8px] font-semibold md:mt-8 md:text-xl">
                {testimoniData.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </SwiperSlide>
  ));
  return (
    <div>
      {/* SWIPER FOR WINDOWS */}
      <div className="hidden md:block">
        <Swiper
          className="-mt-4 h-[50rem]"
          loop={true}
          direction="vertical"
          spaceBetween={300}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {SlideList}
        </Swiper>
      </div>
      {/* SWIPER FO MOBILE */}
      <div className="block md:hidden">
        <Swiper
          className="h-[40rem]"
          loop={true}
          direction="vertical"
          spaceBetween={75}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {SlideList}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
