import Image from "next/image";
import Logo from "@/app/assets/nav-logo.png";
import Menu from "@/app/assets/menu-toggle.png";

export default function Navbar() {
  return (
    <div className="min-h-20 w-full bg-purewhite p-3 shadow-lg">
      <div className="flex justify-center md:justify-between md:px-20">
        <Image src={Logo} width={150} alt="Picture of the author" />
        <div className="hidden font-bold text-primary md:block">
          <div className="flex gap-4">
            <button className="rounded-2xl px-12 py-3 outline outline-primary">
              Sign-up
            </button>
            <button className="rounded-2xl bg-primary px-12 py-3 text-ourwhite outline outline-primary">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
