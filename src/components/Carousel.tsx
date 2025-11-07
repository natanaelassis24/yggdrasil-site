"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <motion.div
      ref={emblaRef}
      className="overflow-hidden max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="flex gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative min-w-[80%] md:min-w-[35%] aspect-[3/4] h-[600px] rounded-2xl overflow-hidden shadow-lg shadow-[#bfa76f]/20 border border-[#bfa76f]/10"
          >
            <Image
              src={src}
              alt={`Sede da Yggdrasil ${i + 1}`}
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 35vw, 400px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
