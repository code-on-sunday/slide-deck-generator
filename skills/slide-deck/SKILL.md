---
name: slide-deck
description: Use when building browser-based presentation slide decks, creating training presentations, generating React+Vite slide decks with animations, or making professional slides. Triggers on slide deck, presentation, training slides, Vite slides, Framer Motion slides, animated presentations.
---

# Slide Deck Builder — Technical Instructions

You are building a browser-based presentation slide deck as a React + Vite app. Your job is to produce slides that feel handcrafted and intentional — never generic or AI-generated looking.

**Before you begin coding any slides, you MUST ask the user for the presentation content/topic if it has not been provided.** Do not invent content. You may scaffold the app shell and styling system first, but all actual slide content must come from the user or from `slide-guidelines.md` in this directory.

---

## 1. Tech Stack

| Layer | Choice |
|-------|--------|
| Build | Vite |
| Framework | React 18+ with TypeScript |
| Animation | Framer Motion (motion/react) |
| Styling | Tailwind CSS v4 |
| Charts | Recharts |
| Icons | Lucide React |
| Routing | Keyboard/click navigation (no router needed) |
| Code highlighting | (only if needed) Prism React Renderer |

Install only what you need. Do not add libraries speculatively.

---

## 2. Project Structure

```
slides/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   └── images/          # All slide images go here
├── src/
│   ├── main.tsx
│   ├── App.tsx          # Slide deck shell, navigation, keyboard controls
│   ├── index.css        # Tailwind imports + custom fonts + base styles
│   ├── slides/
│   │   ├── index.ts     # Export ordered array of all slides
│   │   ├── 01-intro.tsx
│   │   ├── 02-problem.tsx
│   │   └── ...          # One file per slide or small group of related slides
│   ├── components/
│   │   ├── SlideLayout.tsx      # Shared slide wrapper (scaling, padding, background)
│   │   ├── AnimatedText.tsx     # Reusable text entrance animations
│   │   ├── Chart.tsx            # Recharts wrapper
│   │   ├── ImageSlide.tsx       # Image display component
│   │   ├── InteractiveBlock.tsx # For custom interactive UI per slide
│   │   └── ...
│   └── lib/
│       ├── animations.ts    # Shared Framer Motion variants and transitions
│       ├── theme.ts         # Color palette, font sizes, spacing tokens
│       └── useSlideScale.ts # Hook for viewport-fitting scale
```

---

## 3. Style Discovery — Mood & Presets

### Step 1: Ask the User for Mood

Before choosing colors and fonts, ask the user what feeling the audience should have:

| Mood | Description |
|------|-------------|
| Impressed / Confident | Professional, trustworthy, bold |
| Excited / Energized | Innovative, bold, creative |
| Calm / Focused | Clear, thoughtful, minimal |
| Inspired / Moved | Emotional, memorable, elegant |

### Step 2: Pick a Style Preset

Based on mood, suggest 2-3 presets from the table below. Each preset defines fonts, colors, and signature visual elements. **Do NOT mix and match randomly — commit to one preset fully.**

#### Dark Presets

| Preset | Mood | Display Font | Body Font | Colors | Signature |
|--------|------|-------------|-----------|--------|-----------|
| **Bold Signal** | Confident | Archivo Black (900) | Space Grotesk (400) | `#1a1a1a` bg, `#FF5722` accent card, white text | Colored card as focal, large section numbers, grid layout |
| **Electric Studio** | Confident | Manrope (800) | Manrope (400) | `#0a0a0a` bg, `#4361ee` accent blue, white text | Two-panel vertical split, accent bar on edge |
| **Creative Voltage** | Energized | Syne (700) | Space Mono (400) | `#0066ff` primary, `#1a1a2e` dark, `#d4ff00` neon | Electric blue + neon yellow, halftone textures |
| **Dark Botanical** | Inspired | Cormorant (400) serif | IBM Plex Sans (300) | `#0f0f0f` bg, `#d4a574` warm accent, `#e8b4b8` pink | Abstract blurred gradient circles, thin accent lines |

#### Light Presets

| Preset | Mood | Display Font | Body Font | Colors | Signature |
|--------|------|-------------|-----------|--------|-----------|
| **Notebook Tabs** | Organized | Bodoni Moda (700) serif | DM Sans (400) | `#f8f6f1` page, `#2d2d2d` outer, colorful tabs | Paper card on dark bg, colored section tabs |
| **Pastel Geometry** | Friendly | Plus Jakarta Sans (700) | Plus Jakarta Sans (400) | `#c8d9e6` bg, `#faf9f7` card, pastel pills | Rounded card, vertical pills, soft shadow |
| **Vintage Editorial** | Inspired | Fraunces (700) serif | Work Sans (400) | `#f5f3ee` cream, `#1a1a1a` text, `#e8d4c0` warm | Geometric shapes (circle + line + dot), bold borders |
| **Swiss Modern** | Focused | Archivo (800) | Nunito (400) | Pure white, pure black, `#ff3300` red accent | Visible grid, asymmetric layouts, geometric shapes |

