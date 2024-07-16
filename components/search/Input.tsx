"use client";

import { loadTitle } from "@/redux/features/FilterSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('')
  const [valid, setValid] = useState(false)
  const Action = (e: any) => {
    dispatch(loadTitle(e.target.value));
    setInput(e.target.value)
  };


  useEffect(() => {
    if(input.trim()){
      setValid(true)
    }else{
      setValid(false)
    }
  }, [input])
  return (
    <div className="mb-5">
      <p className="text-sm font-semibold mb-2 mt-3">Search Keyword</p>
      <div className={`h-10 w-full border-2 bg-white ${valid ? 'border-emerald-400' : 'border-gray-500'}  shadow-md rounded`}>
        <input
          onChange={Action}
          value={input}
          type="text"
          className="h-full w-full capitalize outline-none bg-transparent pl-3"
          placeholder="Los Angeles"
        />
      </div>
    </div>
  );
}
