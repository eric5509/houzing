"use client";
import { useSelector } from "react-redux";
import HouseCard from "./HouseCard";
import { properties } from "./_data";
import { useState } from "react";
import { RootState } from "@/redux/store/store";

export default function HouseList() {
  const [active, setActive] = useState(0);
  const page= useSelector((store: RootState) => store.properties.currentPage)
  
  return (
    <div className="gap-5 sm:gap-3 grid grid-cols-1">
      {properties.map((property, key) => (
        <div className="" onClick={() => setActive(key)}>
          <HouseCard
            property={property}
            active={active}
            key={key}
            index={key}
          />
        </div>
      ))}
    </div>
  );
}
