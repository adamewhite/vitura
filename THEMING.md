# Vitura Theming System

This document explains how to use and customize the theming system for the Vitura website.

## Overview

The site uses a **centralized theming system** where each page/route has its own color palette that resonates with its hero image:

- **Landing (/)**: Deep purple/lavender tones (purples.jpg)
- **Services**: Blue/teal tones (wyeth.jpg)
- **Our Story**: Pink/purple/lavender tones (pinkpurpleblue.jpg)
- **Contact**: Cyan/teal tones (yayoi.jpg)

## How It Works

### 1. Theme Configuration (`app/theme.config.ts`)

This is the **single source of truth** for all theme colors. Each section has four color properties:

```typescript
{
  base: 'hsl(...)',         // Primary background color
  alternative: 'hsl(...)',  // Secondary background (alternating sections)
  lightColor: '#fff5ee',    // Text color for dark backgrounds (hero)
  darkColor: 'hsl(...)',    // Text color for light backgrounds (content)
}
```

### 2. CSS Variables (`app/globals.css`)

The theme config is mapped to CSS variables in `:root`:

```css
--landing-base
--landing-alternative
--landing-light-color
--landing-dark-color

--services-base
--services-alternative
--services-light-color
--services-dark-color

/* ... and so on for story and contact */
```

### 3. Tailwind Configuration (`tailwind.config.ts`)

Tailwind is configured to use these CSS variables, making them available as utility classes:

```tsx
<div className="bg-landing-base text-landing-light-color">
  Hero Section
</div>

<section className="bg-landing-alternative text-landing-dark-color">
  Content Section
</section>
```

## Changing Colors

To update the color scheme for any page:

### Option 1: Edit CSS Variables (Quick Changes)

1. Open `app/globals.css`
2. Find the section you want to modify (e.g., `/* Landing page theme */`)
3. Update the HSL values directly
4. Save and the changes will reflect immediately

### Option 2: Edit Theme Config (Recommended)

1. Open `app/theme.config.ts`
2. Update the values in the appropriate section
3. Copy the new values to `app/globals.css` `:root` section
4. Save both files

**Why both?** The theme config serves as documentation and can be used for programmatic theme generation in the future. The CSS variables are what actually powers the site.

## Color Naming Convention

Each section uses a consistent naming pattern:

- `{section}-base` - Primary background (usually lighter)
- `{section}-alternative` - Alternate background (usually slightly different hue/saturation)
- `{section}-light-color` - For text on dark backgrounds (hero sections)
- `{section}-dark-color` - For text on light backgrounds (content sections)

## Usage in Components

### Page-Level Usage

Each page uses its own theme namespace:

```tsx
// app/page.tsx (Landing)
<section className="bg-landing-base">
  <h1 className="text-landing-light-color">Hero</h1>
</section>
<section className="bg-landing-alternative">
  <p className="text-landing-dark-color">Content</p>
</section>

// app/services/page.tsx
<section className="bg-services-base">
  <h1 className="text-services-light-color">Hero</h1>
</section>
```

### Cards and Components

White cards work on all backgrounds:

```tsx
<div className="bg-white text-landing-dark-color border border-landing-dark-color/10">
  Card content
</div>
```

## Common Patterns

### Hero Section
```tsx
<section className="bg-landing-base">
  <h1 className="text-landing-light-color">Title</h1>
</section>
```

### Content Section (Light)
```tsx
<section className="bg-landing-alternative">
  <h2 className="text-landing-dark-color">Title</h2>
  <p className="text-landing-dark-color/80">Body text</p>
</section>
```

### Content Section (Dark)
```tsx
<section className="bg-landing-base">
  <h2 className="text-landing-light-color">Title</h2>
  <p className="text-landing-light-color/70">Body text</p>
</section>
```

### Card on Colored Background
```tsx
<div className="bg-white rounded-2xl border border-landing-dark-color/10 p-6">
  <h3 className="text-landing-dark-color">Card Title</h3>
  <p className="text-landing-dark-color/80">Card text</p>
</div>
```

## Tips for Choosing Colors

1. **Use the hero image as inspiration** - Sample colors from the dominant tones
2. **Maintain sufficient contrast** - Ensure text is readable (WCAG AA minimum)
3. **Keep saturation lower for backgrounds** - High saturation can be fatiguing
4. **Use HSL for easier adjustments** - Easier to tweak lightness/saturation
5. **Test with actual content** - Colors may look different with real text/images

## Adding a New Section

If you need to add a new page with its own theme:

1. Add to `app/theme.config.ts`:
```typescript
newpage: {
  base: 'hsl(...)',
  alternative: 'hsl(...)',
  lightColor: '#fff5ee',
  darkColor: 'hsl(...)',
}
```

2. Add to `app/globals.css`:
```css
--newpage-base: hsl(...);
--newpage-alternative: hsl(...);
--newpage-light-color: #fff5ee;
--newpage-dark-color: hsl(...);
```

3. Add to `tailwind.config.ts`:
```typescript
newpage: {
  base: 'var(--newpage-base)',
  alternative: 'var(--newpage-alternative)',
  'light-color': 'var(--newpage-light-color)',
  'dark-color': 'var(--newpage-dark-color)',
}
```

4. Use in your page component:
```tsx
<section className="bg-newpage-base text-newpage-light-color">
```

## Troubleshooting

**Colors not updating?**
- Clear your browser cache
- Check that the CSS variable name matches in all three files
- Ensure you're using the correct section namespace

**Colors look different than expected?**
- HSL values are sensitive - small changes can have big effects
- Check browser DevTools to see computed values
- Test on different screens/color profiles

**Need to match a specific color from the hero image?**
- Use a color picker tool to sample from the image
- Convert to HSL for easier tweaking
- Reduce saturation for backgrounds (10-20% lower than the sampled color)
