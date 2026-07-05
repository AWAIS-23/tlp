"use client";

import { lazy, Suspense } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import NavigationControls from '@/components/NavigationControls';
import ProgressBar from '@/components/ProgressBar';
import Navbar from '@/components/Navbar';
import FloatingActionBar from '@/components/FloatingActionBar';
import Footer from '@/components/Footer';
import '@/styles/HorizontalScroll.css';

// Import sections directly (debugging mode)
import HeroSlider from './section/HeroSlider';
import IntroSection from './section/IntroSection';
import ResidencesSectionNew from './section/ResidencesSectionNew';
import Developments from './section/DevelopmentsSection';
import Philosophy from './section/PhilosophySection';
import ExperienceSection from './section/ExperienceSection';
import ContactSection from './section/ContactSection';

// Loading fallback for lazy loaded components
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner" />
  </div>
);

/**
 * Homepage component with professional horizontal scroll implementation
 * Features lazy loading, custom hooks, and optimized performance
 */
export default function Homepage() {
  const {
    containerRef,
    scrollPinTrackRef,
    scrollState,
    navigationState,
    scrollLeft,
    scrollRight,
    scrollToSection,
    isDesktop,
    progress,
    canNavigate,
  } = useHorizontalScroll({
    easeFactor: 0.08,
    breakpoint: 768,
    enableWheelControl: true,
    enableNavigation: true,
  });

  // Sections configuration for easy management
  const sections = [
    { component: HeroSlider, name: 'hero' },
    { component: IntroSection, name: 'intro' },
    { component: ResidencesSectionNew, name: 'residences-new' },
    { component: Developments, name: 'developments' },
    { component: Philosophy, name: 'philosophy' },
    { component: ExperienceSection, name: 'experience' },
    { component: ContactSection, name: 'contact' },
  ];

  return (
    <div className="homepage-layout">
      {/* Header - Fixed Position */}
      <header className="homepage-header">
        <Navbar />
      </header>

      {/* Horizontal Scroll Container */}
      <div className="home-scroll-wrapper" ref={scrollPinTrackRef}>
        <main 
          ref={containerRef}
          className="timeline-container"
          role="main"
          aria-label="Homepage sections"
        >
          <section className="timeline-section" data-section-name="hero">
            <HeroSlider />
          </section>
          <section className="timeline-section" data-section-name="intro">
            <IntroSection />
          </section>
          <section className="timeline-section" data-section-name="residences-new">
            <ResidencesSectionNew />
          </section>
          <section className="timeline-section" data-section-name="developments">
            <Developments />
          </section>
          <section className="timeline-section" data-section-name="philosophy">
            <Philosophy />
          </section>
          <section className="timeline-section" data-section-name="experience">
            <ExperienceSection />
          </section>
          <section className="timeline-section" data-section-name="contact">
            <ContactSection />
          </section>
                  </main>

        {/* Navigation Controls */}
        {canNavigate && (
          <NavigationControls
            onNavigateLeft={scrollLeft}
            onNavigateRight={scrollRight}
            canGoLeft={navigationState.canGoLeft}
            canGoRight={navigationState.canGoRight}
          />
        )}

        {/* Progress Bar */}
        <ProgressBar progress={progress} />
      </div>

      {/* Floating Action Bar */}
      <FloatingActionBar />

      {/* Footer */}
      <footer className="homepage-footer">
        <Footer />
      </footer>

      <style jsx global>{`
        .homepage-layout {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        .homepage-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
        }

        .home-scroll-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
        }

        .timeline-container {
          display: flex;
          height: 100vh;
          width: max-content;
          align-items: stretch;
          position: sticky;
          top: 0;
          overflow: hidden;
          will-change: transform;
        }

        .timeline-section {
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .timeline-section > * {
          flex: 1;
          min-height: 0;
        }

        .homepage-footer {
          position: relative;
          width: 100%;
          z-index: 10;
        }

        .section-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
        }

        .loader-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid #8A3C22;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .timeline-container {
            flex-direction: column;
            height: auto !important;
            width: 100%;
            position: relative;
            top: 0;
            align-items: stretch;
          }

          .timeline-section {
            width: 100%;
            height: auto ;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .timeline-section > * {
            flex: 1;
            min-height: 0;
          }
        }
      `}</style>
    </div>
  );
}
