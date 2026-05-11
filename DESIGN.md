# NossaNet Fortaleza - Design System

## Brand Identity
NossaNet Fortaleza focuses on technology, connection, and premium service. The design language is modern, clean, and high-contrast, utilizing "Glassmorphism" and vibrant lime accents.

## Design Tokens

### Colors
- **Primary:** `#89f336` (Vibrant Lime)
- **Primary Dark:** `#66cc00`
- **Primary Light:** `#affc6f`
- **Black:** `#080a0c` (Deep Slate Black)
- **Dark Gray:** `#1a1d21` (Modern Dark Gray)
- **Light Gray:** `#f8fafc`
- **White:** `#ffffff`

### Typography
- **Primary Font:** `Inter`, sans-serif
- **Headings:** Bold/Black weights with tight tracking for a premium feel.
- **Body:** Medium weight for readability.

### Surfaces & Borders
- **Radius:** 
  - `lg`: 1rem (16px)
  - `xl`: 1.5rem (24px)
  - `2xl`: 2rem (32px)
  - `3xl`: 3rem (48px)
- **Glass Effect (Light):** `bg-white/70 backdrop-blur-md border border-white/20`
- **Glass Effect (Dark):** `bg-[#1a1d21]/80 backdrop-blur-lg border border-white/10`

### Shadows & Glows
- **Premium Shadow:** `0 25px 50px -12px rgba(0, 0, 0, 0.08)`
- **Lime Glow:** `0 0 20px rgba(137, 243, 54, 0.2)`

## Interactive Components

### Buttons
- **Primary:** Background Primary, Text Black, High contrast, Bold. Hover: Shadow Glow and slight scale.
- **Secondary:** Glass background, Primary text or White text with Primary border.

### Cards
- Always use `radius-2xl` or `radius-3xl`.
- Subtle border `border-white/10` (dark) or `border-zinc-200` (light).
- Hover effect: Slight translateY and increased shadow/glow.

## Animations
- **Floating:** Used for hero elements (`animate-float`).
- **Pulse Glow:** Used for primary CTAs or status indicators (`animate-pulse-glow`).
- **Transitions:** All interactive elements must have `transition-all duration-300 ease-in-out`.

## Tone & Voice
- Professional but energetic.
- Minimalist but high-impact.
- Focus on "Expertise" and "Real speed".
