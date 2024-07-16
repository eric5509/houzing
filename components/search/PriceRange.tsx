"use client";

import { loadMax, loadMin } from "@/redux/features/FilterSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function PriceRange() {
  const dispatch = useDispatch();
  const [inputMax, setInputMax] = useState("");
  const [validMax, setValidMax] = useState(false);
  const [inputMin, setInputMin] = useState("");
  const [validMin, setValidMin] = useState(false);
  const maxAction = (e: any) => {
    dispatch(loadMax(e.target.value));
    setInputMax(e.target.value);
  };
  const minAction = (e: any) => {
    dispatch(loadMin(e.target.value));
    setInputMin(e.target.value);
  };

  useEffect(() => {
    if (inputMax.trim()) {
      setValidMax(true);
    } else {
      setValidMax(false);
    }
  }, [inputMax]);

  useEffect(() => {
    if (inputMin.trim()) {
      setValidMin(true);
    } else {
      setValidMin(false);
    }
  }, [inputMin]);

  return (
    <div className="w-full">
      <p className="text-sm font-semibold mb-1 mt-4">Price Range</p>
      <div className="grid mt-1 grid-cols-2 gap-3">
        <div className="">
          <p className="mb-1 font-semibold">Min Price</p>
          <div
            className={`h-9 border-2 overflow-hidden ${
              validMin ? "border-emerald-400" : " border-gray-500"
            } shadow rounded`}
          >
            <input
              value={inputMin}
              type="text"
              onChange={minAction}
              className="h-full w-full pl-2 outline-none"
              placeholder="$25,000"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-1 font-semibold">Max Price</p>
          <div
            className={`h-9 border-2 overflow-hidden ${
              validMax ? "border-emerald-400" : " border-gray-500"
            } shadow rounded`}
          >
            <input
              onChange={maxAction}
              value={inputMax}
              type="text"
              className="h-full w-full pl-2 outline-none"
              placeholder="$100,000,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
