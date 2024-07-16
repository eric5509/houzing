"use client";
import { loadGarage, loadPool, loadWifi } from "@/redux/features/FilterSlice";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function Others() {
  const datas = ["garage", "pool", "wifi"];
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useDispatch();
  const toggleSelected = (data: string) => {
    const isInArray = selected.filter((el) => el === data);
    if (isInArray.length === 1) {
      const newArray = selected.filter((el) => el !== data);
      setSelected(newArray);
    } else {
      setSelected([...selected, data]);
    }
  };

  useEffect(() => {
    if (selected.includes("garage")) {
      dispatch(loadGarage(true));
    } else {
      dispatch(loadGarage(false));
    }
    if (selected.includes("wifi")) {
      dispatch(loadWifi(true));
    } else {
      dispatch(loadWifi(false));
    }
    if (selected.includes("pool")) {
      dispatch(loadPool(true));
    } else {
      dispatch(loadPool(false));
    }
  }, [selected])
  return (
    <div className="mt-5">
      <p className="text-sm font-semibold mb-2">Additional Conveniences</p>
      <div className="space-y-2">
        {datas.map((data: string, key) => (
          <div
            onClick={() => toggleSelected(data)}
            className={`flex capitalize font-semibold items-center cursor-pointer gap-2`}
            key={key}
          >
            <div
              className={`h-4 w-4 shadow duration-300 active:scale-90 select-none rounded-sm border-2 grid cursor-pointer place-content-center text-white ${
                selected.includes(data) ? "bg-emerald-400 border-emerald-400" : "border-gray-500 bg-white"
              }`}
            >
              <BsCheck className="text-lg"/>
            </div>
            <p className="select-none vjjj">{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
