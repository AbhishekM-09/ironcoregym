import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import BmiCalculator from './components/BmiCalculator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FreeTrialModal from './components/FreeTrialModal';
import ProgramModal from './components/ProgramModal';
import TrainerModal from './components/TrainerModal';
import LightboxModal from './components/LightboxModal';
import VideoModal from './components/VideoModal';
import Toast from './components/Toast';
import ScrollReveal from './components/ScrollReveal';

import { Program, Trainer, GalleryItem, PricingPlan } from './types';

export default function App() {
  // Modal states
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState<PricingPlan | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenFreeTrialWithPlan = (plan: PricingPlan) => {
    setSelectedPlanForTrial(plan);
    setIsFreeTrialOpen(true);
  };

  const handleOpenFreeTrialGeneral = () => {
    setSelectedPlanForTrial(null);
    setIsFreeTrialOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E11D48] selection:text-white relative overflow-x-hidden">
      {/* Background Decorative Ambient Lighting (GPU accelerated radial gradients) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.12)_0%,transparent_70%)] pointer-events-none z-0 transform-gpu" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.08)_0%,transparent_70%)] pointer-events-none z-0 transform-gpu" />

      {/* Global Navbar */}
      <Navbar onOpenFreeTrial={handleOpenFreeTrialGeneral} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero
          onOpenFreeTrial={handleOpenFreeTrialGeneral}
          onOpenVideoTour={() => setIsVideoOpen(true)}
        />

        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal>
          <Programs onSelectProgram={(prog) => setSelectedProgram(prog)} />
        </ScrollReveal>

        <ScrollReveal>
          <Trainers onBookTrainer={(trainer) => setSelectedTrainer(trainer)} />
        </ScrollReveal>

        <ScrollReveal>
          <Transformations onOpenFreeTrial={handleOpenFreeTrialGeneral} />
        </ScrollReveal>

        <ScrollReveal>
          <BmiCalculator onOpenFreeTrial={handleOpenFreeTrialGeneral} />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing onSelectPlan={handleOpenFreeTrialWithPlan} />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery onSelectImage={(item) => setSelectedGalleryItem(item)} />
        </ScrollReveal>

        <ScrollReveal>
          <Contact onShowNotification={showToast} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer onOpenFreeTrial={handleOpenFreeTrialGeneral} />

      {/* Quick Enquire Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Modals & Dialogs */}
      <FreeTrialModal
        isOpen={isFreeTrialOpen}
        onClose={() => setIsFreeTrialOpen(false)}
        selectedPlan={selectedPlanForTrial}
        onShowNotification={showToast}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenFreeTrial={handleOpenFreeTrialGeneral}
      />

      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onShowNotification={showToast}
      />

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenFreeTrial={handleOpenFreeTrialGeneral}
      />

      {/* Toast Popup Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

