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
        <div className="w-full min-h-screen bg-gray-100 py-16 px-4">
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
    );
}