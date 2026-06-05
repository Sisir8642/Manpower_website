'use client'
import React, { useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');

        try {
            const res = await fetch(`${baseUrl}/api/contact-us/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess('Thank you! Your message has been sent successfully.');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                const data = await res.json();
                const firstError = Object.values(data)[0];
                setError(Array.isArray(firstError) ? firstError[0] as string : 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section
                className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
                style={{ backgroundImage: "url('/images/banner/contact.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32 text-center">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                        style={{ color: "#1d4ed8", WebkitTextStroke: "2px white" }}
                    >
                        Contact Us
                    </h1>
                    <p className="text-white text-lg">If you have any questions, feel free to reach out to us!</p>
                </div>
                <div className="absolute bottom-[-1px] left-0 right-0">
                    <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full block">
                        <path
                            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                            fill="rgb(225 241 230)"
                        />
                    </svg>
                </div>
            </section>

            <div className="w-full min-h-screen bg-[#E1F1E6] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="bg-white rounded-lg shadow-md p-8">

                            {success && (
                                <div className="mb-6 px-4 py-3 bg-emerald-50 border border-emerald-300 text-emerald-700 rounded-md text-sm font-medium">
                                    ✅ {success}
                                </div>
                            )}
                            {error && (
                                <div className="mb-6 px-4 py-3 bg-red-50 border border-red-300 text-red-700 rounded-md text-sm font-medium">
                                    ❌ {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
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
                                        placeholder="Enter your email"
                                        required
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
                                    <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter subject"
                                        required
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
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#763721] focus:border-transparent outline-none transition-all resize-none text-gray-700 placeholder-gray-400 bg-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-gray-900 font-semibold py-3 rounded-md border-2 border-gray-900 hover:bg-[#763721] hover:text-white transition-all duration-300 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Submit'}
                                </button>
                            </form>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.627738106695!2d85.35152337525345!3d27.697898276188017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19002cc948bb%3A0x43494c56e2bbd800!2sElectra%20Global%20Recruitment%20PVT.LTD!5e0!3m2!1sen!2snp!4v1780639277954!5m2!1sen!2snp"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mater Trading Company Location"
                                className="w-full h-full"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}