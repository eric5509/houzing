"use client";
import { loadBed } from "@/redux/features/FilterSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Rooms() {
  const numbers = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(100);
  const dispatch = useDispatch();
  const action = (key: number, num: number) => {
    if (active === num) {
      setActive(100);
    } else {
      setActive(num);
      dispatch(loadBed(num));
    }
  };

  return (
    <div>
      <p className="text-sm font-semibold mb-2 mt-3">Rooms</p>
      <div className="flex justify-between">
        {numbers.map((num, key) => (
          <div
            onClick={() => action(num, key)}
            key={key}
            className={`h-6 w-7 duration-300 active:scale-95 font-semibold cursor-pointer border-2 shadow rounded-sm grid place-content-center ${
              active === key
                ? "bg-emerald-400 shadow-gray-600 border-emerald-400 text-white"
                : "bg-white text-black border-black/60"
            }`}
          >
            <p>{num}<span>{key === 4 && "+" }</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
