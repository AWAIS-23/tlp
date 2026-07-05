"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for implementing horizontal scroll functionality
 * Converts vertical scroll to horizontal movement with smooth animations
 * Features built-in smart snapping when scrolling stops
 */
export const useHorizontalScroll = (options = {}) => {
  const {
    easeFactor = 0.08,
    breakpoint = 768,
    enableWheelControl = true,
    enableNavigation = true,
    snapDelay = 1200, // Barhakar 1.2 seconds kar diya taaki jaldi snap na ho
  } = options;

  const containerRef = useRef(null);
  const scrollPinTrackRef = useRef(null);
  const animationRef = useRef(null);
  const snapTimeoutRef = useRef(null); 
  
  // Is ref mein latest targetX save rakhenge taaki timer bina kisi state dependency re-run ke chal sake
  const targetXRef = useRef(0);

  const [scrollState, setScrollState] = useState({
    currentX: 0,
    targetX: 0,
    maxTranslate: 0,
    isDesktop: false,
    progress: 0,
  });

  const [navigationState, setNavigationState] = useState({
    canGoLeft: false,
    canGoRight: false,
  });

  // Check if device is desktop
  const checkIsDesktop = useCallback(() => {
    return typeof window !== 'undefined' && window.innerWidth > breakpoint;
  }, [breakpoint]);

  // Scroll to specific position
  const scrollToPosition = useCallback((targetPosition) => {
    if (!scrollPinTrackRef.current) return;
    
    const clamped = Math.max(0, Math.min(targetPosition, scrollState.maxTranslate));
    window.scrollTo({ 
      top: scrollPinTrackRef.current.offsetTop + clamped, 
      behavior: 'smooth' 
    });
  }, [scrollState.maxTranslate]);

  // Function to snap to the closest section
  const handleScrollSnap = useCallback(() => {
    if (!checkIsDesktop()) return;
    
    // Nearest Slide index calculation
    const closestSectionIndex = Math.round(targetXRef.current / window.innerWidth);
    const targetPosition = closestSectionIndex * window.innerWidth;
    
    if (Math.abs(targetXRef.current - targetPosition) > 2) {
      scrollToPosition(targetPosition);
    }
  }, [checkIsDesktop, scrollToPosition]);

  // Calculate scroll dimensions
  const calculateSizes = useCallback(() => {
    if (!checkIsDesktop() || !containerRef.current || !scrollPinTrackRef.current) {
      setScrollState(prev => (prev.maxTranslate === 0 ? prev : { ...prev, maxTranslate: 0 }));
      if (scrollPinTrackRef.current) {
        scrollPinTrackRef.current.style.height = 'auto';
      }
      return;
    }

    const container = containerRef.current;
    const track = scrollPinTrackRef.current;
    const newMaxTranslate = Math.max(0, container.scrollWidth - window.innerWidth);
    
    setScrollState(prev => {
      if (prev.maxTranslate === newMaxTranslate) return prev;
      return { ...prev, maxTranslate: newMaxTranslate };
    });
    
    track.style.height = `${newMaxTranslate + window.innerHeight * 2}px`;
  }, [checkIsDesktop]);

  // Read scroll position from vertical scroll
  const readTargetFromScroll = useCallback(() => {
    if (!checkIsDesktop() || !scrollPinTrackRef.current) {
      setScrollState(prev => (prev.targetX === 0 ? prev : { ...prev, targetX: 0 }));
      return;
    }

    const rect = scrollPinTrackRef.current.getBoundingClientRect();
    const scrolledY = Math.max(0, -rect.top);
    
    setScrollState(prev => {
      const newTargetX = Math.max(0, Math.min(scrolledY, prev.maxTranslate));
      const newProgress = prev.maxTranslate > 0 ? (newTargetX / prev.maxTranslate) * 100 : 0;
      
      // Ref ko sync rakhein taaki timer accurate value uthaye
      targetXRef.current = newTargetX;

      if (prev.targetX === newTargetX && prev.progress === newProgress) return prev;
      
      return {
        ...prev,
        targetX: newTargetX,
        progress: newProgress,
      };
    });
  }, [checkIsDesktop]);

  // --- SEPARATE SNAPPING TIMER EFFECT ---
  // Yeh scroll listener sirf timer reset karega, bina functions ko bar bar render kiye
  useEffect(() => {
    if (!checkIsDesktop()) return;

    const resetSnapTimer = () => {
      if (snapTimeoutRef.current) {
        clearTimeout(snapTimeoutRef.current);
      }
      
      snapTimeoutRef.current = setTimeout(() => {
        handleScrollSnap();
      }, snapDelay);
    };

    window.addEventListener('scroll', resetSnapTimer);
    return () => {
      window.removeEventListener('scroll', resetSnapTimer);
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    };
  }, [snapDelay, handleScrollSnap, checkIsDesktop]);

  // Smooth animation loop
  const updateScrollLerp = useCallback(() => {
    if (!checkIsDesktop() || !containerRef.current) {
      animationRef.current = requestAnimationFrame(updateScrollLerp);
      return;
    }

    setScrollState(prev => {
      const { currentX, targetX } = prev;
      const newCurrentX = currentX + (targetX - currentX) * easeFactor;
      const updatedX = Math.abs(targetX - newCurrentX) < 0.05 ? targetX : newCurrentX;
      
      if (updatedX === currentX) return prev;
      return { ...prev, currentX: updatedX };
    });
    
    animationRef.current = requestAnimationFrame(updateScrollLerp);
  }, [checkIsDesktop, easeFactor]);

  // Dedicated effect to handle DOM transformations cleanly
  useEffect(() => {
    if (checkIsDesktop() && containerRef.current) {
      containerRef.current.style.transform = `translateX(-${scrollState.currentX}px)`;
    }
  }, [scrollState.currentX, checkIsDesktop]);

  // Navigation functions
  const scrollLeft = useCallback(() => {
    const currentSectionIndex = Math.round(scrollState.targetX / window.innerWidth);
    const targetSectionIndex = Math.max(0, currentSectionIndex - 1);
    scrollToPosition(targetSectionIndex * window.innerWidth);
  }, [scrollState.targetX, scrollToPosition]);

  const scrollRight = useCallback(() => {
    const currentSectionIndex = Math.round(scrollState.targetX / window.innerWidth);
    const targetSectionIndex = Math.min(
      Math.floor(scrollState.maxTranslate / window.innerWidth),
      currentSectionIndex + 1
    );
    scrollToPosition(targetSectionIndex * window.innerWidth);
  }, [scrollState.targetX, scrollState.maxTranslate, scrollToPosition]);

  const scrollToSection = useCallback((sectionIndex) => {
    scrollToPosition(sectionIndex * window.innerWidth);
  }, [scrollToPosition]);

  // Handle resize
  const handleResize = useCallback(() => {
    const newIsDesktop = checkIsDesktop();
    setScrollState(prev => ({ ...prev, isDesktop: newIsDesktop }));
    calculateSizes();
  }, [checkIsDesktop, calculateSizes]);

  // Handle wheel events
  const handleWheel = useCallback((e) => {
    if (enableWheelControl && checkIsDesktop() && e.deltaX !== 0) {
      e.preventDefault();
    }
  }, [enableWheelControl, checkIsDesktop]);

  // Update navigation state
  useEffect(() => {
    setNavigationState(prev => {
      const canGoLeft = scrollState.targetX > 0;
      const canGoRight = scrollState.targetX < scrollState.maxTranslate;
      if (prev.canGoLeft === canGoLeft && prev.canGoRight === canGoRight) return prev;
      return { canGoLeft, canGoRight };
    });
  }, [scrollState.targetX, scrollState.maxTranslate]);

  // Setup event listeners
  useEffect(() => {
    setScrollState(prev => ({ ...prev, isDesktop: checkIsDesktop() }));
    calculateSizes();

    if (enableWheelControl) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', readTargetFromScroll);

    animationRef.current = requestAnimationFrame(updateScrollLerp);

    return () => {
      if (enableWheelControl) {
        window.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', readTargetFromScroll);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    enableWheelControl,
    handleWheel,
    handleResize,
    readTargetFromScroll,
    updateScrollLerp,
    calculateSizes,
    checkIsDesktop,
  ]);

  // Read scroll position when maxTranslate changes
  useEffect(() => {
    readTargetFromScroll();
  }, [scrollState.maxTranslate, readTargetFromScroll]);

  return {
    containerRef,
    scrollPinTrackRef,
    scrollState,
    navigationState,
    scrollLeft,
    scrollRight,
    scrollToSection,
    scrollToPosition,
    isDesktop: scrollState.isDesktop,
    progress: scrollState.progress,
    canNavigate: enableNavigation && scrollState.isDesktop,
  };
};