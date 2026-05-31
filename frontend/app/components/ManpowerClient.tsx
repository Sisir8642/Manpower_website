'use client'
import React, { useEffect, useState } from 'react'

export default function ManpowerClient() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const images = [
        "/images/imagee1.png",
        "/images/imagee2.png",
        "/images/imagee3.png",
        "/images/imagee4.png",
        "/images/imagee5.png",
    ];

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
                            {images.map((src, index) => (
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
                                        src={src}
                                        alt={`Product ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="absolute inset-0 bg-black/30 z-5"></div>

                    <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-24 mt-4">
                        <h2 className="text-5xl font-bold mb-2 text-white">
                            Nepal’s trust-driven ethical recruitment 
                            <br />
                            partner for responsible global employers- Connecting Talent.
                            
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-[#6f2e18] px-8 py-3 rounded-lg font-semibold hover:cursor-pointer hover:bg-[#e2d4d4] transition-colors">
                                Contact Us
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#833b23] transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
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
            <div className=''>
                <section className="relative z-20 mt-2 px-4">
                    <div className="max-w-full mx-auto bg-gray-100 shadow-lg rounded-md p-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">

                            {/* Search Keyword */}
                            <div className="flex-1 w-full">
                                <input
                                    type="text"
                                    placeholder="Search Keyword"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            {/* Search Location */}
                            <div className="flex-1 w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search Location"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                                    📍
                                </span>
                            </div>

                            {/* Button */}
                            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors w-full md:w-auto">
                                Search Jobs
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
