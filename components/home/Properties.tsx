import { Bath, Bed, BedSingle, CarFront, LandPlot } from "lucide-react";
import Header from "./Header";
import { properties } from "../search/_data";

export default function Properties() {
  const details = [
    ["4 Beds"],
    ["5 Beds", <Bath size={17} />],
    ["1 Garage", <CarFront size={17} />],
    ["85", <LandPlot size={17} />],
  ];
  return (
    <div className="py-20">
      <Header
        title="Our Latest Properties"
        mb={30}
        mt={30}
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, autem."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 snap-mandatory snap-x container3 py-4 overflow-x-auto gap-5">
        {properties.map((property, key) => (
          <div className="snap-start cursor-pointer group flex flex-col" key={key}>
            <div className="overflow-hidden shadow-md rounded-sm relative h-60 sm:h-48 lg:h-40">
              <img
                src={`${property.image[0]}`}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <p className="font-semibold mt-2 group-hover:text-green-500 duration-300">{property.title}</p>
              <p className="mb-1">{property.address}</p>
              <p className="text-base mt-auto font-bold mb-3">
                ${property.price.toLocaleString()}
              </p>
            </div>
            <div className="flex px-2 justify-between">
              <div
                className="flex flex-col items-center justify-center text-center"
                key={key}
              >
                <BedSingle size={17} />
                <p className="text-xs">{property.bed}</p>
              </div>
              <div
                className="flex flex-col items-center justify-center text-center"
                key={key}
              >
                <Bath size={17} />
                <p className="text-xs">{property.bath}</p>
              </div>
              <div
                className="flex flex-col items-center justify-center text-center"
                key={key}
              >
                <LandPlot size={17} />
                <p className="text-xs">{property.sqm}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
