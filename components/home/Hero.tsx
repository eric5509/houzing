"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const actions = ["buy", "rent", "sell"];
  const [active, setActive] = useState(0);
  return (
    <div className="h-screen text-white grid place-content-center text-center w-full bg-black">
      <img
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute top-0 left-0 h-full z-10 w-full "
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full bgblack z-20"></div>
      <div className="relative z-50">
        <p className="font-semibold">ITS GREAT TO BE HOME </p>
        <p className="text-4xl font-semibold mb-14 mt-3">
          Find Your Future Home
        </p>
        <div className="hidden md:flex items-center gap-4 justify-center text-center">
          {actions.map((item, key) => (
            <p
              key={key}
              onClick={() => setActive(key)}
              className={`font-semibold capitalize pb-1 text-sm cursor-pointer duration-300  border-b-2 ${
                active === key ? "border-white" : "border-transparent"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="hidden w-[700px] lg:w-[800px] border-[3px] border-orange-500 shadow-md shadow-gray-700 text-black md:grid grid-cols-[1fr_1fr_1fr_auto] px-3 py-1 bg-gray-200 rounded-full mt-5">
          <div className="rounded-full rounded-r-none pl-5 py-2">
            <p className="text-start mb-1 text-sm font-semibold">TYPE</p>
            <select className="bg-transparent cursor-pointer text-gray-600 w-full outline-none">
              <option value="">TYPE</option>
            </select>
          </div>
          <div className="rounded-full rounded-r-none pl-5 py-2">
            <p className="text-start mb-1 text-sm font-semibold">LOCATION</p>
            <select className="bg-transparent cursor-pointer text-gray-600 w-full outline-none">
              <option value="">Oslo, Norway</option>
            </select>
          </div>
          <div className="rounded-full rounded-r-none pl-5 py-2">
            <p className="text-start mb-1 text-sm font-semibold">SEARCH</p>
            <input
              className="bg-transparent text-sm pr-3 cursor-pointer text-gray-600 w-full outline-none"
              placeholder="Enter Keyword"
            />
          </div>
          <div className="grid place-content-center">
            <Link href={'/search'} className="flex items-center gap-2 p-3 h-12 rounded-full text-white bg-orange-500">
              <Search size={18} />
              <p className="text-sm font-semibold">SEARCH</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
