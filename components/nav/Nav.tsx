"use client";
import {
  CircleGauge,
  MapPin,
  Menu,
  PhoneCall,
  User,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const [opened, setOpened] = useState(false);
  const links = ["home", "about", "property", "price", "contact"];
  const links2 = [
    "home",
    "about",
    "property",
    "price",
    "contact",
    "search",
    "sign in / sign up",
  ];
  const [over, setOver] = useState(false);
  const pathname = usePathname()
  const [num, setNum] = useState(0)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNum(scrollY)
      if (scrollY > 200) {
        setOver(true);
      } else {
        setOver(false);
      }
    });
  }, [num]);

  return (
    <div
      className={`h-16 fixed shadow-md top-0 left-0 w-full border-b-2 duration-300 text-white z-[50000000] 
        ${
        pathname === '/'
          ? `${over ? "bg-[#010849] border-b-gray-300" : "bg-transparent border-transparent"}`
          : "bg-[#010849] border-gray-300"
      }`}
    >
      <div className="container4 relative z-[500000000] justify-between h-full flex items-center">
        <div className="flex gap-12 items-center">
          <Link href='/' className="flex items-center gap-2 cursor-pointer">
            <div className="md:hidden">
              <MapPin size={20} />
            </div>
            <div className="hidden md:block">
              <MapPin size={30} />
            </div>
            <p className="text-xl md:text-2xl font-semibold">Houzing</p>
          </Link>
          <div className="hidden lg:flex gap-10 text-13">
            {links.map((link, key) => (
              <p className="capitalize">{link}</p>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-7">
          <div className="flex font-semibold cursor-pointer items-center gap-2">
            <PhoneCall size={18} />
            <p>+2348140601946</p>
          </div>
          <User size={20} className="cursor-pointer" />
          <div className="flex font-semibold items-center gap-2 p-2 cursor-pointer rounded-full bg-white text-black">
            <CircleGauge size={18} />
            <p>Check Listing</p>
          </div>
        </div>
        {opened ? (
          <XIcon className="lg:hidden " onClick={() => setOpened(!opened)} />
        ) : (
          <Menu className="lg:hidden " onClick={() => setOpened(!opened)} />
        )}
      </div>
      <div
        className={`h-screen fixed w-full top-0 duration-300 gap-3 left-0 flex flex-col items-center pt-20 bg-black z-[5000] ${
          opened
            ? "visible opacity-100 backdrop-blur-3xl"
            : "invisible opacity-0 "
        }`}
      >
        {links2.map((link, key) => (
          <p
          onClick={() => setOpened(false)}
            className="capitalize font-semibold text-sm cursor-pointer"
            key={key}
          >
            {link}
          </p>
        ))}
      </div>





      
    </div>
  );
}
