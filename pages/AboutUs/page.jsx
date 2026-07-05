"use client";

import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import NavigationControls from '@/components/NavigationControls';
import ProgressBar from '@/components/ProgressBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/HorizontalScroll.css';

// Import About Us sections
import HeroSection from './section/HeroSection';
import StorySection from './section/StorySection';
import MissionSection from './section/MissionSection';
import ValuesSection from './section/ValuesSection';
import TeamSection from './section/TeamSection';
import AchievementsSection from './section/AchievementsSection';
import ContactSection from './section/ContactSection';

/**
 * About Us page with horizontal scroll implementation
 * Following the same pattern as Homepage
 */
export default function AboutUs() {
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

  const sections = [
    { component: HeroSection, name: 'hero' },
    { component: StorySection, name: 'story' },
    { component: MissionSection, name: 'mission' },
    { component: ValuesSection, name: 'values' },
    { component: TeamSection, name: 'team' },
    { component: AchievementsSection, name: 'achievements' },
    { component: ContactSection, name: 'contact' },
  ];

  return (
    <div className="aboutus-layout">
      {/* Header - Fixed Position */}
      <header className="aboutus-header">
        <Navbar />
      </header>

      {/* Horizontal Scroll Container */}
      <div className="aboutus-scroll-wrapper" ref={scrollPinTrackRef}>
        <main 
          ref={containerRef}
          className="timeline-container"
          role="main"
          aria-label="About Us sections"
        >
          <section className="timeline-section" data-section-name="hero">
            <HeroSection />
          </section>
          <section className="timeline-section" data-section-name="story">
            <StorySection />
          </section>
          <section className="timeline-section" data-section-name="mission">
            <MissionSection />
          </section>
          <section className="timeline-section" data-section-name="values">
            <ValuesSection />
          </section>
          <section className="timeline-section" data-section-name="team">
            <TeamSection />
          </section>
          <section className="timeline-section" data-section-name="achievements">
            <AchievementsSection />
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

      {/* Footer */}
      <footer className="aboutus-footer">
        <Footer />
      </footer>

      <style jsx global>{`
        .aboutus-layout {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        .aboutus-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
        }

        .aboutus-scroll-wrapper {
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

        .aboutus-footer {
          position: relative;
          width: 100%;
          z-index: 10;
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
            height: auto;
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
