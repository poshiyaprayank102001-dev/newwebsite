"use client";

import { motion } from "motion/react";
import { pageHeaderVariants } from "@/lib/animations";

export default function ProductHeader() {
    return (
        <motion.div
            variants={pageHeaderVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
                Our Products
            </h1>
            {/* <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
                Discover our premium collection of innovative products designed to enhance your lifestyle
            </p> */}
        </motion.div>
    );
}
