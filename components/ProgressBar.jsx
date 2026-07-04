"use client";

import { memo } from 'react';

/**
 * Progress bar component for horizontal scroll indicator
 * Shows current position across all sections
 */
const ProgressBar = memo(({ progress = 0, className = '' }) => {
  return (
    <div 
      className={`progress-bar-container ${className}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div 
        className="progress-bar-fill"
        style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
      />
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
