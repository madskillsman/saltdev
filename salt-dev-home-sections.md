# Salt Development — Home Page · Bricks Builder Sections
*Generated April 2026 · Jacob Allumbaugh*

Paste each numbered section into Bricks Builder one at a time via:
**Add Element → HTML → "HTML & CSS to Bricks" converter**

- Section **1** includes the full `:root` token block. Omit it on all other sections.
- **FAQ (Section 10)** is Mode B — build instructions only, no HTML paste.
- Replace `href="#"` placeholders with real page URLs before launch.
- Replace testimonial placeholder text before launch.

---

## SECTION 1 — HERO

```html
<section class="hero">
  <div class="container">
    <div class="hero__inner">

      <div class="hero__copy">
        <span class="hero__eyebrow">Web development &amp; SEO / GEO</span>
        <h1 class="hero__headline">Your digital presence should be your best salesperson.</h1>
        <p class="hero__subhead">Your clients are always online. We craft their interaction with you. Salt Development builds SEO/GEO systems and custom websites for service businesses doing $500k+ a year.</p>
        <div class="hero__actions">
          <a href="#contact" class="button button--white">Find revenue opportunities</a>
          <a href="#pricing" class="button button--ghost-light">See pricing</a>
        </div>
      </div>

      <div class="hero__visual" aria-hidden="true">
        <div class="hero__ring hero__ring--lg"></div>
        <div class="hero__ring hero__ring--sm"></div>
        <div class="hero__stats-card">
          <div class="hero__stats-label">Organic traffic</div>
          <div class="hero__stats-number">+112%</div>
          <div class="hero__stats-sub">in 4 months</div>
          <div class="hero__bars">
            <div class="hero__bar" style="height:18px;"></div>
            <div class="hero__bar" style="height:22px;"></div>
            <div class="hero__bar" style="height:20px;"></div>
            <div class="hero__bar" style="height:28px;"></div>
            <div class="hero__bar" style="height:32px;"></div>
            <div class="hero__bar" style="height:38px;"></div>
            <div class="hero__bar hero__bar--active" style="height:40px;"></div>
          </div>
        </div>
        <div class="hero__chip hero__chip--speed">
          <div class="hero__chip-label">Page speed</div>
          <div class="hero__chip-value">98<span class="hero__chip-denom">/100</span></div>
        </div>
        <div class="hero__chip hero__chip--rank">
          <div class="hero__chip-label">Rank #1</div>
          <div class="hero__chip-name">local plumbing co.</div>
        </div>
        <div class="hero__chip hero__chip--conv">
          <div class="hero__chip-label">Conversions</div>
          <div class="hero__chip-value">3×</div>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
/* ═══════════════════════════════════════════════════════
   SALT DEVELOPMENT — BRAND TOKENS
   Include this :root block on Section 1 only.
   All subsequent sections reference these variable names.
═══════════════════════════════════════════════════════ */
:root {
  --primary:        #111111;
  --primary-hover:  #2A2A2A;
  --accent:         #444444;
  --fg:             #111111;
  --fg-muted:       #666666;
  --fg-subtle:      #AAAAAA;
  --bg:             #FFFFFF;
  --bg-alt:         #F8F8F8;
  --bg-dark:        #111111;
  --border:         #E0E0E0;

  --space-2xs: clamp(0.125rem, 0.25vw, 0.25rem);
  --space-xs:  clamp(0.25rem,  0.5vw,  0.5rem);
  --space-s:   clamp(0.5rem,   1vw,    1rem);
  --space-m:   clamp(1rem,     2vw,    1.5rem);
  --space-l:   clamp(1.5rem,   3vw,    2.5rem);
  --space-xl:  clamp(2.5rem,   5vw,    4rem);
  --space-2xl: clamp(4rem,     8vw,    6rem);

  --text-xs: clamp(0.75rem,  0.8vw,  0.875rem);
  --text-s:  clamp(0.875rem, 0.9vw,  1rem);
  --text-m:  clamp(1rem,     1.1vw,  1.125rem);
  --text-l:  clamp(1.125rem, 1.4vw,  1.375rem);
  --h6:      clamp(1rem,     1.2vw,  1.25rem);
  --h5:      clamp(1.125rem, 1.5vw,  1.5rem);
  --h4:      clamp(1.25rem,  1.8vw,  1.75rem);
  --h3:      clamp(1.5rem,   2.5vw,  2rem);
  --h2:      clamp(2rem,     4vw,    3rem);
  --h1:      clamp(2.5rem,   5vw,    4rem);

  --radius-s:    0.375rem;
  --radius-m:    0.75rem;
  --radius-l:    1.25rem;
  --radius-full: 9999px;

  --shadow-s: 0 1px 3px 0 rgb(0 0 0 / 0.10);
  --shadow-m: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-l: 0 8px 32px rgba(0,0,0,0.10);

  --max-width:        1200px;
  --max-width-narrow: 720px;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ── Reusable globals (registered once by Bricks on first paste) ── */
.container {
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-m);
  padding-right: var(--space-m);
}
.container--narrow {
  max-width: var(--max-width-narrow);
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding-top: var(--space-s);
  padding-right: var(--space-l);
  padding-bottom: var(--space-s);
  padding-left: var(--space-l);
  font-size: var(--text-m);
  font-weight: 600;
  font-family: var(--font-sans);
  line-height: 1;
  text-decoration: none;
  border-radius: var(--radius-l);
  transition: opacity 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.button--white {
  background-color: var(--bg);
  color: var(--fg);
  border-width: 0;
  border-style: none;
  border-color: transparent;
}
.button--white:hover { opacity: 0.9; }
.button--ghost-light {
  background-color: transparent;
  color: var(--fg-subtle);
  border-width: 1.5px;
  border-style: solid;
  border-color: #444444;
}
.button--ghost-light:hover {
  border-color: var(--fg-subtle);
  color: var(--bg);
}
.button--primary-dark {
  background-color: var(--fg);
  color: var(--bg);
  border-width: 0;
  border-style: none;
  border-color: transparent;
}
.button--primary-dark:hover { opacity: 0.85; }
.button--outline-dark {
  background-color: transparent;
  color: var(--fg);
  border-width: 1.5px;
  border-style: solid;
  border-color: var(--border);
}
.button--outline-dark:hover { border-color: var(--fg); }
.section-header__eyebrow {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-subtle);
  margin-bottom: var(--space-s);
}
.section-header {
  text-align: center;
  margin-bottom: var(--space-xl);
}
.section-header__title {
  font-size: var(--h2);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
  margin-top: var(--space-xs);
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.15;
}
.section-header__subtitle {
  font-size: var(--text-m);
  color: var(--fg-muted);
  line-height: 1.7;
  margin-top: var(--space-s);
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.card {
  background-color: var(--bg);
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
  border-radius: var(--radius-l);
  padding-top: var(--space-l);
  padding-right: var(--space-l);
  padding-bottom: var(--space-l);
  padding-left: var(--space-l);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow: var(--shadow-l);
  transform: translateY(-2px);
}
.underline-link {
  font-size: var(--text-m);
  font-weight: 600;
  color: var(--fg);
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--border);
  padding-bottom: 2px;
  transition: border-color 0.2s ease;
}
.underline-link:hover { border-bottom-color: var(--fg); }

/* ── Hero ── */
.hero {
  background-color: var(--bg-dark);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}
.hero__copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
}
.hero__eyebrow {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-subtle);
  background-color: #1A1A1A;
  padding-top: 5px;
  padding-right: 14px;
  padding-bottom: 5px;
  padding-left: 14px;
  border-radius: var(--radius-full);
  align-self: flex-start;
  font-family: var(--font-sans);
}
.hero__headline {
  font-size: var(--h1);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--bg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  font-family: var(--font-sans);
}
.hero__subhead {
  font-size: var(--text-l);
  color: var(--fg-subtle);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  font-family: var(--font-sans);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-s);
}
.hero__visual {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__ring {
  position: absolute;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: #2A2A2A;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.hero__ring--lg { width: 380px; height: 380px; }
.hero__ring--sm { width: 280px; height: 280px; }
.hero__stats-card {
  position: relative;
  z-index: 2;
  background-color: #1A1A1A;
  border-width: 1px;
  border-style: solid;
  border-color: #2A2A2A;
  border-radius: var(--radius-l);
  padding-top: 28px;
  padding-right: 32px;
  padding-bottom: 28px;
  padding-left: 32px;
  width: 210px;
  font-family: var(--font-sans);
}
.hero__stats-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-subtle);
  margin-bottom: 14px;
}
.hero__stats-number {
  font-size: 38px;
  font-weight: 300;
  color: var(--bg);
  letter-spacing: -0.02em;
  line-height: 1;
}
.hero__stats-sub {
  font-size: 12px;
  color: var(--fg-muted);
  margin-top: 6px;
}
.hero__bars {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin-top: 20px;
  height: 40px;
}
.hero__bar {
  flex: 1;
  background-color: #2A2A2A;
  border-radius: 3px;
}
.hero__bar--active { background-color: var(--bg); }
.hero__chip {
  position: absolute;
  background-color: #1A1A1A;
  border-width: 1px;
  border-style: solid;
  border-color: #2A2A2A;
  border-radius: 10px;
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 16px;
  z-index: 3;
  font-family: var(--font-sans);
}
.hero__chip--speed { top: 18%; right: 8%; }
.hero__chip--rank  { bottom: 20%; left: 4%; }
.hero__chip--conv  { top: 14%; left: 10%; }
.hero__chip-label {
  font-size: 10px;
  color: var(--fg-subtle);
  margin-bottom: 4px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.hero__chip-value {
  font-size: 22px;
  font-weight: 300;
  color: var(--bg);
  letter-spacing: -0.02em;
}
.hero__chip-denom { font-size: 13px; color: var(--fg-subtle); }
.hero__chip-name  { font-size: 13px; font-weight: 400; color: var(--bg); }

@media (max-width: 991px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__visual { display: none; }
}
```

