"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    // Triple the images to create a buffer for infinite scrolling
    const extendedImages = [...images, ...images, ...images];

    // Initialize scroll position to the middle set
    useEffect(() => {
        if (containerRef.current) {
            const { current } = containerRef;
            // Calculate width of a single set (approximate based on assumptions, or wait for load)
            // Ideally we wait for images but for now we set it after render.
            // Using a timeout to ensure layout is ready
            setTimeout(() => {
                const scrollWidth = current.scrollWidth;
                const singleSetWidth = scrollWidth / 3;
                current.scrollLeft = singleSetWidth;
            }, 100);
        }
    }, [images]);

    const handleScroll = () => {
        if (containerRef.current) {
            const { current } = containerRef;
            const scrollWidth = current.scrollWidth;
            const singleSetWidth = scrollWidth / 3;
            const scrollLeft = current.scrollLeft;

            // If we've scrolled into the third set (near the end), jump back to the second set
            if (scrollLeft >= singleSetWidth * 2) {
                current.scrollLeft = scrollLeft - singleSetWidth;
            }
            // If we've scrolled into the first set (near the start), jump forward to the second set
            else if (scrollLeft <= 50) { // Using a small buffer instead of 0
                current.scrollLeft = scrollLeft + singleSetWidth;
            }
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { current } = containerRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-6 px-4 pb-8 snap-x snap-mandatory scrollbar-hide md:px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {extendedImages.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: (index % images.length) * 0.1, // Stagger based on original index
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

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-6 mt-8">
                <button
                    onClick={() => scroll('left')}
                    className="p-0 text-white backdrop-blur-sm group"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="p-0 text-white backdrop-blur-sm group"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
