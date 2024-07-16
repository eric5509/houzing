"use client";
import { SearchProperties } from "@/actions/SearchProperties";
import { loadProperties, startLoading, stopLoading } from "@/redux/features/PropertiesSlice";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Apply() {
  const filterObject = useSelector((store: RootState) => store.filter);
  const loading = useSelector((store: RootState) => store.properties.loading);
  const store = useSelector((store: RootState) => store.filter);
  const dispatch = useDispatch()
  const Submit = async () => {
    // dispatch(startLoading())
    // const properties = await SearchProperties(filterObject)
    // loadProperties(properties)
    // dispatch(stopLoading())
    console.log(store)
  };


  return (
    <div>
      <button onClick={Submit} className="py-3 rounded-sm shadow-md shadow-gray-600 duration-300 active:scale-95 font-semibold bg-[#3db8ff] text-white w-full mt-5">
        Apply
      </button>
    </div>
  );
}
