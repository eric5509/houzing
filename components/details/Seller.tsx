import { MessageSquare, Phone, Stars } from "lucide-react";

export default function Seller() {
  return (
    <div>
      <div className="p-5 border-2 rounded-2xl w-[375px]">
        <p className="text-sm text-gray-600 mb-2">Buy with the price</p>
        <p className="text-2xl font-semibold text-emerald-500">$320,500</p>
        <div className="h-[1px] bg-gray-600 my-5"></div>
        <p className="text-sm text-gray-600 mb-2">
          Market price bases on location
        </p>
        <p className="text-xl font-semibold">
          $335,000 <Stars className="text-emerald-600 inline" size={22} />{" "}
        </p>
        <div className="h-[1px] bg-gray-600 my-5"></div>
        <div className="flex border-2 p-2 rounded-lg mt-3 items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border-2"></div>
            <div className="">
              <p className="font-semibold text-base">John Doe</p>
              <p className="text-sm text-gray-700">Seller</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 cursor-pointer shadow-md duration-300 active:scale-95 border-2 grid place-content-center rounded-xl">
                <Phone size={17}/>
            </div>
            <div className="h-10 w-10 cursor-pointer shadow-md duration-300 active:scale-95 border-2 grid place-content-center rounded-xl">
                <MessageSquare size={17}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
