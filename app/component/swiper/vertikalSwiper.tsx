"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const testimoniData = [
  {
    id: 1,
    image: require("@/app/assets/pak-hakim.svg"),
    nama: "Pak Hakim",
    alamat: "Petani Desa Jati, Pulau Sulawesi",
    desc: "Dulu saya kesulitan menentukan waktu terbaik untuk menyiram tanaman. Setelah bergabung dengan AgraRizz, saya diajari menggunakan aplikasi yang bisa memantau kebutuhan air tanaman secara otomatis. Hasilnya, tanaman saya tumbuh lebih subur, dan penggunaan air jadi lebih hemat!",
  },
  {
    id: 2,
    image: require("@/app/assets/pak-slamet.svg"),
    nama: "Pak Slamet",
    alamat: "Petani Desa Beringin, Pulau Kalimantan",
    desc: "Setelah mengikuti mentoring dari AgraRizz, saya belajar menggunakan sensor IoT untuk memantau kondisi tanah. Hasil panen saya meningkat drastis, dan sekarang saya bisa lebih efisien dalam mengelola lahan. Teknologi ini benar-benar mengubah cara saya bertani.",
  },
  {
    id: 3,
    image: require("@/app/assets/pak-widodo.svg"),
    nama: "Pak Widodo",
    alamat: "Petani Desa Sukajadi, Pulau Jawa",
    desc: "Sebelumnya, saya sulit memasarkan produk saya ke luar daerah. Dengan platform Agrarizz, saya sekarang bisa menjual hasil tani saya langsung ke konsumen tanpa perantara. Pendapatan saya meningkat, dan saya bisa menjangkau pasar yang lebih luas.",
  },
  {
    id: 4,
    image: require("@/app/assets/nurul.jpg"),

    nama: "Pak Nurul",
    alamat: "Petani Desa Rawawi, Pulau Papua",
    desc: "Berkat pelatihan dari AgraRizz, saya mulai menggunakan drone untuk pemetaan lahan. Ini sangat membantu dalam mengatur pola tanam dan memantau kesehatan tanaman dari jarak jauh. Pertanian jadi lebih mudah, dan saya bisa memaksimalkan produksi dengan teknologi modern",
  },
  // {
  //   id: 5,
  //   image: require("@/app/assets/susilo.jpg"),

  //   nama: "Pak Susilo",
  //   alamat: "Petani Desa Lembah Asri, Pulau Jawa",
  //   desc: "Sebagai petani tradisional, saya awalnya ragu menggunakan teknologi modern. Namun, setelah mengikuti pelatihan dari AgraRizz tentang penggunaan AI dalam prediksi cuaca dan kondisi tanah, saya melihat perbedaan besar dalam hasil panen. AgraRizz telah membuka mata saya akan potensi teknologi dalam pertanian.",
  // },
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
          <div className="card min-h-[16rem] w-full rounded-r-2xl rounded-bl-2xl bg-purewhite p-4 outline outline-1 outline-outline md:p-6 md:outline-2">
            <div>
              <h1 className="text-[18px] font-semibold tracking-wider md:mb-0 md:text-2xl md:tracking-normal">
                {testimoniData.nama}
              </h1>
              <span className="text-[14px] font-medium tracking-wider text-secondary md:text-lg">
                {testimoniData.alamat}
              </span>
              <p className="mt-2 text-[12px] md:mt-8 md:text-xl">
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
          <div className="card min-h-[16rem] w-full rounded-r-2xl rounded-bl-2xl bg-purewhite p-4 outline outline-1 outline-outline md:p-6 md:outline-2">
            <div>
              <h1 className="text-[18px] font-semibold tracking-wider md:mb-0 md:text-2xl md:tracking-normal">
                {testimoniData.nama}
              </h1>
              <span className="text-[14px] font-medium tracking-wider text-secondary md:text-lg">
                {testimoniData.alamat}
              </span>
              <p className="mt-2 text-[12px] md:mt-8 md:text-xl">
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
          spaceBetween={250}
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
          className="h-[45rem]"
          loop={true}
          direction="vertical"
          spaceBetween={200}
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
//   const SlideList = testimoniData.map((testimoniData) => (
//     <SwiperSlide className="listSwiper my" key={testimoniData.id}>
//       <div className="slides flex min-h-[10rem] gap-x-3 p-1 md:min-h-[15rem] md:gap-x-8">
//         <div className="left-side">
//           <div className="flex aspect-square w-20 justify-center rounded-full">
//             <Image
//               className="aspect-square overflow-clip rounded-full bg-center md:h-[4rem] md:w-[4rem]"
//               src={testimoniData.image}
//               width={0}
//               alt="Picture of the author"
//             />
//           </div>
//         </div>
//         <div className="card min-h-[16rem] w-full rounded-r-2xl rounded-bl-2xl bg-purewhite p-4 outline outline-1 outline-outline md:p-6 md:outline-2">
//           <div>
//             <h1 className="text-[18px] font-semibold tracking-wider md:mb-0 md:text-2xl md:tracking-normal">
//               {testimoniData.nama}
//             </h1>
//             <span className="text-[14px] font-medium tracking-wider text-secondary md:text-lg">
//               {testimoniData.alamat}
//             </span>
//             <p className="mt-2 text-[12px] md:mt-8 md:text-xl">
//               {testimoniData.desc}
//             </p>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>
//   ));
//   return (
//     <div>
//       {/* SWIPER FOR WINDOWS */}
//       <div className="hidden md:block">
//         <Swiper
//           className="-mt-4 h-[50rem]"
//           loop={true}
//           direction="vertical"
//           spaceBetween={250}
//           slidesPerView={3}
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           {SlideList}
//         </Swiper>
//       </div>
//       {/* SWIPER FO MOBILE */}
//       <div className="block md:hidden">
//         <Swiper
//           className="h-[45rem]"
//           loop={true}
//           direction="vertical"
//           spaceBetween={200}
//           slidesPerView={3}
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           {SlideList}
//         </Swiper>
//       </div>
//     </div>
//   );
// // }
