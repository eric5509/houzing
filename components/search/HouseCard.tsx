"use client";
import { loadProperty } from "@/redux/features/PropertySlice";
import { Bath, BedSingle, Heart, LandPlot } from "lucide-react";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";

type Props = {
  active: number;
  index: number;
  property: {
    title: string;
    address: string;
    location: string;
    price: number;
    type: string;
    pool?: boolean;
    wifi?: boolean;
    garage?: boolean;
    additionalConveniences: string[];
    bed: number;
    bath: number;
    details?: string;
    sqm: number;
    image: string[];
  };
};

export default function HouseCard({ property, index, active }: Props) {
  const dispatch = useDispatch();
  const loadNewProperty = () => {
    console.log(index);
    dispatch(loadProperty(property));
  };
  return (
    <div
      onClick={loadNewProperty}
      className={`flex items-center relative flex-col gap-2 sm:flex-row border-2 border-transparent cursor-pointer hover:border-emerald-500 duration-300 rounded bg-white shadow-md w-full p-2 gap-2 ${
        index === active ? "border-emerald-600" : "border-transparent"
      }`}
    >
      <Link href={'/'} className="h-full w-full md:hidden absolute top-0 left-0 bg-transparent"></Link>
      <div className="h-48 sm:h-32 w-full sm:w-44">
        <img
          src={`${property.image[0]}`}
          className="w-full rounded h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full md:w-60 flex flex-col gap-3 justify-between p-2">
        <div className="flex justify-between gap-3">
          <div className="">
            <p className="font-semibold">{property.title}</p>
            <p className="text-xs text-gray-700">{property.address}</p>
          </div>
          <div className="h-7 w-7 hidden lg:grid shrink-0 shadow-md rounded-sm bg-gray-100  place-content-center">
            {index === 1 ? (
              <BsFillHeartFill
                size={17}
                className={`red`}
              />
            ) : (
              <BsHeart className="text-lg"/>
            )}
          </div>
        </div>
        <p className="font-semibold">${property.price.toLocaleString()}</p>
        <div className="flex justify-between text-xs">
          <div className="flex gap-1 items-center">
            <BedSingle size={18} />
            <p>{property.bed}</p>
          </div>
          <div className="flex gap-1 items-center">
            <Bath size={18} />
            <p>{property.bath}</p>
          </div>
          <div className="flex gap-1 items-center">
            <LandPlot size={18} />
            <p>
              {property.sqm} m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
