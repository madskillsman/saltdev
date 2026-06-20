# Allum Strategies — Brand Kit (`design.md`)

> **Purpose:** This is an AI build brief. It is written so Claude (or another tool/designer) can generate brand assets — logo lockups, color tokens, type styles, web components, decks, share cards — directly from it, while also serving as the human reference guide. Every spec below is a constraint, not a suggestion.

---

## 1. Brand at a glance

**Allum Strategies** builds websites, local SEO, Google Business Profile management, and AI/search infrastructure for Phoenix service businesses. The brand exists to make a good company look as credible online as it already is in real life — and to get it found, trusted, and contacted.

| | |
|---|---|
| **Category** | Web design + local SEO / search infrastructure |
| **Primary audience** | Established Phoenix service-business owners — strong work, weak digital presence |
| **Positioning** | The best-in-class option in the agency category — clearly the most polished and serious |
| **Brand feeling (the one to nail)** | **Sharp & high-performance** — fast, technical, results-obsessed; the opposite of bloated brochure sites |
| **Direction** | Codified system built on an **Assembly.com-inspired** visual language: warm off-white base, off-black text, black pill CTAs, soft pale-navy accent fills, generous rounding, calm friendly minimalism — carrying Allum's Luxury Blue as the accent |
| **Owner** | Jacob Allumbaugh |

**The one-line filter for every asset:** *Does it look sharp, fast, and intentional — or does it look like a generic agency template?* If the latter, it's wrong.

---

## 2. Brand attributes

**Is:** sharp, precise, high-performance, credible, restrained, modern, intentional, **calm, warm, friendly-premium** (Assembly-inspired).

**Is not:** loud, bloated, templated, hypey, decorative, cluttered, "agency-cute," cold or clinical.

Guiding standard (from Jacob): *every element must earn its place.* If a color, shape, icon, or word doesn't serve a purpose, cut it. Visual quality and intentionality are the final gates before anything ships.

---

## 3. Voice & messaging

**Voice is locked to the current site copy.** Direct, plain-spoken, no hype.

Reference line that defines the tone:
> "Your competitors are easier to find than you are."

**Rules:**

- Lead with the prospect's problem, in plain language. Name the stakes (visibility, trust, revenue leaking).
- Short declarative sentences. No filler, no hedging, no buzzwords ("synergy," "cutting-edge," "leverage," "game-changing").
- Concrete over abstract: "service pages, internal linking, page hierarchy" beats "holistic optimization."
- Confident, not boastful. State what Allum does and the standard it holds — don't oversell.
- Outcome-framed: tie everything back to getting *found, trusted, and contacted.*
- Allum refers to itself in the third person in marketing copy ("Allum builds…", "Allum fixes…"), consistent with the live site.

**Banned in copy:** AI slop, vague claims, exclamation-heavy hype, and any sentence that survives deletion without losing meaning.

---

## 4. Logo

**Status:** **"Allum"** is the wordmark, now paired with a **logomark** — a rounded Luxury Blue chip containing an ascending "A" formed as a peak, topped by a white summit dot. The mark reads as *reaching the top spot* (search visibility / rankings) and as the letter A. Files: `allum-logo.svg` (lockup), and an inline 48-grid mark embedded in the homepages.

**Mark construction** (48×48 grid)
- Rounded square chip, `rx 13`, Luxury Blue `#03324f`.
- White peak stroke: `M13 36 L24 15 L35 36`, 3.4px, round caps/joins.
- White summit dot: circle `cx24 cy11.5 r2.8`.
- Crossbar accent in pale blue `#9FC4E0`: `M18.4 28 H29.6`, 3.4px.

**Wordmark construction**
- Set in the brand typeface (Hanken Grotesk), weight 700, tight tracking (~-0.03em), Off-Black.
- **Lockup:** mark + "Allum" with ~10px gap, vertically centered. This is the primary logo for header, social, favicon, email, and decks.
- The mark alone works as the app icon / favicon. "Allum Strategies" may appear as set type in footers and legal contexts, but the brand mark is **Allum**.

**Clear space**
- Minimum clear space on all sides = the cap-height of the "A" in "Allum."

**Minimum size**
- Digital: 120px wide for the full lockup; 24px for the "Allum" short mark / favicon.