```
<!-- BRICKS NOTES — SECTION 1 (HERO):
  • This is the ONLY section that includes :root tokens. Do not paste the token
    block again on sections 2–13; Bricks deduplicates registered variables.
  • The hero__visual div uses position:relative + absolute chips. After paste,
    confirm the parent section does NOT have overflow:hidden — chips are designed
    to feel slightly layered.
  • Two CTAs: primary button links to #contact (or your contact page slug),
    secondary links to #pricing (or your pricing page slug). Update hrefs.
  • Visual is hidden at ≤991px for a clean single-column mobile hero.
  • Global classes registered here: .container, .container--narrow, .button,
    .button--white, .button--ghost-light, .button--primary-dark,
    .button--outline-dark, .section-header__eyebrow, .section-header,
    .section-header__title, .section-header__subtitle, .card, .underline-link
    — Bricks will reuse these on all subsequent sections automatically.
-->
```

---

## SECTION 2 — WHO WE WORK WITH

```html
<section class="who">
  <div class="container">
    <div class="who__inner">

      <div class="who__header">
        <span class="section-header__eyebrow">Who this is for</span>
        <h2 class="who__title">Built for businesses that are ready to grow.</h2>
      </div>

      <div class="who__content">
        <p class="who__body">We work with service businesses that have real revenue and a real need to grow. Home services, healthcare practices, real estate professionals. Businesses doing over $500k a year that need their website to perform, not just exist.</p>
        <p class="who__body">The ideal client built their business on referrals, has strong revenue, and is hard to find online. Not struggling. Leaving leads on the table. They have a high enough average job value that one or two additional customers per month covers the cost of the retainer.</p>
        <div class="who__verticals">
          <span class="who__tag">Home services and trades</span>
          <span class="who__tag">Dental and medical practices</span>
          <span class="who__tag">Real estate professionals</span>
          <span class="who__tag">Architecture firms</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.who {
  background-color: var(--bg-alt);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.who__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}
.who__header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: var(--space-xl);
}
.who__title {
  font-size: var(--h3);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.2;
}
.who__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.who__body {
  font-size: var(--text-m);
  color: var(--fg-muted);
  line-height: 1.75;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.who__verticals {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-s);
}
.who__tag {
  display: inline-block;
  font-size: var(--text-s);
  font-weight: 600;
  color: var(--fg);
  background-color: var(--bg);
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
  padding-top: var(--space-xs);
  padding-right: var(--space-s);
  padding-bottom: var(--space-xs);
  padding-left: var(--space-s);
  border-radius: var(--radius-full);
}

@media (max-width: 767px) {
  .who__inner { grid-template-columns: 1fr; }
  .who__header { position: static; }
}
```

