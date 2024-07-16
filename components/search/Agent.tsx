export default function Agent() {
  return (
    <div className="flex justify-between border-t-2 pt-3">
      <div className="flex items-center gap-2">
        <div className="h-[52px] w-[52px] rounded-full shadow-md">
          <img src="/image.png" className="h-full w-full rounded-full object-cover" alt="" />
        </div>
        <p className="font-semibold text-base">Erica Melton</p>
      </div>
      <button className="h-11 w-32 grid place-content-center text-sm bg-[#3db8ff] font-semibold text-white duration-300 active:scale-95 shadow-md rounded shadow-gray-600">
        Contact Erica
      </button>
    </div>
  );
}
