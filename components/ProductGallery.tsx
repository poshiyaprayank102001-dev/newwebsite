"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-6">
                    Gallery
                </h2>
                <p className="text-white/60 text-lg mx-auto font-light mt-8 mb-12">
                    Explore the details and textures of our premium materials
                </p>
            </motion.div>

            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-6 px-4 pb-8 snap-x snap-mandatory scrollbar-hide md:px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] aspect-[4/3] relative rounded-2xl overflow-hidden snap-center bg-white/5"
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 30vw"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