```
<!-- BRICKS NOTES — SECTION 2 (WHO WE WORK WITH):
  • Left column uses position:sticky for a "scroll-pinned" heading effect.
    If Bricks strips sticky positioning, manually add it via the element's
    Custom CSS tab: position: sticky; top: 4rem;
  • The four .who__tag chips are inline — adjust wording or add/remove as needed.
-->
```

---

## SECTION 3 — WHAT WE DO

```html
<section class="services" id="services">
  <div class="container">

    <div class="section-header">
      <span class="section-header__eyebrow">What we do</span>
      <h2 class="section-header__title">Your full digital presence, under one roof.</h2>
      <p class="section-header__subtitle">Salt Development covers the full digital presence: custom website builds, search engine optimization, AI-driven search visibility (GEO/AEO), and Google Business Profile management. Everything is managed under one retainer. No project handoff, no account manager in between, and no point where the work stops.</p>
    </div>

    <div class="services__grid">

      <div class="card services__card">
        <span class="services__tag">Web Dev</span>
        <h3 class="services__card-title">Custom websites</h3>
        <p class="services__card-body">Built on WordPress with Bricks Builder. Fast, conversion-focused, and structured for search from the first line of code.</p>
      </div>

      <div class="card services__card">
        <span class="services__tag">SEO</span>
        <h3 class="services__card-title">Search engine optimization</h3>
        <p class="services__card-body">Technical SEO, local citations, and content that ranks for searches that bring in paying clients.</p>
      </div>

      <div class="card services__card services__card--dark">
        <span class="services__tag services__tag--on-dark">GEO / AEO</span>
        <h3 class="services__card-title services__card-title--light">GEO / AEO</h3>
        <p class="services__card-body services__card-body--light">When someone asks ChatGPT or Perplexity for a service provider in their area, GEO/AEO is what makes you the answer. Most agencies are not doing this yet.</p>
      </div>

      <div class="card services__card">
        <span class="services__tag">Local</span>
        <h3 class="services__card-title">Google Business Profile</h3>
        <p class="services__card-body">Setup, optimization, and ongoing management. The first thing most local customers see before they ever reach your website.</p>
      </div>

    </div>

    <div class="services__footer">
      <a href="/pricing" class="underline-link">See full pricing →</a>
    </div>

  </div>
</section>
```

```css
.services {
  background-color: var(--bg);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-m);
}
.services__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.services__card--dark {
  background-color: var(--bg-dark);
  border-color: var(--bg-dark);
}
.services__tag {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  background-color: var(--bg-alt);
  color: var(--fg-muted);
  padding-top: 4px;
  padding-right: 10px;
  padding-bottom: 4px;
  padding-left: 10px;
  border-radius: var(--radius-full);
  align-self: flex-start;
}
.services__tag--on-dark {
  background-color: #2A2A2A;
  color: var(--fg-subtle);
}
.services__card-title {
  font-size: var(--h5);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.services__card-title--light { color: var(--bg); }
.services__card-body {
  font-size: var(--text-s);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  flex: 1;
}
.services__card-body--light { color: var(--fg-subtle); }
.services__footer {
  text-align: center;
  margin-top: var(--space-xl);
}
```

```
<!-- BRICKS NOTES — SECTION 3 (WHAT WE DO):
  • The dark "GEO / AEO" card is the featured service — intentional contrast.
  • Footer link points to /pricing — update slug to match your site.
  • .card hover effect (translateY -2px + shadow) is defined globally in Section 1.
-->
```

---

## SECTION 4 — HOW WE WORK

```html
<section class="process" id="process">
  <div class="container">

    <div class="section-header">
      <span class="section-header__eyebrow">How we work</span>
      <h2 class="section-header__title">A process built around your results.</h2>
    </div>

    <div class="process__steps">

      <div class="process__step process__step--first">
        <div class="process__num">01</div>
        <h3 class="process__step-title">Consultation</h3>
        <p class="process__step-body">We spend time learning your business, your goals, and what your current digital presence is missing. You walk away with a clear roadmap of what success looks like in the digital age.</p>
      </div>

      <div class="process__step">
        <div class="process__num">02</div>
        <h3 class="process__step-title">Preparation</h3>
        <p class="process__step-body">We research your market, your competitors, and your ideal clients before a single pixel is designed. Decisions are backed by data, not guesswork.</p>
      </div>

      <div class="process__step">
        <div class="process__num">03</div>
        <h3 class="process__step-title">Development</h3>
        <p class="process__step-body">We build your custom, fully managed website from the ground up using premium, conversion-focused architecture built around your brand and your goals.</p>
      </div>

      <div class="process__step">
        <div class="process__num">04</div>
        <h3 class="process__step-title">Review</h3>
        <p class="process__step-body">Before anything goes live, you approve the final build in full. We do not launch until it is right, because a site that does not represent you does not leave our hands.</p>
      </div>

      <div class="process__step">
        <div class="process__num">05</div>
        <h3 class="process__step-title">Upkeep and promotion</h3>
        <p class="process__step-body">Ongoing monthly content retainers publish structured, AI-optimized blog content designed to rank in Google, ChatGPT, Perplexity, and beyond. The longer you stay, the more authority you own.</p>
      </div>

    </div>
  </div>
</section>
```

