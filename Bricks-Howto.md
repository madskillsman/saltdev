# Bricks Builder HTML Generation

This project generates HTML+CSS snippets to paste into **Bricks Builder 2.3+**
via its native "HTML & CSS to Bricks" converter. Output must drop into the
builder and become editable native elements, classes, and variables with
zero cleanup.

## Output contract

Return exactly two fenced blocks, in this order, with no prose outside them:

```html
<!-- section-scoped HTML fragment -->
```

```css
/* global styles: :root variables + class rules only */
```

- No `<!doctype>`, `<html>`, `<head>`, or `<body>` — section-scoped only.
- No `<script>`, `<link>`, `<style>`, or `<iframe>` in the HTML block.
- No markdown commentary. No explanations. No alternatives offered.

## Element mapping (emit tags the converter recognizes)

| Need | Tag |
|---|---|
| Outer block (one per topic) | `<section>` |
| Width-constrained wrapper | `<div class="container">` |
| Column/row inside a section | `<div class="block">` |
| Headings | `<h1>`–`<h6>` |
| Paragraph / inline text | `<p>`, `<span>` |
| Button (link-styled) | `<a class="button">` |
| Image | `<img>` with `alt` |
| List | `<ul>`, `<ol>`, `<li>` |
| Form | `<form>`, `<input>`, `<label>` |

**Never** emit: custom elements, web components, Tailwind utility classes,
`<button>` for CTAs (use `<a class="button">`), or generic `<div>` wrapping
text that should be a heading or paragraph.

## Layout rules

Canonical hierarchy: `section > div.container > content`. One `<section>` per
page topic. Inside the container, use **CSS Grid for 2D page-level layouts**
(card grids, feature grids, query-loop-style rows) and **Flexbox for 1D
component-level layouts** (nav bars, button groups, stacked hero, form rows).

Default responsive grid recipe:
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: var(--space-l);
```

Responsive breakpoints are Bricks' native set only: **1366, 1024, 991, 767, 478**.
Use `max-width` media queries at these values.

## CSS rules

**Always use longhand properties.** Shorthand (`background:`, `font:`,
`margin: 10px 20px`, `border:`) falls through to Custom CSS instead of
mapping to Bricks UI controls. Emit `background-color`, `background-image`,
`padding-top`/`-right`/`-bottom`/`-left`, `margin-*`, `font-size`,
`font-weight`, `line-height`, `border-color`/`-width`/`-style` separately.

**All design tokens go in `:root {}`.** The paste converter auto-registers
them as Bricks Global Variables. Use these names by default; override only
when the project brief specifies otherwise:

```css
:root {
  /* Color */
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --accent: #ec4899;
  --fg: #0f172a;
  --fg-muted: #475569;
  --bg: #ffffff;
  --bg-alt: #f8fafc;
  --border: #e2e8f0;

  /* Spacing (fluid, clamp-based) */
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-s:  clamp(0.5rem, 1vw, 1rem);
  --space-m:  clamp(1rem, 2vw, 1.5rem);
  --space-l:  clamp(1.5rem, 3vw, 2.5rem);
  --space-xl: clamp(2.5rem, 5vw, 4rem);
  --space-2xl: clamp(4rem, 8vw, 6rem);

  /* Typography */
  --text-s:  clamp(0.875rem, 0.9vw, 1rem);
  --text-m:  clamp(1rem, 1.1vw, 1.125rem);
  --text-l:  clamp(1.125rem, 1.4vw, 1.375rem);
  --h3:      clamp(1.5rem, 2.5vw, 2rem);
  --h2:      clamp(2rem, 4vw, 3rem);
  --h1:      clamp(2.5rem, 5vw, 4rem);

  /* Radii */
  --radius-s: 0.375rem;
  --radius-m: 0.75rem;
  --radius-l: 1.25rem;
}
```

Reference tokens with `var(--name)`. **Never emit raw hex, rgb, or px values
where a token applies.** Fall back to a token-then-literal chain only for
values the token set doesn't cover.

**Class-based styling, BEM-style naming.** Use `block__element--modifier` in
kebab-case. Every class becomes a reusable Bricks Global Class on paste.
Inline `style=""` is permitted only for one-off positional overrides
(e.g., `grid-column: span 2`).

## Example — pricing section

```html
<section class="pricing">
  <div class="container">
    <h2 class="pricing__title">Simple, transparent pricing</h2>
    <p class="pricing__subtitle">Start free. Upgrade when you're ready.</p>
    <div class="pricing__grid">
      <div class="card">
        <h3 class="card__name">Starter</h3>
        <p class="card__price">$19<span>/mo</span></p>
        <a class="button button--outline" href="#">Choose Starter</a>
      </div>
      <div class="card card--featured">
        <h3 class="card__name">Pro</h3>
        <p class="card__price">$49<span>/mo</span></p>
        <a class="button button--primary" href="#">Choose Pro</a>
      </div>
      <div class="card">
        <h3 class="card__name">Business</h3>
        <p class="card__price">$149<span>/mo</span></p>
        <a class="button button--outline" href="#">Choose Business</a>
      </div>
    </div>
  </div>
</section>
```

```css
.pricing {
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  background-color: var(--bg-alt);
}
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-m);
  padding-right: var(--space-m);
}
.pricing__title { font-size: var(--h2); color: var(--fg); text-align: center; }
.pricing__subtitle { font-size: var(--text-l); color: var(--fg-muted); text-align: center; margin-bottom: var(--space-xl); }
.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-l);
}
.card {
  padding-top: var(--space-l);
  padding-right: var(--space-l);
  padding-bottom: var(--space-l);
  padding-left: var(--space-l);
  background-color: var(--bg);
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
  border-radius: var(--radius-l);
}
.card--featured { border-color: var(--primary); }
.button { /* longhand padding/colors/etc. */ }
```

## Task-specific context

When the user asks for a section, clarify only if the layout is ambiguous.
Otherwise generate immediately using the conventions above. Match brand voice
and content specifics from the user prompt — do not invent product names,
prices, or claims not provided.