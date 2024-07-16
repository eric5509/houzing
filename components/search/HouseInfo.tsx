"use client";
import { TProperty } from "@/redux/features/PropertySlice";
import { RootState } from "@/redux/store/store";
import {
  Bath,
  BedSingle,
  CarFront,
  Droplet,
  LandPlot,
  Signal,
  Wifi,
} from "lucide-react";
import { useSelector } from "react-redux";

export default function HouseInfo() {
  const property = useSelector((store: RootState) => store.property);

  return (
    <div className="flex my-2 justify-between">
      {property?.bed && (
        <div className="flex items-center gap-1 font-semibold">
          <BedSingle size={18} />
          <p>{property.bed}</p>
        </div>
      )}
      {property?.bath && (
        <div className="flex items-center gap-1 font-semibold">
          <Bath size={18} />
          <p>{property.bath}</p>
        </div>
      )}
      {property?.sqm && (
        <div className="flex items-center gap-1 font-semibold">
          <LandPlot size={18} />
          <p>
            {property.sqm} m<sup>2</sup>
          </p>
        </div>
      )}
      {property?.garage && (
        <div className="flex items-center gap-1 font-semibold">
          <CarFront size={18} />
          <p>Garage</p>
        </div>
      )}
      {property?.pool && (
        <div className="flex items-center gap-1 font-semibold">
          <Droplet size={18} />
          <p>Pool</p>
        </div>
      )}
      {property?.wifi && (
        <div className="flex items-center gap-1 font-semibold">
          <Wifi size={18} />
          <p>WiFi</p>
        </div>
      )}
    </div>
  );
}