```css
.process {
  background-color: var(--bg-alt);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.process__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
}
.process__step {
  padding-top: var(--space-l);
  padding-right: var(--space-l);
  padding-bottom: var(--space-l);
  padding-left: 0;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: var(--border);
}
.process__step--first { border-top-color: var(--fg); }
.process__num {
  font-size: var(--text-s);
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--fg-subtle);
  margin-bottom: var(--space-m);
}
.process__step-title {
  font-size: var(--h5);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: var(--space-s);
  margin-left: 0;
}
.process__step-body {
  font-size: var(--text-s);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}

@media (max-width: 767px) {
  .process__steps { grid-template-columns: 1fr; }
  .process__step  { padding-right: 0; }
}
```

```
<!-- BRICKS NOTES — SECTION 4 (HOW WE WORK):
  • Step 01 has a black top border (.process__step--first) to visually anchor
    the sequence. Steps 02–05 use the lighter --border color.
  • At mobile (≤767px) the grid collapses to a single column.
-->
```

---

## SECTION 5 — MILESTONES

```html
<section class="milestones" id="milestones">
  <div class="container container--narrow">

    <div class="section-header">
      <span class="section-header__eyebrow">Timeline</span>
      <h2 class="section-header__title">What to expect, and when.</h2>
      <p class="section-header__subtitle">Vague timelines are how bad agencies manage expectations they cannot meet. Every engagement has specific milestones:</p>
    </div>

    <div class="milestones__list">

      <div class="milestones__item">
        <div class="milestones__day-col">
          <span class="milestones__day">Day 15</span>
        </div>
        <div class="milestones__body-col">
          <h3 class="milestones__item-title">Technical foundation</h3>
          <p class="milestones__item-body">The site is technically optimized. Load times are improved. Mobile performance is addressed. Visible and measurable before any ranking movement happens.</p>
        </div>
      </div>

      <div class="milestones__item">
        <div class="milestones__day-col">
          <span class="milestones__day">Day 30</span>
        </div>
        <div class="milestones__body-col">
          <h3 class="milestones__item-title">Data and local presence</h3>
          <p class="milestones__item-body">Heat map data shows how visitors interact with the site. Your Google Business Profile is active and posting.</p>
        </div>
      </div>

      <div class="milestones__item">
        <div class="milestones__day-col">
          <span class="milestones__day">Day 60</span>
        </div>
        <div class="milestones__body-col">
          <h3 class="milestones__item-title">Content and indexation</h3>
          <p class="milestones__item-body">Indexation is confirmed. Content is live. Early ranking signals are visible in Google Search Console.</p>
        </div>
      </div>

      <div class="milestones__item">
        <div class="milestones__day-col">
          <span class="milestones__day">Day 90</span>
        </div>
        <div class="milestones__body-col">
          <h3 class="milestones__item-title">First ranking movement</h3>
          <p class="milestones__item-body">First meaningful ranking movement. GBP impressions and calls are measurable. AI visibility baseline is established in Search Atlas.</p>
        </div>
      </div>

    </div>

    <div class="milestones__note">
      <p class="milestones__note-text">When month two looks flat, we explain exactly why: SEO compounds. The first 30 to 60 days are infrastructure. What gets built in that window pays off in months three through six and continues after. We show you exactly what was done and what it means. <strong>No reassurances without receipts.</strong></p>
    </div>

  </div>
</section>
```

```css
.milestones {
  background-color: var(--bg);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.milestones__list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.milestones__item {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: var(--space-l);
  align-items: start;
  padding-top: var(--space-l);
  padding-bottom: var(--space-l);
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: var(--border);
}
.milestones__item:first-child { border-top-color: var(--fg); }
.milestones__day-col {
  padding-top: 4px;
}
.milestones__day {
  font-size: var(--text-s);
  font-weight: 700;
  color: var(--fg);
  letter-spacing: -0.01em;
}
.milestones__body-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.milestones__item-title {
  font-size: var(--h5);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.milestones__item-body {
  font-size: var(--text-s);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.milestones__note {
  margin-top: var(--space-xl);
  padding-top: var(--space-l);
  padding-right: var(--space-l);
  padding-bottom: var(--space-l);
  padding-left: var(--space-l);
  background-color: var(--bg-alt);
  border-radius: var(--radius-l);
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: var(--fg);
}
.milestones__note-text {
  font-size: var(--text-s);
  color: var(--fg-muted);
  line-height: 1.7;
  font-style: italic;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}

@media (max-width: 767px) {
  .milestones__item { grid-template-columns: 1fr; gap: var(--space-xs); }
}
```

```
<!-- BRICKS NOTES — SECTION 5 (MILESTONES):
  • Uses a 2-column grid (day label | content) instead of pseudo-elements,
    so Bricks can render it cleanly without needing Custom CSS workarounds.
  • The note block at the bottom has a left border accent — an important
    credibility statement. Keep this copy verbatim.
  • .container--narrow (720px) is used to keep the timeline readable.
-->
```

---

## SECTION 6 — PRICING

