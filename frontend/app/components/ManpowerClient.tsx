'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface SliderImage {
  id: number;
  image: string;
}

interface Slider {
  id: number;
  heading: string;
  paragraph: string;
  images: SliderImage[];
}

export default function ManpowerClient() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // const images = [
    //     "/images/slider/a.jpg",
    //     "/images/slider/b.jpg",
    //     "/images/slider/c.jpg",
    //     "/images/slider/d.jpg",
    // ];

    const { data: sliderData, isLoading } = useQuery({
        queryKey: ['slider'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/api/sliders/`);
            if (!res.ok) throw new Error("Failed slider");
            return res.json();
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    const images = sliderData?.results
        ? sliderData.results.flatMap((slider: Slider) => slider.images)
        : (sliderData ?? []).flatMap((slider: Slider) => slider.images);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <>
            <div>
                <section className="relative w-full h-[92vh] overflow-hidden ">

                    <div className="absolute inset-0 flex items-center justify-center mb-40">
                        <div className="relative w-full h-screen mt-30 overflow-hidden">
                            {images.map((item: SliderImage, index: number) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentIndex
                                            ? "translate-x-0"
                                            : index === (currentIndex - 1 + images.length) % images.length
                                                ? "-translate-x-full"
                                                : "translate-x-full"
                                        }`}
                                >
                                    <img
                                        src={`${item.image}`}
                                        alt={`Slide ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="absolute inset-0 bg-black/30 z-5"></div>

                    <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-24 mt-4">
                        <h2 className=" text-5xl  font-bold mb-2 text-white">
                            Nepal’s trust-driven ethical recruitment
                            <br />
                            partner for responsible global employers- Connecting Talent.

                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mt-2">
                            <Link href="/vacancy">
                                <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:cursor-pointer hover:bg-red-600 transition-colors">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_:SliderImage, index: number) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}
