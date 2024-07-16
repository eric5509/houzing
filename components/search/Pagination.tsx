export default function Pagination() {
  return (
    <div className="sticky p-2 top-0 z-50 bg-gray-100">
        <p className="mb-2 text-15 "><b>450</b> Properties Found</p>
      <div className="flex gap-2 mb-3 items-center">
        <div className="flex-1 h-10 bg-white flex gap-3 border-2 rounded shadow-md border-gray-500 overflow-x-auto">
          <select name="" className="h-full w-full outline-none border-none bg-transparent">
            <option value="">Page 1</option>
            <option value="">Page 2</option>
            <option value="">Page 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}
