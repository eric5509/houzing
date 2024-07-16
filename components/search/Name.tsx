"use client";
import { RootState } from "@/redux/store/store";
import {Clock, MapPin } from "lucide-react";
import { useSelector } from "react-redux";

export default function Name() {
  const property = useSelector((store: RootState) => store.property);
  return (
    <div>
      {property.address && (
        <div className="flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">{property.title}</p>
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <p>{property.address}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <Clock size={15}/>
            2hrs ago
          </div>
        </div>
      )}
    </div>
  );
}
