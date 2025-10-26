
import React, { useState, useEffect } from 'react';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(`¡Gracias, ${name}! Hemos recibido sus datos. Un asesor lo contactará en breve para finalizar su inscripción VIP.`);
        setName('');
        setEmail('');
        setPhone('');
        setTimeout(() => {
            onClose();
            setMessage('');
        }, 4000);
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 md:p-12 relative transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-3xl"
                >
                    &times;
                </button>
                
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">¡Decisión Estratégica!</h2>
                <p className="text-lg text-gray-700 mb-6">Está a un paso de asegurar uno de los 5 cupos VIP.</p>
                
                {message ? (
                    <div className="text-center p-4">
                        <p className="text-lg text-green-700 font-bold">{message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                                    placeholder="Su Nombre y Apellido" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Profesional</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                                    placeholder="su@email.com" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Teléfono (WhatsApp)</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                                    placeholder="+57..." 
                                    required 
                                />
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    className="w-full px-8 py-4 bg-yellow-600 text-gray-900 text-lg font-bold rounded-lg shadow-lg transform transition duration-300 hover:bg-yellow-700"
                                >
                                    CONFIRMAR MI INSCRIPCIÓN VIP
                                </button>
                            </div>
                        </div>
                    </form>
                )}
                <p className="text-xs text-gray-500 mt-6 text-center">Un asesor se pondrá en contacto para finalizar el pago y agendar su mentoría 1:1.</p>
            </div>
        </div>
    );
};

export default RegistrationModal;
