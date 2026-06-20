# Allum Strategies website, build brief for Claude Code

This folder has everything you need:
- `brand/design.md` is the visual system. Hard constraints: colors, type, shape, components.
- `brand/allum-logo.svg` is the logo lockup.
- `content/*.md` are the final, approved copy and structure for each page. Use this copy. Do not invent your own.
- The existing `../seo-agency-landing.html` is a layout reference for quality and interactions only. Do not copy its content, brand, voice, or data.

---

## Paste this prompt into Claude Code

> Build the Allum Strategies marketing site as a set of static, single-file HTML pages (one `.html` per page, all CSS in a `<style>` block, minimal vanilla JS). This is a design prototype I will later port to WordPress + Bricks, so keep the structure clean and component-based.
>
> Authority order, follow exactly:
> 1. `brand/design.md` controls all visual design (color, type, spacing, shape, components). These are hard constraints.
> 2. `content/*.md` controls all copy, section structure, pricing, SEO metadata, and FAQ. Use that copy verbatim where it's written as final; placeholders marked `[like this]` stay as visible placeholders.
> 3. `../seo-agency-landing.html` is a reference for interaction quality only (sticky nav, scroll reveal, FAQ accordion, card hover, responsive grid). Do not reuse its colors, fonts, gradients, copy, pricing, stats, or testimonials.
>
> Build these pages: Home (`index.html`), Services (`services.html`), About (`about.html`), Insights (`insights.html`), Contact (`contact.html`), Privacy (`privacy.html`), Terms (`terms.html`). Shared sticky header and footer on every page, matching nav.
>
> Hard rules:
> - White-first design. Background `#ffffff`, off-black text `#101010`, ONE accent: Luxury Blue `#03324f`. No gradients, glows, drop-shadow drama, or second accent color.
> - Hanken Grotesk only (Google Fonts). Headings weight 400, Title Case (capitalize each major word). Body, lead text, captions, and labels stay sentence case. Hierarchy from size and whitespace, not bold.
> - Primary CTAs are Luxury Blue pill buttons with white text. One primary CTA per view. Button label: "Book a call". Link it to my Cal.com URL (leave a clearly marked `[CAL_LINK]` placeholder).
> - Lucide line icons inside rounded Blue Pale `#DCE8F2` chips, only where they aid scanning.
> - Generous whitespace, hairline borders `#E2DFD7`, soft low shadows, rounded cards (~24px), full-pill buttons.
> - Use the exact CSS tokens from `design.md` section 5 to 7.
> - No fake data. Do not invent stats, client counts, star ratings, logos, or testimonials. Where I don't have proof yet, use the visible placeholders from the content docs.
> - Copy rules: blunt, plain, confident. No hype, no buzzwords, no em dashes (use commas, colons, or periods). Don't add copy that isn't in the content docs.
>
> Accessibility and performance: semantic HTML, one H1 per page, WCAG AA contrast, keyboard-focus styles, `prefers-reduced-motion` support, lazy-load any images, no heavy libraries.
>
> Add the JSON-LD schema noted in each content doc (Organization + WebSite on Home, Service + Offer on Services, AboutPage + Person on About, FAQPage on the FAQ block, etc.).
>
> Start with `index.html`. Before building, read `brand/design.md` and `content/homepage-content.md` in full, then show me the homepage section order you're going to build so I can confirm before you write code.

---

## Homepage section mapping (from content/homepage-content.md)

Build the homepage in this order. The Rankwell layout has analogous sections you can adapt structurally, noted in brackets.

1. Hero [like Rankwell hero, restyled to brand]
   - H1: "We get your business on the front page of Google. You don't pay until we do."
   - Support line: "Get found by customers who have never heard your name."
   - Primary CTA: Book a call. Subtext about qualifying.
   - Optional: a calm ranking-visual in brand colors, NOT the navy SaaS dashboard. Keep it simple or omit.

2. Social proof strip [like Rankwell stats/testimonials, but results not quotes]
   - Heading: "Results, not promises"
   - Three result blocks: AutoShop, Financial Planner, Tech Company. ALL metrics are placeholders. Do not fabricate numbers.

3. The offer, how it works [like Rankwell process steps]
   - Heading: "How the guarantee works"
   - Three steps: audit first, build, reach the front page.

4. Services [like Rankwell service cards]
   - SEO (from $1,200/mo), Google Business Profile (from $750/mo), AI/LLM search visibility (from $4,800/mo), Custom websites (from $2,000). Link cards to services.html anchors.

5. Meet the founder [no Rankwell equivalent, build new]
   - First-person copy from the doc. Space for a real photo of Jacob.

6. Final CTA + FAQ [like Rankwell CTA + FAQ]
   - Final CTA: "Find out if you qualify", Book a call.
   - FAQ: the three Q&As in the doc (guarantee mechanics incl. onboarding fee, timeline, websites).

Other pages: follow their content docs directly. Services page has the full priced tiers (do not use the homepage's "from" summary there). Footer links: Services, About, Insights, Contact, Privacy, Terms.

---

## Three conflicts to resolve before/while building

The brand kit (`design.md`) predates some of the content decisions we locked. Where they disagree, the content docs win, but flag these so the output is consistent:

1. Headings case. DECIDED: Title Case for all display and section headings (H1 to H4), per the brand kit. Body, lead paragraphs, captions, and UI labels stay sentence case. This overrides the general sentence-case writing rule for headings only.

2. Audience. `design.md` says "Phoenix service businesses." We locked US-wide service businesses. Use US-wide. Don't put Phoenix-specific language in the copy.

3. Voice person. `design.md` says Allum speaks in third person ("Allum builds"). The new content uses "we" plus first-person in the founder section. Use the new content as written: "we" in marketing sections, "I" only in Meet the founder.

---

## Definition of done

- All 7 pages build and look like the brand kit, not like Rankwell.
- Every section's copy matches the content docs. No invented copy, stats, or testimonials.
- No em dashes anywhere. No gradients, glows, or second accent.
- One primary "Book a call" CTA pattern, pointing to `[CAL_LINK]`.
- Passes a quick check: does it look sharp, fast, white-first, and intentional? If it looks like a generic agency template, it's wrong.
