"use client";
import { loadProperty } from "@/redux/features/PropertySlice";
import PropertyType from "./PropertyType";
import { useDispatch } from "react-redux";
import PaymentPlan from "./PaymentPlan";
import Pagination from "./Pagination";
import PriceRange from "./PriceRange";
import HouseInfo from "./HouseInfo";
import HouseList from "./HouseList";
import Location from "./Location";
import Details from "./Details";
import Gallery from "./Gallery";
import Others from "./Others";
import Agent from "./Agent";
import Rooms from "./Rooms";
import Apply from "./Apply";
import Input from "./Input";
import Name from "./Name";
import { motion} from 'framer-motion'
import { SearchProperties } from "@/actions/SearchProperties";
import { useEffect, useState } from "react";
import { loadProperties } from "@/redux/features/PropertiesSlice";
import { framer } from "./_framer";

export default function Base() {
  const dispatch = useDispatch();

  const LoadProperties = async () => {
    const properties = await SearchProperties();
    dispatch(loadProperties(properties));
    dispatch(loadProperty(properties[0]));
  };
  useEffect(() => {
    LoadProperties()
  }, [])
  
  
  return (
    <motion.div variants={framer} initial="initial" animate="animate" className="grid h-[calc(100vh-64px)] mt-16 overflow-auto container sm:grid-cols-1 md:grid-cols-[350px_1fr] lg:grid-cols-[275px_400px_1fr]">
      <div className="hidden lg:block py-3 px-7 overflow-y-auto bg-gray-100 border-r-2">
        <Input />
        <PropertyType />
        <Location />
        <Rooms />
        <Others />
        <PriceRange />
        <Apply />
      </div>
      <div className="bg-gray-100 overflow-auto p-1 sm:pt-0 sm:p-3">
        <Pagination />
        <HouseList />
      </div>
      <div className="hidden md:flex flex-col bg-white gap-3 overflow-y-auto p-3">
        <Gallery />
        <Name />
        <PaymentPlan />
        <HouseInfo />
        <Details />
        <Agent />
      </div>
    </motion.div>
  );
}
