# Button Color Reference

Quick reference for using the new button color system.

## Button Color Variables

### Dark Button (for use on light backgrounds)
- Background: `bg-button-dark-bg` → Rich blue (`hsl(200, 70%, 25%)`)
- Text: `text-button-dark-text` → Warm white (`#fff5ee`)

### Light Button (for use on dark backgrounds)
- Background: `bg-button-light-bg` → Warm white (`#fff5ee`)
- Text: `text-button-light-text` → Rich blue (`hsl(200, 70%, 25%)`)

## Usage Examples

### Dark Button (on light background)
```tsx
<button className="bg-button-dark-bg text-button-dark-text px-6 py-3 rounded-full hover:opacity-90">
  Click me
</button>
```

### Light Button (on dark background)
```tsx
<button className="bg-button-light-bg text-button-light-text px-6 py-3 rounded-full hover:opacity-90">
  Click me
</button>
```

### As Link Component
```tsx
<Link
  href="/contact"
  className="bg-button-dark-bg text-button-dark-text px-6 py-3 rounded-full hover:opacity-90"
>
  Contact us
</Link>
```

## When to Use Each

- **Dark button**: Use on light/teal backgrounds (`bg-*-alternative`, white sections)
- **Light button**: Use on dark blue backgrounds (`bg-*-base`)

## Changing Button Colors

To change button colors site-wide, edit `app/globals.css`:

```css
/* Button colors */
--button-dark-bg: hsl(200, 70%, 25%);   /* Change dark button background */
--button-dark-text: #fff5ee;             /* Change dark button text */
--button-light-bg: #fff5ee;              /* Change light button background */
--button-light-text: hsl(200, 70%, 25%); /* Change light button text */
```

Also update `app/theme.config.ts` to keep documentation in sync.
