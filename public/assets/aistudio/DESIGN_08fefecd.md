---
name: Warm Editorial Craft
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#57423b'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#8a726a'
  outline-variant: '#dec0b7'
  surface-tint: '#a23e18'
  primary: '#9f3c16'
  on-primary: '#ffffff'
  primary-container: '#bf542c'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#605b54'
  on-tertiary: '#ffffff'
  tertiary-container: '#79746c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822801'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e9e1d8'
  tertiary-fixed-dim: '#ccc6bc'
  on-tertiary-fixed: '#1e1b15'
  on-tertiary-fixed-variant: '#4a463f'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies an editorial, tactile, and grounded aesthetic tailored for a technical artisan and AI practitioner. It avoids ephemeral digital novelties—strictly prohibiting glows, gradients, glassmorphism, or artificial blur layers. Instead, the interface adopts the discipline of print publication: deliberate whitespace, structural clarity, uncompromising typographic hierarchy, and razor-sharp hairline borders.

The voice is thoughtful, unpretentious, deeply human, and rooted in craft. It positions complex web engineering and artificial intelligence not through futuristic neon tropes, but as an extension of thoughtful architecture and traditional editorial design. The UI evokes the stillness and physical permanence of an independent literary periodical or an architect's monograph.

## Colors

The palette relies on tactile restraint:
- **Base Canvas (`neutral_color_hex`: #FAF8F5):** A soft, warm paper off-white that prevents harsh display glare and mimics uncoated cardstock. Alternate structural containers use `#F3EFEA`.
- **Text & Structure (`secondary_color_hex`: #1A1A1A):** A dense ink black used for display headers, primary body text, and active interactive borders, balancing contrast without absolute mechanical harshness.
- **Muted Editorial Detail (`tertiary_color_hex`: #767169):** A warm stone gray for metadata, timestamps, subtle captions, and inactive borders (`#E5E0D8`).
- **Signature Accent (`primary_color_hex`: #C85A32):** A single, grounding terracotta rust. Used with deliberate parsimony for focused actions, active navigation states, interactive links, and critical markers.

Never blend these colors with gradients or transparency layers. Colors meet at hard, defined edges or hairline dividers.

## Typography

Typography drives the architecture of the design system. 

- **Display & Headlines (`Newsreader`):** Used with literary poise. Display headers feature natural italics for emphasized words or project sub-descriptors, creating an immediate editorial cadence. Keep letter spacing slightly tightened at scale to preserve ink-like density.
- **Body & Metadata (`Plus Jakarta Sans`):** Provides a crisp, humanist geometric companion. Its open counters retain legibility across dense project write-ups, terminal excerpts, and technical breakdowns.
- **Labels & Microcopy:** Rendered in small, slightly tracked uppercase (`label-sm` and `label-md`) to emulate architectural draft notations and catalog indices.

## Layout & Spacing

The layout philosophy follows a disciplined, asymmetrical 12-column editorial grid on desktop, scaling to a 6-column layout on tablet, and a strict 4-column layout on mobile.

- **Grid Alignment & Margins:** Content spans asymmetric columns (e.g., a 4-column index panel paired with an 8-column reading canvas). Section boundaries and structural separations rely on precise hairlines (`1px solid #E5E0D8`) rather than background shifts.
- **Vertical Rhythm:** Generous vertical intervals (`space-xl` and above) provide generous pauses between projects, thoughts, and technical demonstrations. Spacing tokens govern blank space exclusively; structural divider lines maintain an exact 1px thickness without margin collapse.

## Elevation & Depth

This system operates entirely on a single physical plane. Elevation is defined through tonal layering and razor-thin hairline borders, strictly avoiding dropshadows, glows, or synthetic blur effects.

- **Hairline Outlines:** All cards, panels, splitters, and actionable items use `1px solid #E5E0D8` for neutral resting states, transitioning cleanly to `1px solid #1A1A1A` on interactive focus or hover.
- **Tonal Substrates:** Surface hierarchy is expressed by alternating the base paper tone (`#FAF8F5`) with a sunken paper tone (`#F3EFEA`). Nested containers or code snippets sit directly on this slightly darker substrate without drop shadows.
- **Tactile State Shifts:** Buttons and interactive cards do not lift toward the user via shadows. Instead, state transitions use crisp background inversions or a 1px border highlight.

## Shapes

The design system uses a strict **Sharp (`0`)** shape language. All corners are engineered with a crisp `0px` radius. 

Cards, buttons, badges, inputs, and image frames maintain perpendicular 90-degree corners. This evokes the physical precision of trimmed paper, broadsheet journalism, and fine architectural blueprints, reinforcing an intentional and timeless craft.

## Components

### Buttons & Interactive Links
- **Primary Action:** Solid `#1A1A1A` background, `#FAF8F5` text, 0px border radius, with `0.75rem 1.5rem` padding. On hover: shifts immediately to `#C85A32` with no easing or blur.
- **Secondary / Outline Action:** Transparent background with a `1px solid #1A1A1A` border and `#1A1A1A` text. On hover: inverts cleanly to a `#1A1A1A` background with `#FAF8F5` text.
- **Editorial Text Link:** Underlined with a `1px solid #C85A32` offset underline. On hover: the background fills with an immediate faint terracotta wash (`rgba(200, 90, 50, 0.08)`).

### Chips & Metadata Badges
- Sharp, rectangular micro-tags (`0px` radius).
- Outlined with `1px solid #E5E0D8`, styled in `label-sm` tracking, featuring `#767169` text on a `#F3EFEA` fill.
- Technology stack markers and status tags (e.g., "Bengaluru", "AI Pipeline") utilize this format to maintain a structured index style.

### Cards & Project Showcases
- Bounded by a uniform `1px solid #E5E0D8` border on all sides or separated by continuous horizontal and vertical hairlines in a table-like grid.
- No elevation shadows. Resting background is transparent or `#FAF8F5`. On hover, the border darkens to `#1A1A1A`, and the primary title shifts to `#C85A32`.
- Media and project mockups sit flush within the sharp card boundary, separated from text by a single internal `1px solid #E5E0D8` rule.

### Lists & Technical Indexes
- Monograph-style horizontal rules (`1px solid #E5E0D8`) divide list items.
- Layout follows an index structure: left-aligned publication year or category (`label-md` in `#767169`), centered project title (`headline-sm` in `#1A1A1A`), and right-aligned context or live link indicator in terracotta.

### Form Inputs & Fields
- Boxed in a `1px solid #E5E0D8` perimeter, `#FAF8F5` background, with sharp corners.
- Padding: `0.75rem 1rem`. Focus state: border shifts directly to `1px solid #1A1A1A` with zero ring glow. Helper text and field labels use `label-md` typography.

### Checkboxes & Radios
- Crisp `14px` squares for checkboxes; `14px` squares with an inner nested solid square for radio elements (preserving the non-rounded architecture).
- Hairline borders of `1px solid #1A1A1A`, with a solid `#C85A32` or `#1A1A1A` inner fill when active.