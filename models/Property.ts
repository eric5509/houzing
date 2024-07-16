import mongoose, { Document, Schema } from "mongoose";
import { Agent } from "./Agent";

type TProperty = Document & {
  title: string;
  address: string;
  location: string;
  price: number;
  type: string;
  size: number;
  details: string;
  bed?: number;
  pool?: boolean;
  garage?: boolean;
  wifi?: boolean;
  bath?: number;
  agent: mongoose.Schema.Types.ObjectId;
  images: string[];
};

const PropertySchema: Schema<TProperty> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  bed: {
    type: Number,
    required: false,
  },
  bath: {
    type: Number,
    required: false,
  },
  details: {
    type: String,
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Agent,
    required: true,
  },
  pool: {
    type: Boolean,
    required: false,
  },
  garage: {
    type: Boolean,
    required: false,
  },
  wifi: {
    type: Boolean,
    required: false,
  },
});


export const Property = mongoose.models.Property || mongoose.model<TProperty>("Property", PropertySchema)