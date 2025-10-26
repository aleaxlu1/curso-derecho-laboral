
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ScarcityBar from './components/ScarcityBar';
import OfferSection from './components/OfferSection';
import AudienceSection from './components/AudienceSection';
import PromiseSection from './components/PromiseSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <>
            <Header onOpenModal={openModal} />
            <main>
                <ScarcityBar />
                <OfferSection />
                <AudienceSection />
                <PromiseSection />
                <TestimonialsSection />
            </main>
            <Footer onOpenModal={openModal} />
            <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default App;
