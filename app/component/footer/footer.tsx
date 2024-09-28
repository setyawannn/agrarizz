import Image from "next/image";
import Logo from "@/app/assets/nav-logo.png";

const footer = () => {
  const Links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/" },
    { id: 3, name: "Event", link: "/" },
    { id: 4, name: "FAQ", link: "/" },
    { id: 5, name: "Contacts", link: "/" },
  ];

  const sosialData = [
    { id: 1, image: "/assets/facebook-logo.svg" },
    { id: 2, image: "/assets/Twitter-logo.svg" },
    { id: 3, image: "/assets/linkedin-logo.svg" },
    { id: 4, image: "/assets/instagram-logo.png" },
  ];

  return (
    <div>
      <div className="mt-10 flex min-h-[20rem] w-full flex-col items-center bg-[#F5E9D1]">
        <div className="mt-16 min-w-32">
          <Image
            className="md:w-44"
            src={Logo}
            width={0}
            alt="Picture of the author"
          />
        </div>
        <div className="mt-10 flex w-[60%] flex-wrap justify-center gap-x-10 gap-y-4 font-bold text-secondary md:gap-x-24 md:text-xl">
          {Links.map((link) => (
            <div className="" key={link.id}>
              <a href={link.link}>{link.name}</a>
            </div>
          ))}
        </div>
        <p className="mt-5 px-10 text-justify text-sm font-normal text-[#121212] md:w-[60%] md:text-center md:text-lg">
          Terima kasih telah mengunjungi AgraRizz. Kami berkomitmen untuk
          memajukan pertanian Indonesia melalui teknologi dan kolaborasi yang
          inovatif. Untuk informasi lebih lanjut, hubungi kami atau ikuti kami
          di media sosial untuk update terkini. Bersama, kita ciptakan masa
          depan pertanian yang lebih baik.
        </p>
        <div className="my-10 flex items-center justify-center gap-x-10">
          {sosialData.map((sosial) => (
            <div key={sosial.id}>
              <Image
                className="aspect-square md:w-6"
                src={sosial.image}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default footer;