#### Specialty Presets

| Preset | Mood | Font | Colors | Signature |
|--------|------|------|--------|-----------|
| **Neon Cyber** | Techy | Clash Display + Satoshi | `#0a0f1c` navy, `#00ffcc` cyan, `#ff00aa` magenta | Neon glow, grid patterns, particle-like effects |
| **Terminal Green** | Hacker | JetBrains Mono | `#0d1117` dark, `#39d353` green | Scan lines, blinking cursor, code aesthetic |
| **Paper & Ink** | Editorial | Cormorant Garamond + Source Serif 4 | `#faf9f7` cream, `#1a1a1a` charcoal, `#c41e3a` crimson | Drop caps, pull quotes, elegant horizontal rules |

### Step 3: Apply the Preset

Once chosen, define the full theme in `src/lib/theme.ts` and as CSS custom properties in `src/index.css`:
- All colors from the preset
- Font families loaded from Google Fonts or Fontshare
- CSS variables for backgrounds, accents, text colors
- **Use the preset's signature elements** in at least the title slide and section transitions

---

## 4. Design System — Anti AI-Slop Rules

### Typography
- Use the font pairing from your chosen preset. Load from Google Fonts or Fontshare via `@import` in CSS.
- No more than 2 font families.
- Headlines: large and bold. Body text: scarce.
- **Never center-align body paragraphs.** Left-align or use deliberate layout.
- **ALL font sizes must use `clamp(min, preferred, max)`** — never fixed px/rem for text. This ensures readability across viewport sizes.

```css
/* Example clamp values */
--title-size: clamp(2rem, 6vw, 5rem);
--subtitle-size: clamp(0.875rem, 2vw, 1.25rem);
--body-size: clamp(0.75rem, 1.2vw, 1rem);
```

### Color & Backgrounds
- Commit fully to your preset's palette. Define as CSS custom properties.
- **Create atmosphere, not flat colors.** Layer CSS gradients for depth instead of a single solid background color:

```css
/* Layered gradient for depth */
background:
  radial-gradient(ellipse at 20% 80%, rgba(120, 0, 255, 0.15) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 20%, rgba(0, 255, 200, 0.1) 0%, transparent 50%),
  var(--bg-primary);

/* Subtle grid pattern for structure */
background-image:
  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 50px 50px;
```

- Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

### Layout — Scaled Slide Container
- The slide is a **fixed 1280×720px container** scaled via CSS `transform: scale()` to fit the viewport (like reveal.js). All content is authored at 1280×720 and uniformly scaled.
- **Because of transform scaling, Tailwind's rem-based spacing appears smaller on screen.** For any element that needs visible padding (cards, chips, buttons with backgrounds), use **inline `style={{}}` with px values** instead of Tailwind padding classes.
- Minimum padding for elements with a background: `style={{ padding: '20px 48px' }}` for horizontal chips, `style={{ padding: '24px 32px' }}` for content cards, `style={{ padding: '16px 32px' }}` for buttons.
- Generous whitespace. Content should breathe.
- **Max 60% of the slide area should contain content.** The rest is intentional empty space.
- Use CSS Grid or Flexbox. Avoid absolute positioning unless for decorative elements.
- The `SlideLayout` component handles the scaling + centering.

### Content Density Limits (NON-NEGOTIABLE)

Every slide MUST fit within the 1280×720 container. Content overflows? Split into multiple slides. Never cram, never scroll.

| Slide Type | Maximum Content |
|------------|-----------------|
| Title slide | 1 heading + 1 subtitle + optional tagline |
| Content slide | 1 heading + 4-6 bullet points OR 1 heading + 2 short paragraphs |
| Feature grid | 1 heading + 6 cards maximum (2×3 or 3×2) |
| Chart slide | 1 heading + 1 chart |
| Quote slide | 1 quote (max 3 lines) + attribution |
| Image slide | 1 heading + 1 image (max 60% slide height) |
| Interactive slide | 1 heading + interactive element (keep controls minimal) |

