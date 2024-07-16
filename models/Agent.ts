import mongoose, { Document, Schema } from "mongoose";


type TAgent = Document & {
    name: string 
    phone: string
    email: string 
  };
  

const AgentSchema: Schema<TAgent> = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    phone: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
})


export const Agent = mongoose.models.Agent || mongoose.model<TAgent>("Agent", AgentSchema)