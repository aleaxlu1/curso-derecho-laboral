import React from 'react';

const ScarcityBar: React.FC = () => {
    return (
        <section className="bg-red-700 text-white p-5 text-center shadow-2xl">
            <div className="container mx-auto">
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider">
                    🧠 INTELIGENCIA ESTRATÉGICA
                </h3>
                <p className="text-lg md:text-xl font-bold mt-2">
                    SOLO 5 CUPOS DISPONIBLES. JAMÁS SE REPETIRÁ.
                </p>
                <p className="text-sm mt-1">Debido al tiempo de una Jueza activa, el acceso a la mentoría 1:1 es extremadamente limitado.</p>
            </div>
        </section>
    );
};

export default ScarcityBar;