import React from "react";

export default function Photos() {
  const images = [
    "https://images.pexels.com/photos/5524205/pexels-photo-5524205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/7195537/pexels-photo-7195537.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/5088877/pexels-photo-5088877.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];
  return (
    <div className="my-3 container gap-4 grid grid-rows-[350px] grid-cols-[1.25fr_1fr]">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={`${images[0]}`}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className=" grid grid-cols-2 auto-rows-[1fr_1fr] gap-4">

        <div className="h-full overflow-hidden cursor-pointer rounded-lg shadow-md">
          <img
            src={`${images[1]}`}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="h-full overflow-hidden cursor-pointer rounded-lg shadow-md">
          <img
            src={`${images[2]}`}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="h-full overflow-hidden cursor-pointer rounded-lg shadow-md">
          <img
            src={`${images[3]}`}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="h-full overflow-hidden cursor-pointer rounded-lg shadow-md relative">
          <div className="absolute h-full w-full bg-black/60 grid place-content-center top-0 left-0">
            <p className="text-4xl font-bold text-white">+{images.length - 4}</p>
          </div>
          <img
            src={`${images[4]}`}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
