import React from 'react';

interface FooterProps {
    onOpenModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
    return (
        <footer className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                    No Invierta en un Curso.
                    <br />
                    <span className="text-yellow-600">Invierta en el Blindaje Financiero de su Empresa.</span>
                </h2>
                <p className="mt-6 text-2xl font-bold text-red-700 uppercase">
                    Esta Oportunidad de 1:1 con la Jueza NO VOLVERÁ.
                </p>
                <p className="mt-2 text-lg text-gray-700">Quedan menos de 5 cupos VIP.</p>
                <button 
                    onClick={onOpenModal}
                    className="cta-button mt-10 px-16 py-6 bg-yellow-600 text-gray-900 text-2xl font-bold rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-400"
                >
                    ¡SÍ, QUIERO EL CÓDIGO SECRETO!
                </button>
                <p className="mt-12 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Formación Estratégica Judicial. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;