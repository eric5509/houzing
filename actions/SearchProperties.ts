"use server";
import { ConnectDB } from "@/config/ConnectDB";
import { Property } from "@/models/Property";

type TFormData = {
  type?: string;
  title?: string;
  location?: string;
  max?: number;
  min?: number;
  bed?: number;
  bath?: number;
  pool?: boolean;
  garage?: boolean;
  wifi?: boolean;
};

export const SearchProperties = async () => {
  ConnectDB()
  const properties = await Property.find()
  const newProperties = properties.map((props) => {
    return {
      ...props._doc,
      _id: props._doc._id.toString()
    }
  })
  console.log(newProperties)
  return newProperties
};