**Color variants** (generate all)
1. **Primary** — black wordmark on white.
2. **Reversed** — white wordmark on Luxury Blue (`#03324f`) or near-black.
3. **Mono** — single-color black or single-color white, no effects.

**Don'ts**
- No gradients, shadows, outlines, or glows on the mark.
- Don't stretch, skew, recolor outside the palette, or place on busy imagery without a solid/scrim backing.
- Don't add a tagline into the logo lockup — taglines live as separate type.

> **Optional future asset (not required now):** a monogram "A" for app-icon contexts. If generated, it must be geometric, single-weight, and derived from the Inter "A" — not a decorative emblem.

---

## 5. Color

Palette is **white-first** with an Assembly-style structure: a clean white base, **off-black** text (not pure black), **Luxury Blue pill CTAs** with white text, and **Blue Pale** soft fills for chips and highlights. Luxury Blue is sampled from the live Allum site; the rounded forms, pill buttons, and calm minimalism are adapted from Assembly.

### Core palette

| Token | Hex | Role |
|---|---|---|
| **White** (base) | `#ffffff` | Primary background |
| **Off-Black** (ink) | `#101010` | Primary text, logo |
| **Luxury Blue** (accent) | `#03324f` | **Primary pill CTAs (white text)**, links, eyebrows, icon chips, key emphasis, accent sections |
| **Blue Deep** (accent hover) | `#0b4a72` | Hover/active states for buttons and accent elements |
| **Blue Pale** (soft fill) | `#DCE8F2` | Soft accent wash — highlight blocks, icon-chip backgrounds, callouts |

### Neutral ramp (warm — UI + text)

| Token | Hex | Role |
|---|---|---|
| Surface | `#F0EEE8` | Subtle section background for rhythm (one step off white) |
| Surface 2 | `#EAE7DF` | Cards on tinted sections, dividers fill |
| Border | `#E2DFD7` | Hairline rules, card borders |
| Text Muted | `#9A9890` | Captions, meta, disabled |
| Text 2 | `#5E5C55` | Secondary body text |

### Usage rules

- **White is the canvas.** Pure `#ffffff` is the default background. Use the warm `Surface` tint to separate alternating sections and give cards lift.
- **Primary CTAs are Luxury Blue pills with white text** (hover → Blue Deep). Luxury Blue is the brand's action color.
- **Blue Pale `#DCE8F2`** is the soft-fill workhorse: icon-chip backgrounds, highlight callouts, accent section bands. Use it generously and calmly.
- Text is **Off-Black `#101010`** (warm, softer than `#000`). Secondary = Text 2, captions = Text Muted.
- **Accent sections:** a full Luxury Blue band (white text) is allowed for one hero/CTA moment, used sparingly.
- Maintain WCAG AA (4.5:1 body, 3:1 large). Off-black on white and white on Luxury Blue both pass. Never put Luxury Blue text on Blue Pale (too low-contrast).

### CSS tokens (paste into Bricks/WP global styles)

```css
:root {
  /* Base */
  --color-bg:            #ffffff; /* white base      */
  --color-text:          #101010; /* off-black ink   */
  --color-text-2:        #5E5C55; /* secondary       */
  --color-text-muted:    #9A9890; /* captions        */

  /* Accent (Luxury Blue) */
  --color-accent:        #03324f;
  --color-accent-hover:  #0b4a72;
  --color-accent-pale:   #DCE8F2; /* soft fills/chips */

  /* Buttons — Luxury Blue pill, white text */
  --color-btn:           var(--color-accent);
  --color-btn-hover:     var(--color-accent-hover);

  /* Neutrals (warm) */
  --color-surface:       #F0EEE8;
  --color-surface-2:     #EAE7DF;
  --color-border:        #E2DFD7;

  /* Accent section (sparingly) */
  --color-bg-invert:     #03324f;
  --color-text-invert:   #ffffff;
}
```

---

## 6. Typography

**Typeface: Hanken Grotesk — single family across everything.** A warm, neutral grotesk that closely matches Assembly's clean, friendly-premium type while staying free (Google Fonts / OFL) and web-performant. No second face. (Fallback stack keeps Inter, then system sans.)

**Tone:** restrained & precise, but warmer than a pure geometric. Measured sizes, generous spacing, quiet confidence. Headlines are clear and calm — light weight, Title Case, never oversized-for-drama.