```html
<section class="pricing" id="pricing">
  <div class="container">

    <div class="section-header">
      <span class="section-header__eyebrow">Pricing</span>
      <h2 class="section-header__title">Invested in your growth, not your invoice.</h2>
      <p class="section-header__subtitle">Everything at Salt Development is priced monthly. You are not paying a large upfront fee for something that sits there. You are investing in a system that keeps working, keeps ranking, and keeps improving as your business grows.</p>
    </div>

    <div class="pricing__grid">

      <div class="card pricing__card">
        <div class="pricing__card-top">
          <span class="pricing__badge">Web Dev</span>
          <h3 class="pricing__card-name">Standard website</h3>
          <div class="pricing__price-row">
            <span class="pricing__amount">$240</span>
            <span class="pricing__period">/month</span>
          </div>
        </div>
        <p class="pricing__card-desc">Custom WordPress build, mobile-optimized, performance-tuned, and conversion-focused.</p>
        <a href="/contact" class="button button--outline-dark pricing__cta">Get started</a>
      </div>

      <div class="card pricing__card">
        <div class="pricing__card-top">
          <span class="pricing__badge">SEO</span>
          <h3 class="pricing__card-name">Foundational SEO</h3>
          <div class="pricing__price-row">
            <span class="pricing__amount">$2,400</span>
            <span class="pricing__period">/month</span>
          </div>
        </div>
        <p class="pricing__card-desc">Technical SEO, local citations, content strategy, and monthly reporting.</p>
        <a href="/contact" class="button button--outline-dark pricing__cta">Get started</a>
      </div>

      <div class="card pricing__card pricing__card--featured">
        <div class="pricing__card-top">
          <span class="pricing__badge pricing__badge--on-dark">GEO / AEO</span>
          <h3 class="pricing__card-name pricing__card-name--light">GEO / AEO</h3>
          <div class="pricing__price-row">
            <span class="pricing__amount pricing__amount--light">$4,800</span>
            <span class="pricing__period pricing__period--light">/month</span>
          </div>
        </div>
        <p class="pricing__card-desc pricing__card-desc--light">Structured visibility in ChatGPT, Perplexity, Google AI Overviews, and beyond.</p>
        <a href="/contact" class="button button--white pricing__cta">Get started</a>
      </div>

      <div class="card pricing__card">
        <div class="pricing__card-top">
          <span class="pricing__badge">Local</span>
          <h3 class="pricing__card-name">Google Business Profile</h3>
          <div class="pricing__price-row">
            <span class="pricing__amount">$750</span>
            <span class="pricing__period">/month</span>
          </div>
        </div>
        <p class="pricing__card-desc">Full setup and ongoing management of your local search presence.</p>
        <a href="/contact" class="button button--outline-dark pricing__cta">Get started</a>
      </div>

    </div>

    <div class="pricing__waiver">
      <p class="pricing__waiver-text">Sign up for three months and the setup fee is waived on any service.</p>
    </div>

    <div class="pricing__footer">
      <a href="/pricing" class="underline-link">See the full service lineup and pricing →</a>
    </div>

  </div>
</section>
```

```css
.pricing {
  background-color: var(--bg-alt);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-m);
  align-items: start;
}
.pricing__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.pricing__card--featured {
  background-color: var(--bg-dark);
  border-color: var(--bg-dark);
}
.pricing__card-top {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
}
.pricing__badge {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  background-color: var(--bg-alt);
  color: var(--fg-muted);
  padding-top: 4px;
  padding-right: 10px;
  padding-bottom: 4px;
  padding-left: 10px;
  border-radius: var(--radius-full);
  align-self: flex-start;
}
.pricing__badge--on-dark {
  background-color: #2A2A2A;
  color: var(--fg-subtle);
}
.pricing__card-name {
  font-size: var(--h4);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.pricing__card-name--light { color: var(--bg); }
.pricing__price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.pricing__amount {
  font-size: var(--h2);
  font-weight: 300;
  letter-spacing: -0.03em;
  color: var(--fg);
  line-height: 1;
}
.pricing__amount--light { color: var(--bg); }
.pricing__period {
  font-size: var(--text-s);
  color: var(--fg-muted);
}
.pricing__period--light { color: var(--fg-subtle); }
.pricing__card-desc {
  font-size: var(--text-s);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  flex: 1;
}
.pricing__card-desc--light { color: var(--fg-subtle); }
.pricing__cta {
  width: 100%;
  margin-top: auto;
}
.pricing__waiver {
  text-align: center;
  margin-top: var(--space-l);
  padding-top: var(--space-m);
  padding-right: var(--space-m);
  padding-bottom: var(--space-m);
  padding-left: var(--space-m);
  background-color: var(--bg);
  border-radius: var(--radius-l);
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
}
.pricing__waiver-text {
  font-size: var(--text-s);
  font-weight: 600;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.pricing__footer {
  text-align: center;
  margin-top: var(--space-l);
}
```

```
<!-- BRICKS NOTES — SECTION 6 (PRICING):
  • GEO/AEO card uses dark background to draw the eye — it is your highest-value
    service and intentionally featured.
  • All "Get started" buttons link to /contact — update slugs before launch.
  • "Full service lineup" link points to /pricing — create that page separately.
  • The waiver strip below the grid is a strong conversion nudge — keep it visible.
-->
```

---

## SECTION 7 — THE NUMBER ONE QUESTION

```html
<section class="trust-block" id="trust">
  <div class="container container--narrow">
    <div class="trust-block__inner">

      <span class="section-header__eyebrow trust-block__eyebrow">The question every serious client asks</span>

      <h2 class="trust-block__heading">How do I know this will actually pay for itself?</h2>

      <div class="trust-block__body-wrap">
        <p class="trust-block__body">Your website and search presence exist to bring in business. If they are not doing that, they are a cost, not an investment. The goal of every engagement we take on is to close that gap: more of the right people finding you, more of them contacting you, and a measurable return on what you spend.</p>
        <p class="trust-block__body">Before we propose anything, we look at your current situation and show you exactly where you are losing ground and what it is worth to close it. That conversation is free. You walk away with a clear picture of the opportunity whether or not we work together.</p>
      </div>

      <a href="/contact" class="button button--white trust-block__cta">Find revenue opportunities →</a>

    </div>
  </div>
</section>
```

