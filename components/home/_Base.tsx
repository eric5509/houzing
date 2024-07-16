'use client'
import { framer } from "../search/_framer";
import Blog from "./Blog";
import BuySell from "./BuySell";
import Cities from "./Cities";
import Customer from "./Customer";
import Hero from "./Hero";
import Properties from "./Properties";
import { motion } from 'framer-motion';
import Properties2 from "./Properties2";

export default function Base() {
  return (
    <motion.div variants={framer} initial="initial" animate="animate">
        <Hero />
        <Cities />
        <Properties />
        <Properties2 />
        <Blog />
        <BuySell />
        <Customer />
    </motion.div>
  )
}
