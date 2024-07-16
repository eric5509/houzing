"use client";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Gallery() {
  const property = useSelector((store: RootState) => store.property);
  return (
    <div className="grid grid-cols-[1fr_150px] flex-1 gap-2">
      <div className="rounded relative h-full shadow-md overflow-hidden">
        <img
          src={property.image && property.image[0]}
          className="h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover"
          alt=""
        />
      </div>
      <div className="grid gap-2 grid-rows-2">
        <div className=" rounded relative shadow-md overflow-hidden">
          <img
            src={property.image && property.image[1]}
            className="h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover"
            alt=""
          />
        </div>

        <div className="relative rounded shadow-md overflow-hidden">
          <div className="absolute z-30 top-0 left-0 bg-black/50 h-full w-full grid place-content-center">
            <p className="text-2xl font-bold text-white">+22</p>
          </div>
          <img
            src={property.image && property.image[2]}
            className="h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