```css
.trust-block {
  background-color: var(--bg-dark);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.trust-block__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
}
.trust-block__eyebrow { color: var(--fg-subtle); }
.trust-block__heading {
  font-size: var(--h2);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--bg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.15;
}
.trust-block__body-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.trust-block__body {
  font-size: var(--text-m);
  color: var(--fg-subtle);
  line-height: 1.75;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.trust-block__cta { align-self: flex-start; }
```

```
<!-- BRICKS NOTES — SECTION 7 (NUMBER ONE QUESTION):
  • Dark background makes this section feel like a statement, not just content.
    Placed after pricing to address the ROI objection immediately.
  • .container--narrow (720px) keeps the long-form answer readable.
  • CTA links to /contact — update slug before launch.
-->
```

---

## SECTION 8 — TESTIMONIALS

```html
<section class="testimonials" id="testimonials">
  <div class="container">

    <div class="section-header" style="text-align:left; max-width:none; margin-bottom:var(--space-xl);">
      <span class="section-header__eyebrow">What clients say</span>
      <h2 class="section-header__title" style="text-align:left;">Real results from real businesses.</h2>
    </div>

    <div class="testimonials__grid">

      <div class="card testimonials__card">
        <div class="testimonials__mark">&ldquo;</div>
        <p class="testimonials__quote">[Client quote — specific result preferred, e.g. "We went from zero inbound calls to our busiest quarter on record"]</p>
        <div class="testimonials__byline">
          <span class="testimonials__name">[First name, last name]</span>
          <span class="testimonials__role">[Business name] &middot; [City, State]</span>
        </div>
      </div>

      <div class="card testimonials__card">
        <div class="testimonials__mark">&ldquo;</div>
        <p class="testimonials__quote">[Client quote]</p>
        <div class="testimonials__byline">
          <span class="testimonials__name">[First name, last name]</span>
          <span class="testimonials__role">[Business name] &middot; [City, State]</span>
        </div>
      </div>

      <div class="card testimonials__card">
        <div class="testimonials__mark">&ldquo;</div>
        <p class="testimonials__quote">[Client quote]</p>
        <div class="testimonials__byline">
          <span class="testimonials__name">[First name, last name]</span>
          <span class="testimonials__role">[Business name] &middot; [City, State]</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.testimonials {
  background-color: var(--bg);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-m);
}
.testimonials__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.testimonials__mark {
  font-size: 2.5rem;
  color: var(--border);
  line-height: 1;
  font-family: Georgia, 'Times New Roman', serif;
}
.testimonials__quote {
  font-size: var(--text-m);
  color: var(--fg-muted);
  line-height: 1.7;
  font-style: italic;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  flex: 1;
}
.testimonials__byline {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: auto;
}
.testimonials__name {
  font-size: var(--text-s);
  font-weight: 700;
  color: var(--fg);
}
.testimonials__role {
  font-size: var(--text-xs);
  color: var(--fg-subtle);
}
```

```
<!-- BRICKS NOTES — SECTION 8 (TESTIMONIALS):
  • ⚠ REPLACE ALL PLACEHOLDER COPY before launch.
    Each card needs: quote text, full client name, business name, city/state.
  • Add a fourth card if you have four strong quotes — the auto-fit grid handles it.
  • Left-aligned section header uses inline style overrides to break from the
    centered default. After paste, you can adjust alignment in Bricks' Style panel.
-->
```

---

## SECTION 9 — MID-PAGE CTA

```html
<section class="cta-mid" id="free-review">
  <div class="container container--narrow">
    <div class="cta-mid__inner">

      <h2 class="cta-mid__heading">Not sure where to start?</h2>

      <p class="cta-mid__body">We will take a look at your current digital presence and walk you through what we find. No pressure, no pitch. Just a straightforward conversation about where you are, where you could be, and whether we are the right people to help you get there.</p>

      <div class="cta-mid__actions">
        <a href="/contact" class="button button--primary-dark">Find revenue opportunities</a>
        <p class="cta-mid__subtext">Free. 30 minutes. No commitment.</p>
      </div>

    </div>
  </div>
</section>
```

```css
.cta-mid {
  background-color: var(--bg-alt);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.cta-mid__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  align-items: center;
}
.cta-mid__heading {
  font-size: var(--h2);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.15;
}
.cta-mid__body {
  font-size: var(--text-l);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  max-width: 56ch;
}
.cta-mid__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
}
.cta-mid__subtext {
  font-size: var(--text-xs);
  color: var(--fg-subtle);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
```

```
<!-- BRICKS NOTES — SECTION 9 (MID-PAGE CTA):
  • Light gray background creates a visual rest after the dark trust block.
  • "Find revenue opportunities" is the primary CTA phrase used throughout — keep
    all CTA buttons consistent with this wording.
  • CTA links to /contact — update slug before launch.
-->
```

---

## SECTION 10 — FAQ  ⚠ MODE B — BUILD IN BRICKS (no HTML paste)