### Visual Rules — Backgrounds & Borders
- **Do NOT wrap text content in background cards.** Let text sit directly on the slide background. Use spacing and typography for hierarchy, not boxes.
- **No nested backgrounds.** Never put one colored box inside another.
- **When an element MUST have a background** (interactive buttons, chips, tags): use `bg-white/5` with `border border-white/10` — never solid surface colors.
- **Borders must be subtle.** Use `border-l border-muted/20` for left accents, never `border-l-2`. Use `border border-white/10` for containers.
- **No drop shadows** unless it's a hard shadow (offset, no blur) as a specific design choice.
- **No rounded-full badges with gradient backgrounds.**
- **No decorative blobs, waves, or mesh gradients.**
- Geometric accents are OK: lines, dots, simple shapes.

### DO NOT USE — Banned AI Patterns

| Category | Banned |
|----------|--------|
| **Fonts** | Inter, Roboto, Arial, system fonts as display. Also avoid converging on Space Grotesk for every deck — vary your choices. |
| **Colors** | `#6366f1` (generic indigo), purple-on-white gradients, pastel rainbow, evenly-distributed "safe" palettes |
| **Layouts** | Everything centered in a vertical stack, identical card grids, generic hero sections |
| **Decorations** | Realistic illustrations, gratuitous glassmorphism, drop shadows without purpose, gradient mesh backgrounds |

### What Makes It NOT Feel AI-Slop
- Asymmetric layouts (not everything centered in a stack)
- Oversized typography for emphasis
- Deliberate use of negative space
- Content that has opinion and edge, not generic filler
- Consistent but not monotonous — vary slide layouts across the deck
- Real images and data, not placeholder illustrations
- **Surprise the viewer** — make at least 1-2 unexpected layout choices per deck

---

## 5. Animation — Feeling-Driven Motion

### Match Animation to Mood

| Feeling | Animation Style | Visual Cues |
|---------|----------------|-------------|
| **Dramatic / Cinematic** | Slow fade-ins (0.8-1.2s), large scale transitions (0.9→1) | Dark backgrounds, spotlight effects |
| **Techy / Futuristic** | Neon glow, text scramble/reveal effects | Grid patterns, monospace accents, cyan/magenta |
| **Playful / Friendly** | Bouncy easing (gentle spring), floating motion | Rounded corners, bright colors |
| **Professional** | Subtle fast animations (200-300ms), clean slides | Precise spacing, data visualization focus |
| **Calm / Minimal** | Very slow subtle motion, gentle fades | High whitespace, muted palette, serif type |
| **Editorial** | Staggered text reveals, image-text interplay | Strong type hierarchy, pull quotes, grid-breaking |

### Framer Motion Defaults
- **Default duration: 0.4–0.6s.** Avoid animations longer than 0.8s (unless cinematic mood).
- **Default easing: `[0.25, 0.1, 0.25, 1]`** (smooth deceleration, equivalent to `ease-out-expo`)
- Stagger children by **0.08–0.12s**, not more

### Slide Transitions
- Use `AnimatePresence` with `mode="wait"` for slide changes
- Slide enter: fade in + subtle translateY (20px) or translateX (30px)
- Slide exit: fade out quickly (0.2s)
- **Do not use 3D transforms, rotations, or scale bounces for slide transitions**

### Content Animations (within a slide)
- Headline: fade in + translateY, arrives first
- Supporting content: staggered fade in after headline
- Charts/images: fade in + subtle scale from 0.95 to 1
- Use `variants` pattern for orchestrated animations:

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
};
```

### Progressive Reveal
- Some slides should reveal content in steps (click to advance within a slide)
- Track a `step` state per slide when needed
- Animate items in/out based on current step
- Show a subtle progress indicator (dots or a thin bar) when a slide has multiple steps

### What NOT to Do
- No `spring` with high bounce (underdamped springs look toyish)
- No `rotate` animations on text
- No continuous looping animations (except very subtle pulsing on interactive elements)
- No parallax scrolling within slides
- No animation on every single element — some things should just be there
- **One well-orchestrated entrance per slide beats scattered micro-interactions**

### `prefers-reduced-motion` Support

Always include reduced-motion support. Wrap animation variants:

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const item = prefersReducedMotion
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
```

---

## 6. Slide Types & Components

### Title Slide
- Oversized headline using `clamp(2.5rem, 6vw, 5rem)`
- Optional subtitle
- Optional date or presenter name
- Minimal, dramatic layout
- **Use preset's signature element** (colored card, split panel, geometric shape, etc.)

### Content Slide (Text)
- Headline + 2–5 short bullet points or a short paragraph
- Bullets should animate in with stagger
- Left-aligned text, right side can have supporting visual
- **Max 4-6 bullets.** Exceeds? Split into two slides.

