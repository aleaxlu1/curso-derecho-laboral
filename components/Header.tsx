import React from 'react';

interface HeaderProps {
    onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    return (
        <header className="relative bg-gray-800 text-white overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop" 
                    alt="Oficina legal elegante y moderna" 
                    className="w-full h-full object-cover opacity-30"
                />
            </div>
            <div className="relative container mx-auto px-6 py-20 md:py-32 text-center">
                <h1 className="text-sm font-bold uppercase text-yellow-400 tracking-widest">CÓDIGO SECRETO: VIP</h1>
                <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Curso Intensivo VIP: Evite Sobrecostos y Litigios de la Reforma Laboral 2026
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                    REVELADO: La inteligencia judicial que una <span className="font-bold text-white">Jueza Laboral ACTIVA</span> utiliza para decidir, ahora a disposición de Gerentes y Empresarios para blindar su operación en Colombia.
                </p>
                <div className="mt-10">
                    <div className="inline-block bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 shadow-md">
                        <span className="block text-2xl font-bold text-gray-900">Precio Exclusivo: $1.797.000 COP</span>
                        <span className="block text-sm text-yellow-800">(Acceso VIP para 2 Personas + Mentoría 1:1)</span>
                    </div>
                </div>
                <button 
                    onClick={onOpenModal}
                    className="cta-button mt-8 px-12 py-5 bg-yellow-600 text-gray-900 text-xl font-bold rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-400"
                >
                    ASEGURAR MI ACCESO VIP AHORA
                </button>
            </div>
        </header>
    );
};

export default Header;