```
SECTION TYPE: FAQ
BRICKS ELEMENT: Accordion (Nestable)
  → In the Elements panel, search "accordion" and choose "Accordion Nestable"
  → Do NOT use the basic Accordion element

STRUCTURE:
  Section
    Container  [max-width: var(--max-width-narrow); margin: auto]
      Div [class: section-header]
        Span (eyebrow) → "Frequently asked questions"
        Heading h2    → "Frequently asked questions"
      Accordion Nestable [class: faq__accordion]
        Accordion Item × 6  (add each manually)

SETTINGS on the Accordion Nestable element:
  Content → Expand first item: ON
  Content → Independent toggle: ON

─────────────────────────────────────────────
CONTENT — paste exactly as written:

Item 1
  Q: Do you use templates?
  A: No. Every site is built from scratch in Bricks Builder. No recycled
     layouts from previous clients.

Item 2
  Q: Will I work directly with the person building my site?
  A: Yes. There are no account managers. When you have a question, you
     reach Jacob — the person doing the work.

Item 3
  Q: What happens after the site goes live?
  A: The engagement continues. Post-launch SEO, GBP management, and
     ongoing updates are part of the retainer. The launch is not the
     finish line.

Item 4
  Q: How do I know it will actually generate leads?
  A: Every site is built with conversion in mind from the first
     wireframe. Design, copy, and structure are all built to move
     visitors toward a call. Every engagement also has specific 90-day
     milestones so you know what to expect and when.

Item 5
  Q: How long does a build take?
  A: Eight weeks at a standard pace. Under three weeks when the client
     moves quickly.

Item 6
  Q: What is the first step?
  A: A free conversation. We look at your current website, search
     rankings, and competitors, then walk you through what we found in
     a 30-minute call. If the fit is right, we move directly to a
     proposal in the same meeting. No second call, no follow-up deck.

─────────────────────────────────────────────
STYLING NOTES — apply via Classes panel in Bricks:

Section wrapper:
  background-color: var(--bg-alt)
  padding-top: var(--space-2xl)
  padding-bottom: var(--space-2xl)

Container:
  max-width: var(--max-width-narrow)
  margin-left: auto
  margin-right: auto

Accordion item (each item border):
  border-bottom-width: 1px
  border-bottom-style: solid
  border-bottom-color: var(--border)

Accordion title:
  font-size: var(--text-l)
  font-weight: 600
  color: var(--fg)
  padding-top: var(--space-m)
  padding-bottom: var(--space-m)
  font-family: var(--font-sans)

Accordion content:
  font-size: var(--text-m)
  color: var(--fg-muted)
  padding-bottom: var(--space-m)
  line-height: 1.7
  font-family: var(--font-sans)
```

---

## SECTION 11 — RECENT INSIGHTS

```html
<section class="insights" id="insights">
  <div class="container">

    <div class="section-header">
      <span class="section-header__eyebrow">Recent insights</span>
      <h2 class="section-header__title">Practical thinking on search and growth.</h2>
      <p class="section-header__subtitle">Articles on web performance, local SEO, and getting service businesses found online.</p>
    </div>

    <div class="insights__grid">

      <article class="card insights__card">
        <span class="insights__tag">Coming soon</span>
        <h3 class="insights__card-title">The first articles are in progress.</h3>
        <p class="insights__card-summary">Check back soon for practical writing on search, performance, and digital growth for service businesses.</p>
        <div class="insights__card-foot">
          <span class="insights__read-time">— min read</span>
        </div>
      </article>

      <article class="card insights__card insights__card--muted">
        <span class="insights__tag">SEO</span>
        <h3 class="insights__card-title">Coming soon</h3>
        <p class="insights__card-summary">Local SEO strategies that move rankings for service businesses in competitive markets.</p>
        <div class="insights__card-foot">
          <span class="insights__read-time">— min read</span>
        </div>
      </article>

      <article class="card insights__card insights__card--muted">
        <span class="insights__tag">GEO / AEO</span>
        <h3 class="insights__card-title">Coming soon</h3>
        <p class="insights__card-summary">How GEO/AEO is changing the way local service businesses get found by AI-powered search.</p>
        <div class="insights__card-foot">
          <span class="insights__read-time">— min read</span>
        </div>
      </article>

    </div>

    <div class="insights__footer">
      <a href="/insights" class="underline-link">View all insights →</a>
    </div>

  </div>
</section>
```

```css
.insights {
  background-color: var(--bg-alt);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.insights__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-m);
}
.insights__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
}
.insights__card--muted { opacity: 0.45; }
.insights__tag {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  background-color: var(--bg);
  color: var(--fg-muted);
  padding-top: 4px;
  padding-right: 10px;
  padding-bottom: 4px;
  padding-left: 10px;
  border-radius: var(--radius-full);
  align-self: flex-start;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
}
.insights__card-title {
  font-size: var(--h5);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.3;
}
.insights__card-summary {
  font-size: var(--text-s);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  flex: 1;
}
.insights__card-foot { margin-top: auto; }
.insights__read-time {
  font-size: var(--text-xs);
  color: var(--fg-subtle);
}
.insights__footer {
  text-align: center;
  margin-top: var(--space-xl);
}
```

```
<!-- BRICKS NOTES — SECTION 11 (RECENT INSIGHTS):
  • Placeholder cards 2 and 3 use .insights__card--muted (opacity 0.45) to signal
    they are "coming soon" without looking broken.
  • When real articles exist, remove the --muted modifier, update all text, and
    wrap the title in <a href="/insights/[slug]"> for a clickable card.
  • "View all insights" links to /insights — create that archive page separately.
-->
```

---

## SECTION 12 — GET IN TOUCH

