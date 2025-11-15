/**
 * Centralized theme configuration for Vitura site
 *
 * UNIFIED THEME: All routes now share the same rich blue/teal color palette.
 *
 * Each section has:
 * - base: Primary background color (rich deep blue - used for dark sections)
 * - alternative: Secondary background color (light cyan/teal - used for light sections)
 * - lightColor: Text color for dark backgrounds
 * - darkColor: Text color for light backgrounds
 */

export const themeConfig = {
  landing: {
    // Unified rich blue/teal theme
    base: 'hsl(200, 70%, 25%)',           // Rich deep blue
    alternative: 'hsl(190, 65%, 88%)',    // Light cyan/teal
    lightColor: '#fff5ee',                 // Warm white for dark backgrounds
    darkColor: 'hsl(200, 40%, 12%)',      // Very dark blue for light backgrounds
  },

  services: {
    // Unified rich blue/teal theme
    base: 'hsl(200, 70%, 25%)',           // Rich deep blue
    alternative: 'hsl(190, 65%, 88%)',    // Light cyan/teal
    lightColor: '#fff5ee',                 // Warm white for dark backgrounds
    darkColor: 'hsl(200, 40%, 12%)',      // Very dark blue for light backgrounds
  },

  story: {
    // Unified rich blue/teal theme
    base: 'hsl(200, 70%, 25%)',           // Rich deep blue
    alternative: 'hsl(190, 65%, 88%)',    // Light cyan/teal
    lightColor: '#fff5ee',                 // Warm white for dark backgrounds
    darkColor: 'hsl(200, 40%, 12%)',      // Very dark blue for light backgrounds
  },

  contact: {
    // Unified rich blue/teal theme
    base: 'hsl(200, 70%, 25%)',           // Rich deep blue
    alternative: 'hsl(190, 65%, 88%)',    // Light cyan/teal
    lightColor: '#fff5ee',                 // Warm white for dark backgrounds
    darkColor: 'hsl(200, 40%, 12%)',      // Very dark blue for light backgrounds
  },

  // Global colors used across all sections
  global: {
    primaryWhite: '#fff5ee',              // Warm off-white
    primaryBlack: '#1f1a1a',              // Soft black
  },

  // Button colors - Use these for consistent button styling
  button: {
    darkBg: 'hsl(200, 70%, 25%)',         // Dark button background (rich blue)
    darkText: '#fff5ee',                   // Dark button text (warm white)
    lightBg: '#fff5ee',                    // Light button background (warm white)
    lightText: 'hsl(200, 70%, 25%)',      // Light button text (rich blue)
  },

  // Footer colors
  footer: {
    banner: 'hsl(25, 68%, 62%)',
    main: 'hsl(178, 95%, 84%)',
    base: 'hsl(233, 98%, 16%)',
  },
} as const;

/**
 * Helper function to convert theme config to CSS variables
 * Used in globals.css
 */
export function generateCSSVariables() {
  return `
  /* Global colors */
  --primary-white: ${themeConfig.global.primaryWhite};
  --primary-black: ${themeConfig.global.primaryBlack};

  /* Landing page theme */
  --landing-base: ${themeConfig.landing.base};
  --landing-alternative: ${themeConfig.landing.alternative};
  --landing-light-color: ${themeConfig.landing.lightColor};
  --landing-dark-color: ${themeConfig.landing.darkColor};

  /* Services page theme */
  --services-base: ${themeConfig.services.base};
  --services-alternative: ${themeConfig.services.alternative};
  --services-light-color: ${themeConfig.services.lightColor};
  --services-dark-color: ${themeConfig.services.darkColor};

  /* Story page theme */
  --story-base: ${themeConfig.story.base};
  --story-alternative: ${themeConfig.story.alternative};
  --story-light-color: ${themeConfig.story.lightColor};
  --story-dark-color: ${themeConfig.story.darkColor};

  /* Contact page theme */
  --contact-base: ${themeConfig.contact.base};
  --contact-alternative: ${themeConfig.contact.alternative};
  --contact-light-color: ${themeConfig.contact.lightColor};
  --contact-dark-color: ${themeConfig.contact.darkColor};

  /* Footer theme */
  --footer-banner: ${themeConfig.footer.banner};
  --footer-main: ${themeConfig.footer.main};
  --footer-base: ${themeConfig.footer.base};
  `.trim();
}
