import React from 'react';

const OfferSection: React.FC = () => {
    return (
        <section id="offer" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
                    ✅ Lo Que Obtiene el Paquete VIP
                </h2>
                <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-16">
                    Un paquete diseñado para equipos de decisión, permitiendo que la inteligencia fluya directamente a su área legal y operativa.
                </p>
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Offer 1: 2 Cupos */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="text-5xl font-black text-yellow-600">👥</div>
                        <h3 className="mt-4 text-2xl font-bold">ALINEACIÓN ESTRATÉGICA (2 Cupos)</h3>
                        <p className="mt-3 text-gray-700">
                            <strong>DOS CUPOS (Gerente + Líder de RR.HH.)</strong> al Curso Intensivo de 6 Horas. Asegure que la visión gerencial y la ejecución de RR.HH. operen con la misma inteligencia judicial.
                        </p>
                    </div>
                    {/* Offer 2: 1:1 Mentorship */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-500 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="text-5xl font-black text-yellow-600">👑</div>
                        <h3 className="mt-4 text-2xl font-bold">CONSULTORÍA 1:1 CON LA JUEZA (1 Hora)</h3>
                        <p className="mt-3 text-gray-700">
                            <strong>Acceso Directo para su Caso.</strong> Use esta sesión para auditar sus políticas y contratos actuales frente a un criterio judicial real. El mayor retorno de inversión del paquete.
                        </p>
                    </div>
                    {/* Offer 3: Bono */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="text-5xl font-black text-yellow-600">🛡️</div>
                        <h3 className="mt-4 text-2xl font-bold">BONO: PROTOCOLO DE BLINDAJE</h3>
                        <p className="mt-3 text-gray-700">
                            <strong>2 horas de Asesoría</strong> con nuestro <strong>Equipo de Abogados Expertos</strong> para estructurar su <strong>Protocolo de Blindaje Laboral</strong>, aplicando lo aprendido directamente a su empresa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;