"use client";
import { loadType } from "@/redux/features/FilterSlice";
import { DoorOpen, House, LandPlot, Luggage } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PropertyType() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(100);

  const Action = (key: number, title: string) => {
    if (key === active) {
      dispatch(loadType(""));
      setActive(100);
    } else {
      setActive(key);
      dispatch(loadType(title.toLowerCase()));
    }
  };

  const datas = [
    {
      title: "House",
      icon: <House size={18} />,
    },
    {
      title: "Apartment",
      icon: <DoorOpen size={18} />,
    },
    {
      title: "Commercial",
      icon: <Luggage size={18} />,
    },
    {
      title: "Land Plot",
      icon: <LandPlot size={18} />,
    },
  ];
  return (
    <div className="">
      <p className="text-sm font-semibold mb-2">Property Type</p>
      <div className="grid gap-2 grid-cols-2 h-fit w-full">
        {datas.map((data, key) => (
          <div
            onClick={() => Action(key, data.title)}
            key={key}
            className={`h-14 border-2 cursor-pointer duration-500 shadow-md rounded active:scale-95 flex flex-col gap-1 items-center justify-center text-center ${
              key === active
                ? "bg-emerald-400 border-emerald-400 shadow-gray-500 text-white"
                : "bg-white border-gray-500 text-black"
            }`}
          >
            {data.icon}
            <p className="font-semibold text-11">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
