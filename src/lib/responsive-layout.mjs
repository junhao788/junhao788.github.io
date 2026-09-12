export const DESKTOP_NAV_BREAKPOINT = 1024;

/**
 * @param {number} viewportWidth
 * @returns {'compact' | 'rails'}
 */
export function getNavigationMode(viewportWidth) {
  return viewportWidth >= DESKTOP_NAV_BREAKPOINT ? 'rails' : 'compact';
}

/**
 * @param {number} viewportWidth
 * @param {number} viewportHeight
 * @returns {'compact' | 'mobile' | 'desktop'}
 */
export function getHeroMode(viewportWidth, viewportHeight) {
  if (viewportWidth >= DESKTOP_NAV_BREAKPOINT) return 'desktop';
  return viewportWidth < 640 && viewportHeight <= 700 ? 'compact' : 'mobile';
}
