/**
 * Type definitions for horizontal scroll functionality
 * These would be TypeScript types in a TS project, but provided as JSDoc for JS
 */

/**
 * @typedef {Object} ScrollState
 * @property {number} currentX - Current horizontal position
 * @property {number} targetX - Target horizontal position
 * @property {number} maxTranslate - Maximum scroll distance
 * @property {boolean} isDesktop - Whether desktop mode is active
 * @property {boolean} isScrolling - Whether currently scrolling
 * @property {number} progress - Scroll progress percentage (0-100)
 */

/**
 * @typedef {Object} NavigationState
 * @property {boolean} canGoLeft - Whether left navigation is possible
 * @property {boolean} canGoRight - Whether right navigation is possible
 */

/**
 * @typedef {Object} HorizontalScrollOptions
 * @property {number} [easeFactor=0.08] - Animation easing factor
 * @property {number} [breakpoint=768] - Desktop breakpoint in pixels
 * @property {boolean} [enableWheelControl=true] - Enable wheel event control
 * @property {boolean} [enableNavigation=true] - Enable navigation buttons
 */

/**
 * @typedef {Object} SectionConfig
 * @property {React.ComponentType} component - React component to render
 * @property {string} name - Section identifier
 * @property {string} [ariaLabel] - Custom aria label for accessibility
 */

/**
 * @typedef {Object} UseHorizontalScrollReturn
 * @property {React.RefObject<HTMLDivElement>} containerRef - Container element ref
 * @property {React.RefObject<HTMLDivElement>} scrollPinTrackRef - Track element ref
 * @property {ScrollState} scrollState - Current scroll state
 * @property {NavigationState} navigationState - Navigation state
 * @property {() => void} scrollLeft - Scroll left function
 * @property {() => void} scrollRight - Scroll right function
 * @property {(sectionIndex: number) => void} scrollToSection - Scroll to specific section
 * @property {(position: number) => void} scrollToPosition - Scroll to specific position
 * @property {boolean} isDesktop - Desktop mode status
 * @property {number} progress - Scroll progress percentage
 * @property {boolean} canNavigate - Whether navigation controls should be shown
 */

export {};
