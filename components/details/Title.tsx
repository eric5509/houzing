import { Bath, Bed, CarFront, LandPlot, MapPin } from "lucide-react";

export default function Title() {
  const datas = [
    ["3 Bedroom", <Bed size={18} />],
    ["2 Bathroom", <Bath size={18} />],
    ["5.200 sq m", <LandPlot size={18} />],
    ["Garage", <CarFront size={18} />],
  ];
  return (
    <div className="">
      <p className="text-2xl font-semibold mb-3">Modern Simple House</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          {datas.map((data) => (
            <div className="flex items-center gap-1">
              {data[1]}
              <p>{data[0]}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={18} className="text-emerald-500" />
          <span className="font-semibold text-sm">Banyumas, Indonesia</span>
        </div>
      </div>
    </div>
  );
}
