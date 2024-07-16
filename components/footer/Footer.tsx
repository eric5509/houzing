"use client";
import { Linkedin, Facebook, Instagram, Twitter, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname()
  const links = [
    "Privacy",
    "Terms of Use",
    "Acceptable Use Policy",
    "Software Lifecycle Policy",
  ];
  const socials = [
    <Facebook size={15} />,
    <Instagram size={15} />,
    <Twitter size={15} />,
    <Linkedin size={15} />,
  ];
  const links2 = ["home", "about", "property", "price", "contact"];

  return (
    <div className={`bg-[#000000] mt-20 text-white pt-20 ${pathname === '/search' ? 'hidden' : 'flex'}`}>
      <div className="container flex border-white pb-10 text-center justify-center items-center flex-col">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="md:hidden">
            <MapPin size={28} />
          </div>
          <div className="hidden md:block">
            <MapPin size={35} />
          </div>
          <p className="text-3xl md:text-4xl font-bold">Houzing</p>
        </Link>
        <div className="w-full md:w-[600px] text-13 leading-loose mt-10">
          <p>
            Welcome to the world of Hautside, where style meets substance. As a
            leading online fashion destination, we curate a carefully selected
            collection of designer apparel, accessories, and footwear that
            embody the essence of contemporary haute couture.
          </p>
        </div>
        <div className="mt-5 flex gap-3 sm:gap-6 md:gap-8 lg:gap-10 text-sm">
          {links2.map((link, key) => (
            <p className="capitalize">{link}</p>
          ))}
        </div>
        <div className="flex gap-4 md:gap-7 my-7">
          {socials.map((social, key) => (
            <div
              key={key}
              className="h-8 w-8 rounded-full flex items-center justify-center border-2 text-white cursor-pointer hover:text-blue-600 hover:border-blue-600 duration-300 border-white"
            >
              {social}
            </div>
          ))}
        </div>

        <div className="flex text-xs flex-col md:flex-row gap-7">
          {links.map((link, key) => (
            <Link
              href={"/"}
              key={key}
              className="duration-300 hover:text-[red]"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
)}
