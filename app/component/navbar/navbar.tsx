import Image from "next/image";
import Logo from "@/app/assets/nav-logo.png";

export default function Navbar() {
  return (
    <div className="text-ourblack bg-purewhite flex w-full items-center justify-between px-20 font-bold drop-shadow-lg lg:h-20">
      <div className="">
        <Image src={Logo} width={154} alt="Picture of the author" />
      </div>
      <div className="flex gap-4">
        <button className="outline-ourblack rounded-xl px-14 py-3 outline">
          Sign up
        </button>
        <button className="outline-primary bg-primary text-ourwhite rounded-xl px-14 py-3 outline">
          Login
        </button>
      </div>
    </div>
  );
}