### Image Slide
- Full-bleed or large contained image
- Images are placed in `public/images/` by the user
- Reference as `/images/filename.ext`
- **Image max-height: 60% of slide height (432px at 720px)**
- Support caption text below or overlaid with semi-transparent background
- Lazy load images

### Chart Slide
- Use Recharts (BarChart, LineChart, PieChart, AreaChart)
- Style charts to match the deck theme — custom colors from preset, no default Recharts styling
- Animate chart entrance with Framer Motion wrapper
- Include clear labels and a headline

### Comparison Slide
- Side-by-side or before/after layout
- Use a clear visual separator (accent line, not a heavy border)
- Animate left then right panel

### Quote / Callout Slide
- Large text using `clamp(1.5rem, 3vw, 2.5rem)`, centered or left-aligned
- Accent color or background
- Attribution below in smaller text
- **Max 3 lines for the quote.**

### Interactive Slide
- For slides that need custom UI (polls, toggles, demos, games)
- Build as self-contained components with local state
- Add `data-interactive` attribute to prevent accidental slide navigation on click
- Add clear visual affordance that something is interactive (hover states, cursor)

### Link References
- External URLs: render as styled links that open in new tab (`target="_blank"`)
- Local folder links: render as `file:///` protocol links with a folder icon
- Style links distinctly — underline + accent color, not default blue

---

## 7. Navigation & Controls

- **Keyboard:** Right arrow / Space / Enter = next, Left arrow = previous
- **Click/Tap:** Click right half = next, click left half = previous (skip elements with `data-interactive`, `button`, `input`)
- **Progress bar:** Thin bar at bottom showing position in deck
- **Slide counter:** Small "3 / 28" indicator in bottom-right corner
- Support `step` sub-navigation within slides before advancing to next slide
- **Escape key:** Toggle overview mode (grid of slide thumbnails) — nice to have, not required for v1

---

## 8. Content Guidelines

Refer to `slide-guidelines.md` in this directory for the pedagogical structure:
- Problem → Discussion → Concept → Example → Takeaway cycle
- One idea per slide
- Visual-first, minimal text
- Short headlines (6–8 words)
- Progressive reveal for complex information
- **60-70% visual slides, 10-15% charts/diagrams, 15-20% text explanation**

**You MUST ask the user for the actual content/topic before creating slides.** The content guidelines above describe structure, not what goes in the slides.

---

## 9. Build & Run

```bash
npm create vite@latest . -- --template react-ts  # Only if starting fresh
npm install
npm run dev
```

The app should run with `npm run dev` and be viewable at localhost. No build errors. No TypeScript errors.

---

## 10. Quality Checklist

Before delivering any batch of slides, verify:

- [ ] `npm run dev` starts without errors
- [ ] TypeScript compiles cleanly (`npx tsc --noEmit`)
- [ ] `npx vite build` succeeds
- [ ] All animations are smooth at 60fps
- [ ] Slides fit within 1280×720 — no content overflow, no scrolling
- [ ] Content density within limits per slide type
- [ ] No placeholder text like "Lorem ipsum" or "Your content here"
- [ ] Color palette is consistent and matches chosen preset
- [ ] Fonts are loading correctly from Google Fonts / Fontshare
- [ ] Images referenced in slides exist in `public/images/`
- [ ] Interactive elements have hover/focus states
- [ ] Navigation works: keyboard, click, and progress bar are in sync
- [ ] **No text content wrapped in background cards** — text sits on slide directly
- [ ] **No nested backgrounds** (box inside box)
- [ ] **All elements with backgrounds have generous padding** via inline `style={{}}``, not Tailwind classes
- [ ] **Borders are subtle** — `border-white/10`, `border-muted/20`, never solid surface colors
- [ ] **All font sizes use `clamp()`** — no fixed px/rem for text
- [ ] **Backgrounds have depth** — layered gradients or patterns, not flat solid colors

---

## 11. Workflow

1. **Ask the user for mood and content** — what feeling? What topic? How many modules?
2. **Pick a style preset** — suggest 2-3 based on mood, let user choose
3. **Scaffold the app** — set up Vite, Tailwind, Framer Motion, project structure, theme from preset, shared components
4. **Build slides in batches** — implement 5–10 slides at a time, then ask for review
5. **Iterate** — adjust based on feedback
6. **Images** — when a slide needs an image, tell the user what image is needed and where to place it (`public/images/`). Use a visible placeholder with the filename so they know what's missing.

Always keep the app in a runnable state. Never leave broken imports or missing files.
