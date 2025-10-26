
import React, { useState } from 'react';

const testimonials = [
    {
        quote: "Este curso no es un gasto, es la mejor inversión en tranquilidad que he hecho. La claridad de la Jueza para explicar los riesgos reales de la reforma 2026 nos permitió ajustar tres contratos clave y evitar lo que sin duda hubieran sido litigios costosos. Indispensable.",
        name: "Carolina Vélez",
        title: "Gerente de RR.HH., Logística Nacional S.A.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "La sesión 1 a 1 con la Jueza vale diez veces el precio del curso. Llevamos una situación específica sobre bonificaciones y salimos con una estrategia clara que nos blindó legalmente. Dejamos de operar con suposiciones y ahora operamos con certeza judicial.",
        name: "Javier Mendoza",
        title: "CEO, Innovatech Soluciones",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "Como empresaria, mi tiempo es limitado. Este curso fue directo, práctico y enfocado 100% en la rentabilidad y el blindaje. Entender cómo piensa un juez te da una ventaja competitiva que ningún otro seminario ofrece. Lo recomiendo sin dudarlo.",
        name: "Sofia Restrepo",
        title: "Fundadora, Mercadeo Digital Pro",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
                    Lo Que Dicen Nuestros Clientes VIP
                </h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-lg overflow-hidden">
                        <div 
                            className="flex transition-transform ease-in-out duration-500" 
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <p className="text-xl md:text-2xl italic text-gray-700 text-center">"{testimonial.quote}"</p>
                                    <div className="flex items-center justify-center mt-8">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name} 
                                            className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-yellow-500"
                                        />
                                        <div className="ml-4 text-left">
                                            <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                                            <p className="text-gray-600 text-sm">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button 
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 z-10"
                        aria-label="Anterior testimonio"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button 
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white