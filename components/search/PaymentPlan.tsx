"use client";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

export default function PaymentPlan() {
  const property = useSelector((store: RootState) => store.property);
  return (
    <p className="text-xl font-bold">${property.price?.toLocaleString()}</p>
  );
}