### Weights
- **400** Regular — body **and all headings**
- **500** Medium — UI, labels, emphasis
- **600** Semibold — buttons, logo/wordmark
- **700** Bold — reserve; avoid in headings (hierarchy is size + space, not weight)

### Type scale (web, rem @ 16px base)

| Style | Size | Weight | Line height | Tracking | Case | Use |
|---|---|---|---|---|---|---|
| Display | 3.5rem / 56px | 400 | 1.05 | -0.02em | Title Case | Hero headline |
| H1 | 2.5rem / 40px | 400 | 1.1 | -0.02em | Title Case | Page title |
| H2 | 2rem / 32px | 400 | 1.15 | -0.01em | Title Case | Section heading |
| H3 | 1.5rem / 24px | 400 | 1.2 | -0.01em | Title Case | Sub-section |
| H4 | 1.25rem / 20px | 400 | 1.3 | 0 | Title Case | Card title |
| Body L | 1.125rem / 18px | 400 | 1.6 | 0 | Sentence | Lead paragraph |
| Body | 1rem / 16px | 400 | 1.6 | 0 | Sentence | Default text |
| Small | 0.875rem / 14px | 400 | 1.5 | 0 | Sentence | Captions, meta |
| Label | 0.75rem / 12px | 500 | 1.4 | 0.06em | UPPERCASE | Eyebrows, tags |

**Rules**
- **All headings (Display–H4) are weight 400 and Title Case** — every word's first letter capitalized. Hierarchy comes from size and whitespace, not weight. (CSS: `font-weight:400; text-transform:capitalize;`)
- Eyebrow/label text is uppercase, tracked +0.06em, Gray 600 or Luxury Blue (as on the live "What Allum Builds" labels).
- Headlines use tight tracking; body stays neutral and sentence case.
- Measure (line length) 60–75 characters for body.
- One H1 per page. Don't skip heading levels.

### CSS tokens

```css
:root {
  --font-sans: "Hanken Grotesk", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --fw-regular: 400;
  --fw-medium:  500;
  --fw-semibold:600;
  --fw-bold:    700;

  --fs-display: 3.5rem;
  --fs-h1: 2.5rem;
  --fs-h2: 2rem;
  --fs-h3: 1.5rem;
  --fs-h4: 1.25rem;
  --fs-body-l: 1.125rem;
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --fs-label: 0.75rem;
}
```

---

## 7. Layout, space & shape

**Visual approach: minimal + whitespace.** Lots of space, thin rules, subtle dividers. Let content breathe. The grid and the silence do the work — no decorative filler.

### Spacing scale (4px base)

```css
:root {
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --space-32: 128px;
}
```

- Section vertical padding: 96–128px desktop, 48–64px mobile.
- Generous gutters; don't crowd. White space is a feature, not waste.

### Shape & treatment

```css
:root {
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;   /* cards, large surfaces */
  --radius-chip: 14px; /* icon chips            */
  --radius-pill: 999px;/* buttons               */
  --border-hairline: 1px solid var(--color-border);
  --shadow-soft: 0 1px 2px rgba(16,16,16,.04), 0 8px 28px rgba(16,16,16,.06);
}
```

- **Generous rounding** (Assembly-style): cards 20–24px, icon chips ~14px, **buttons are full pills (`999px`)**.
- Borders: warm hairline (`--color-border`). Prefer borders + soft shadow + space over heavy shadows.
- Shadows: soft, large, low-opacity, and rare. No drop-shadow drama.

---

## 8. Iconography & imagery

**Icons:** one consistent **thin-line** set — **Lucide** (free). 1.5–2px stroke, Luxury Blue, set inside a **rounded Blue Pale chip** (`--radius-chip`, `--color-accent-pale` background) — the Assembly-style soft icon treatment. Used sparingly — only where an icon genuinely aids scanning, never as decoration.

**Imagery:**
- Default to type + whitespace over stock imagery.
- When photography is used: real, grounded, credible — actual work, clients, or Phoenix context. No generic handshake/corporate stock.
- Any image behind text gets a solid backing or scrim for contrast and AA legibility.
- No glows, heavy gradients, or busy textures.

---

## 9. Components (web — Bricks/WordPress)

