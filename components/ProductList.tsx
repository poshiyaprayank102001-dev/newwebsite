"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Product } from "@/lib/data";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="space-y-48 md:space-y-64">
            {products.map((product, index) => {
                const secondImage = product.gallery?.[0] || product.image;
                const thirdImage = product.gallery?.[1] || product.image;
                const fourthImage = product.gallery?.[3] || product.image;

                return (
                    <div key={product.id} className="flex flex-col gap-24 md:gap-32">
                        {/* ROW 1: 3-Column Layout (Image - Text - Image) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 80, damping: 25 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full order-1"
                            >
                                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl bg-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} - 1`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </motion.div>

                            {/* Center Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="w-full order-2 flex flex-col items-center text-center space-y-6 px-4"
                            >
                                <h2 className="text-4xl md:text-5xl font-serif italic tracking-wide text-white">
                                    {product.name}
                                </h2>
                                <div className="w-12 h-[1px] bg-white/50" />
                                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light max-w-sm">
                                    {product.description}
                                </p>
                                <ul className="space-y-2 pt-4">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full order-3"
                            >
                                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl bg-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={secondImage}
                                        alt={`${product.name} - 2`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ROW 2: Feature Image (Gallery 2) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <div className="relative w-full aspect-[21/9] rounded-sm overflow-hidden shadow-2xl bg-white/5">
                                <Image
                                    src={thirdImage}
                                    alt={`${product.name} - Full Feature`}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    sizes="100vw"
                                />
                            </div>
                        </motion.div>

                        {/* ROW 3: 2-Column (Left Image - Right Extra Details) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Left Image (Gallery 3) */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full"
                            >
                                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={fourthImage}
                                        alt={`${product.name} - Detail`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Extra Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="w-full flex flex-col justify-center space-y-8"
                            >
                                <h3 className="text-2xl md:text-3xl font-serif italic text-white border-l-2 border-white/50 pl-6">
                                    Craftsmanship & Detail
                                </h3>
                                <p className="text-lg text-white/70 leading-relaxed font-light pl-6">
                                    {product.extraDetails || "This product features our meticulous attention to detail and commitment to quality. Every piece is inspected to ensure it meets our rigorous standards."}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
