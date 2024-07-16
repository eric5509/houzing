"use client"
import { loadLocation } from "@/redux/features/FilterSlice";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Location() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('')
  const [valid, setValid] = useState(false)
  const Action = (e: any) => {
    dispatch(loadLocation(e.target.value))
    setInput(e.target.value)
  }
  useEffect(() => {
    if(input.trim()){
      setValid(true)
    }else{
      setValid(false)
    }
  }, [input])
  return (
    <div>
      <p className="text-sm font-semibold mb-2 mt-3">Location Type</p>
      <div className={`h-10 ${valid ? "border-emerald-400" : "border-gray-500"} border-2 w-full bg-white pl-8 pr-2 shadow rounded relative`}>
        <MapPin size={16} className="absolute pointer-events-none top-1/2 -translate-y-1/2 left-2"/>
        <select name="" value={input} onChange={Action} className="w-full h-full outline-none">
            <option selected value="">Location</option>
            <option value="oslo">Oslo, Finland</option>
            <option value="california">California, USA Finland</option>
        </select>
      </div>
    </div>
  );
}