**Buttons** (full pills, `--radius-pill`)
- *Primary:* **Luxury Blue fill** (`--color-btn`), white text, 600 weight, generous padding (~14px / 26px), hover → Blue Deep. This is the main CTA.
- *Secondary:* transparent/white fill, off-black text + hairline border; hover → `--color-surface` fill.
- *On accent sections:* white fill, Luxury Blue text (so the CTA stays visible on a blue band).
- *Text/link:* Luxury Blue, underline on hover. No more than one primary CTA per view.

**Cards** (e.g. the service cards)
- White or `--color-surface` lift on the off-white base, hairline border, `--radius-lg` (24px), soft shadow on hover.
- **Rounded icon chip** (`--radius-chip`, Blue Pale `--color-accent-pale` background, Luxury Blue line icon) → H4 title (400, Title Case) → Text 2 body → price/meta in Label style.

**Eyebrow + heading + body** block (core content rhythm)
- Uppercase Label eyebrow (Luxury Blue) → H2 heading (400, Title Case) → Body L intro. Keep this consistent across pages and decks.

**Sections**
- Alternate Off-White (`--color-bg`) and Surface (`--color-surface`) backgrounds for calm rhythm. Use a **Blue Pale** band for soft highlights, and a full Luxury Blue band (white text) only for one hero/CTA moment.

**Numbered process steps** (like "First 90 Days")
- Large numeral in Label/accent treatment, H3 step title, short Body. Hairline divider between steps.

---

## 10. Applications

Priority surfaces, in order:

1. **Website (Bricks/WP)** — primary. All tokens above map directly to Bricks global styles. Components in §9 are the building blocks.
2. **Proposals & decks / audit reports** — white slides, Inter, black text, Luxury Blue for headers/accents and data emphasis. Same eyebrow→heading→body rhythm. One accent, lots of space.
3. **Social & content (Substack, LinkedIn, share cards)** — white or Luxury Blue backgrounds, Inter, big restrained headline + short line. Share card spec: 1200×630, wordmark + one statement, generous margins. Keep templates few and consistent.
4. **Email & docs (signature, invoices, contracts)** — Inter/system fallback, black text, Luxury Blue links and rule lines, "Allum" short wordmark. Plain and clean.

**Share card / OG image:** 1200×630px, white or Luxury Blue, wordmark top-left, one bold statement, blue accent rule. (Matches the existing `allum-share-card.png` slot.)

---

## 11. Do / Don't (quick gate)

**Do**
- Keep it white, off-black, and Luxury Blue. One accent.
- Make primary CTAs **Luxury Blue pills with white text**. Use Blue Pale for chips and soft fills, Surface for section rhythm.
- Use Hanken Grotesk everywhere; light (400) Title Case headings — let size and space create hierarchy.
- Lean into generous rounding, whitespace, and soft low shadows (Assembly calm).
- Write direct, plain, outcome-focused copy. Make every element justify its existence.

**Don't**
- Use pure `#000` text (use off-black `#101010`).
- Add second accent colors, gradients, glows, or decorative graphics.
- Use a second typeface, heavy/bold headings, or oversized "dramatic" type.
- Crowd layouts, use sharp/square corners, or write hype and filler.

---

## 12. Build instructions for AI/generator

When generating assets from this file:

1. **Treat §5 (color) and §6 (type) as hard constraints.** Use the exact hex values and Hanken Grotesk only.
2. **Generate logo lockups** in all three color variants (§4) as SVG; **"Allum"** is the wordmark.
3. **Output a token sheet** (the CSS blocks in §5–7) ready to paste into Bricks/WordPress global classes.
4. **Default to white background (`#ffffff`), off-black text (`#101010`), Luxury Blue pill CTAs with white text, Blue Pale soft fills.** Use a full Luxury Blue section only for one hero/CTA moment.
5. **Favor generous rounding, whitespace, hairline borders, and soft low shadows** (Assembly calm).
6. **Use Lucide line icons in rounded Blue Pale chips** where icons help; otherwise omit.
7. **Match the content rhythm:** uppercase Luxury-Blue eyebrow → H2 (400, Title Case) → lead paragraph → supporting cards/steps.
8. **Run the final gate:** sharp, calm, intentional, friendly-premium — not generic agency. If an element doesn't earn its place, remove it.

---

*Luxury Blue sampled from allumstrategies.com; off-white/off-black system, pill buttons, soft accent fills, and rounded calm minimalism adapted from assembly.com (Off-Black `#101010`, Assembly-blue `#BCE7F4`). Codified per Jacob's brand standards, June 2026.*
