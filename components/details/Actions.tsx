import { ArrowLeft, Heart, Share } from "lucide-react";

export default function Actions() {
  return (
    <div className="py-3 container flex items-center justify-between">
      <div className="flex items-center text-lg gap-4">
        <div className="h-10 w-10 border shadow duration-300 cursor-pointer active:scale-95 hover:border-green-500 rounded-lg grid place-content-center">
          <ArrowLeft size={18} />
        </div>
        <p className="font-semibold">Details</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-10 w-10 border shadow duration-300 cursor-pointer active:scale-95 hover:border-green-500 rounded-lg grid place-content-center">
          <Share size={18} />
        </div>
        <div className="h-10 w-10 border shadow duration-300 cursor-pointer active:scale-95 hover:border-green-500 rounded-lg grid place-content-center">
          <Heart size={18} />
        </div>
      </div>
    </div>
  );
}
