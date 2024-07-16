"use client";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(0);
  const links = ["overview", "monthly expense", "location"];
  return (
    <div className=" my-6 flex gap-3 items-center">
      {links.map((link, key) => (
        <p
          key={key}
          onClick={() => setActive(key)}
          className={`px-5 py-3 duration-300 active:scale-95 shadow-md cursor-pointer rounded-xl border-2 capitalize ${key === active ? 'border-emerald-500 text-emerald-500 font-semibold' : 'border-gray-300'}`}
        >
          {link}
        </p>
      ))}
    </div>
  );
}
