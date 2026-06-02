'use client'
import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div>
            <section className="relative overflow-hidden bg-[#223772] text-white">        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32 text-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-white/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              13 LOCATIONS TO SERVE YOU
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our Locations
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find your nearest Fast n&apos; Friendly store. Proudly serving Springfield, Ozark, Bolivar and surrounding areas with quick stops, great deals, and friendly faces.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(225 241 230)"/>
          </svg>
        </div>
      </section>
        <div className="w-full min-h-screen bg-[#E1F1E6] py-16 px-4 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-3">Contact Us</h1>
                    <p className="text-gray-700 text-lg">If you have any questions, feel free to reach out to us!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-gray-900 font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#763721] focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="mutf7"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#763721] focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#763721] focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#763721] focus:border-transparent outline-none transition-all resize-none text-gray-700 placeholder-gray-400 bg-white"
                                ></textarea>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-gray-900 font-semibold py-3 rounded-md border-2 border-gray-900 hover:bg-[#763721] hover:text-white transition-all duration-300 text-base"
                                >
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.236287062346!2d85.313407!3d27.7099899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19007169eb43%3A0xbd607222c3bf8585!2sMater%20Trading%20Company%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1766297798414!5m2!1sen!2snp"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mater Trading Company Location"
                            className="w-full h-full"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}