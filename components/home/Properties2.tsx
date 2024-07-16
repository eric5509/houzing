import { DoorOpen, HomeIcon, House, LandPlot, Luggage } from "lucide-react";
import Header from "./Header";
import { ImOffice } from "react-icons/im";
import { MdRoom, MdVilla } from "react-icons/md";

export default function Properties2() {
  // it('should first', () => { second })
  const properties = [
    [
      <House size={35} />,
      "House",
      "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    [
      <DoorOpen size={35} />,
      "Apartment",
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    [
      <Luggage size={35} />,
      "Commercial",
      "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    [
      <LandPlot size={35} />,
      "Land Plot",
      "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  ];
  return (
    <div className="explore text-white py-20">
      <Header
        mb={40}
        title="Explore Our Properties"
        subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident, nam eos iste tempora quasi aperiam obcaecati fugiat. Numquam, ipsam."
      />
      <div className="container2 mt-5 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((property, key) => (
          <div className={`h-60 overflow-hidden shadow-md grid relative shadow-gray-400 place-content-center rounded duration-700 ${key % 2 === 0 ? ' hover:-translate-y-1' : ' hover:translate-y-1'}   hover:shadow-black cursor-pointer `}>
            <img
              src={`${property[2]}`}
              className="h-full w-full object-cover absolute top-0 left-0 z-10"
              alt=""
            />
            <div className="h-full w-full object-cover absolute bg-black/40 top-0 left-0 z-10"></div>
            <div className="relative z-20">{property[0]}</div>
            <p className="absolute z-20 text-base font-semibold left-1/2 -translate-x-1/2 bottom-10">
              {property[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
