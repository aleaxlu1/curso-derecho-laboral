import React from 'react';

const AudienceSection: React.FC = () => {
    return (
        <section id="audience" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
                    🎯 Diseñado Exclusivamente para la Toma de Decisiones
                </h2>
                <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-md">
                    <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                            alt="Gerente de RR.HH. y empresario visionario" 
                            className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto md:mx-0 flex-shrink-0 border-4 border-white"
                        />
                        <div className="mt-6 md:mt-0">
                            <h3 className="text-3xl font-bold text-gray-900">Gerentes de RR.HH. y Empresarios Visionarios</h3>
                            <p className="mt-4 text-lg text-gray-700">
                                Si su prioridad es la <strong>Rentabilidad y el Blindaje Financiero</strong> de su operación, este es su manual. El costo de una sola demanda perdida supera por 10x el valor de esta inversión. Anticípese a los riesgos millonarios de las <strong>reformas laborales de 2026</strong> y convierta la nueva ley en una ventaja competitiva.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;