```html
<section class="contact" id="contact">
  <div class="container">
    <div class="contact__inner">

      <div class="contact__header">
        <span class="section-header__eyebrow">Get in touch</span>
        <h2 class="contact__title">Have a question before scheduling?</h2>
        <p class="contact__desc">Have a question before scheduling a call? Reach out directly. You will hear back within one business day.</p>
        <a href="mailto:jacob@devbysalt.com" class="underline-link contact__email">jacob@devbysalt.com</a>
      </div>

      <div class="contact__form-wrap">
        <form class="contact__form" action="#" method="POST">

          <div class="contact__field">
            <label class="contact__label" for="cf-name">Name</label>
            <input class="contact__input" type="text" id="cf-name" name="name" placeholder="Your name" required>
          </div>

          <div class="contact__field">
            <label class="contact__label" for="cf-email">Email</label>
            <input class="contact__input" type="email" id="cf-email" name="email" placeholder="you@example.com" required>
          </div>

          <div class="contact__field">
            <label class="contact__label" for="cf-message">How can we help?</label>
            <textarea class="contact__input contact__textarea" id="cf-message" name="message" placeholder="Tell us about your business and what you're trying to achieve…" rows="5" required></textarea>
          </div>

          <button type="submit" class="contact__submit">Send message</button>

        </form>

        <div class="contact__alt">
          <a href="/contact#schedule" class="underline-link">Rather talk than type? Schedule a free 30-minute call →</a>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.contact {
  background-color: var(--bg);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}
.contact__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  position: sticky;
  top: var(--space-xl);
}
.contact__title {
  font-size: var(--h3);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.2;
}
.contact__desc {
  font-size: var(--text-m);
  color: var(--fg-muted);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
.contact__email { align-self: flex-start; }
.contact__form-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  background-color: var(--bg-alt);
  border-width: 1px;
  border-style: solid;
  border-color: var(--border);
  border-radius: var(--radius-l);
  padding-top: var(--space-l);
  padding-right: var(--space-l);
  padding-bottom: var(--space-l);
  padding-left: var(--space-l);
}
.contact__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.contact__label {
  font-size: var(--text-s);
  font-weight: 600;
  color: var(--fg);
  font-family: var(--font-sans);
}
.contact__input {
  font-size: var(--text-s);
  font-family: var(--font-sans);
  color: var(--fg);
  background-color: var(--bg);
  border-width: 1.5px;
  border-style: solid;
  border-color: var(--border);
  border-radius: var(--radius-m);
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  outline: none;
  transition: border-color 0.2s ease;
  width: 100%;
}
.contact__input:focus { border-color: var(--fg); }
.contact__textarea {
  resize: vertical;
  min-height: 120px;
}
.contact__submit {
  font-family: var(--font-sans);
  font-size: var(--text-m);
  font-weight: 600;
  background-color: var(--fg);
  color: var(--bg);
  border-width: 0;
  border-style: none;
  border-color: transparent;
  padding-top: var(--space-s);
  padding-right: var(--space-l);
  padding-bottom: var(--space-s);
  padding-left: var(--space-l);
  border-radius: var(--radius-m);
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 100%;
}
.contact__submit:hover { opacity: 0.85; }
.contact__alt { text-align: center; }

@media (max-width: 767px) {
  .contact__inner { grid-template-columns: 1fr; }
  .contact__header { position: static; }
}
```

```
<!-- BRICKS NOTES — SECTION 12 (GET IN TOUCH):
  • Connect this form to your preferred form handler (WPForms, Gravity Forms,
    Fluent Forms, etc.) by replacing action="#" with the handler action URL.
    Bricks will need the native Form element if you want built-in submission
    handling — this HTML form is suitable for custom handlers or 3rd-party services.
  • The contact__submit uses <button type="submit"> — the only valid exception to
    the "always use <a class='button'>" rule (form submit requires a true button).
  • Email address jacob@devbysalt.com is hard-coded — update if it changes.
  • Left column uses position:sticky; if Bricks strips it, add via Custom CSS tab.
-->
```

---

## SECTION 13 — FINAL CTA

```html
<section class="cta-final" id="start">
  <div class="container container--narrow">
    <div class="cta-final__inner">

      <h2 class="cta-final__heading">Let's see if we're a good fit.</h2>

      <p class="cta-final__body">A 30-minute call covers your goals, your current presence, and whether Salt Development makes sense for your business. No pressure. If we are not the right fit, we will say that too.</p>

      <div class="cta-final__actions">
        <a href="/contact" class="button button--white">Find revenue opportunities</a>
        <p class="cta-final__subtext">Free. No commitment. 30 minutes.</p>
      </div>

    </div>
  </div>
</section>
```

```css
.cta-final {
  background-color: var(--bg-dark);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  font-family: var(--font-sans);
}
.cta-final__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  align-items: center;
}
.cta-final__heading {
  font-size: var(--h1);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--bg);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  line-height: 1.1;
}
.cta-final__body {
  font-size: var(--text-l);
  color: var(--fg-subtle);
  line-height: 1.65;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  max-width: 52ch;
}
.cta-final__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
}
.cta-final__subtext {
  font-size: var(--text-xs);
  color: var(--fg-subtle);
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}
```

```
<!-- BRICKS NOTES — SECTION 13 (FINAL CTA):
  • This is the last thing a visitor sees before leaving. Dark, minimal, confident.
  • .cta-final__heading uses font-weight:300 (light) intentionally — the contrast
    between the heavy body copy above and this airy heading creates visual emphasis.
  • CTA links to /contact — update slug before launch.
  • "Find revenue opportunities" appears on three CTAs (hero, mid, final) — this
    repetition is intentional for consistency and recall.
-->
```

---

## PASTE ORDER REFERENCE

| # | Section | Background | Mode |
|---|---------|------------|------|
| 1 | Hero | Black | A — includes `:root` tokens |
| 2 | Who we work with | Gray50 | A |
| 3 | What we do | White | A |
| 4 | How we work | Gray50 | A |
| 5 | Milestones | White | A |
| 6 | Pricing | Gray50 | A |
| 7 | The number one question | Black | A |
| 8 | Testimonials | White | A |
| 9 | Mid-page CTA | Gray50 | A |
| 10 | FAQ | Gray50 | **B — build in Bricks** |
| 11 | Recent insights | Gray50 | A |
| 12 | Get in touch | White | A |
| 13 | Final CTA | Black | A |

**Before launch checklist:**
- [ ] Replace all testimonial placeholder text with real client quotes
- [ ] Update all `href="/contact"` and `href="/pricing"` to match your actual page slugs
- [ ] Connect the contact form (Section 12) to your form handler
- [ ] Update `jacob@devbysalt.com` if the email address changes
- [ ] Add Inter font via your theme's Google Fonts settings or enqueue it in WordPress
- [ ] Remove `.insights__card--muted` from insight cards when real articles are published
