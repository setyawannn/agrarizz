"use client";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "@/app/assets/nav-logo.png";

const Navbar = () => {
  const Links = [
    { id: 1, name: "About", link: "/" },
    { id: 2, name: "Event", link: "/" },
    { id: 3, name: "FAQ", link: "/" },
    { id: 4, name: "Contacts", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 z-10 min-h-20 w-full shadow-sm">
      <div className="items-center justify-between bg-white px-7 py-5 md:flex md:px-20">
        <div className="flex cursor-pointer items-center gap-1 text-2xl font-bold">
          <Image src={Logo} width={120} alt="Picture of the author" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer text-primary md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`absolute left-0 z-[-1] mt-4 w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:mt-0 md:flex md:w-fit md:items-center md:pb-0 md:pl-0 ${open ? "top-12" : "top-[-490px]"}`}
        >
          {Links.map((link) => (
            <li key={link.id} className="my-7 font-semibold md:my-0 md:ml-10">
              <a
                href={link.link}
                className="text-primary duration-500 hover:opacity-70"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex w-full gap-6 pr-6 md:hidden">
            <button className="w-full rounded-xl px-12 py-[10px] font-bold text-primary outline outline-primary">
              Sign-up
            </button>
            <button className="w-full rounded-xl bg-primary px-12 py-[10px] text-ourwhite outline outline-primary">
              Sign-up
            </button>
          </div>
        </ul>
        <div className="hidden gap-4 md:flex">
          <button className="rounded-xl px-12 py-[10px] font-bold text-primary outline outline-primary">
            Sign-up
          </button>
          <button className="rounded-xl bg-primary px-12 py-[10px] text-ourwhite outline outline-primary">
            Sign-up
          </button>
        </div>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
