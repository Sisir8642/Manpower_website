'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ManpowerClient = () => {
    const containerRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        const left = leftRef.current
        const right = rightRef.current

        gsap.to(left, {
            width: '0%',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })

        gsap.to(right, {
            width: '0%',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
    }, [])

    return (
        <div ref={containerRef} className='relative h-screen overflow-hidden bg-gradient-to-r from-red-700 via-red-400 to-green-500'>

            {/* Left Panel */}
            <div
                ref={leftRef}
                className='absolute top-0 left-0 w-1/2 h-full bg-red-400'
            >
                <img
                    src="/images/image copy.png"
                    alt="manpower image"
                    className='h-full w-full object-cover'
                />
            </div>

            {/* Right Panel */}
            <div
                ref={rightRef}
                className='absolute top-0 right-0 w-1/2 h-full bg-red-600'
            >
                <img
                    src="/images/image.png"
                    alt="manpower image"
                    className='h-full w-full object-cover'
                />
            </div>

            {/* Centered Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center px-4'>
                    <h1 className='text-4xl font-bold text-white'>
                        Nepal&apos; Number one Manpower Company
                    </h1>
                    <p className='text-white mt-4 text-lg'>
                        Connecting skilled professionals with top employers across
                        <br />
                        Nepal and beyond.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ManpowerClient