"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/data";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="space-y-24 md:space-y-32">
            {products.map((product, index) => {
                const isEven = index % 2 === 1;

                return (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 25,
                        }}
                        className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
                    >
                        {/* Image Section */}
                        <motion.div
                            className={`w-full md:w-1/2 ${isEven ? "md:order-2" : "md:order-1"}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 1.2, x: isEven ? 30 : -30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 25,
                                    mass: 0.8,
                                }}
                                whileHover={{ scale: 1.03 }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white/5"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Description Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 25,
                            }}
                            className={`w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}
                        >
                            <div className="space-y-6">
                                <motion.h2
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        delay: 0.1,
                                    }}
                                    className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                                >
                                    {product.name}
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        delay: 0.2,
                                    }}
                                    className="text-lg text-white/80 leading-relaxed font-light"
                                >
                                    {product.description}
                                </motion.p>

                                <motion.ul
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        delay: 0.3,
                                    }}
                                    className="space-y-3"
                                >
                                    {product.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, margin: "-50px" }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 20,
                                                delay: 0.4 + featureIndex * 0.1,
                                            }}
                                            className="flex items-center gap-3 text-white/90"
                                        >
                                            <motion.span
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: false, margin: "-50px" }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 15,
                                                    delay: 0.5 + featureIndex * 0.1,
                                                }}
                                                className="w-2 h-2 rounded-full bg-white"
                                            />
                                            <span className="font-light">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
