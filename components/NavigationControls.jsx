"use client";

import { memo } from 'react';

/**
 * Navigation controls for horizontal scrolling
 * Provides left/right navigation buttons with proper accessibility
 */
const NavigationControls = memo(({ 
  onNavigateLeft, 
  onNavigateRight, 
  canGoLeft, 
  canGoRight, 
  className = '' 
}) => {
  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div 
      className={`navigation-controls ${className}`}
      role="navigation"
      aria-label="Slide navigation"
    >
      <button
        onClick={onNavigateLeft}
        onKeyDown={(e) => handleKeyDown(e, onNavigateLeft)}
        disabled={!canGoLeft}
        className="nav-control-btn nav-control-btn--left"
        aria-label="Previous slide"
        aria-disabled={!canGoLeft}
        tabIndex={canGoLeft ? 0 : -1}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          aria-hidden="true"
          focusable="false"
        >
          <path 
            d="M19 12H5M12 19l-7-7 7-7" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <button
        onClick={onNavigateRight}
        onKeyDown={(e) => handleKeyDown(e, onNavigateRight)}
        disabled={!canGoRight}
        className="nav-control-btn nav-control-btn--right"
        aria-label="Next slide"
        aria-disabled={!canGoRight}
        tabIndex={canGoRight ? 0 : -1}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          aria-hidden="true"
          focusable="false"
        >
          <path 
            d="M5 12h14M12 5l7 7-7 7" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
});

NavigationControls.displayName = 'NavigationControls';

export default NavigationControls;
