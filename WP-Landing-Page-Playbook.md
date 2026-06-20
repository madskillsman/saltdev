# WordPress Landing-Page Playbook (Local + GeneratePress)

A repeatable process for turning a standalone HTML/CSS/JS design into a **pixel-faithful, client-editable WordPress page** — built as a full-canvas template + native Gutenberg blocks, with all styling/JS in a child theme. Battle-tested on Local by Flywheel with a GeneratePress child theme, but the pattern works on most classic (non-FSE) themes.

> **TL;DR of the architecture**
> 1. A **child theme** holds all CSS/JS and a **full-canvas page template** (no theme header/footer).
> 2. **Site chrome** (nav, footer, complex graphics/charts) lives in the **template** (PHP — not subject to content sanitization).
> 3. **Page copy** lives in the page as **native core blocks** (heading/paragraph/list/button/details).
> 4. **All icons/graphics** are drawn in **CSS** (mask-image / background SVG) — so there is **zero inline SVG in post content** (KSES-proof).
> 5. CSS is **scoped under one wrapper class** so it never bleeds into the rest of the site.

---

## 0. Pick your names (per project)

Choose these once and stay consistent:

| Placeholder | Example used here | Meaning |
|---|---|---|
| `{PREFIX}` | `rwl` | Wrapper/scoping class + asset filename prefix |
| `{SLUG}` | `rankwell` | Page slug/URL |
| `{TEMPLATE}` | `template-rankwell-editable.php` | Page template filename |
| `{CHILD}` | `generatepress-child` | Child theme folder |

Everything below is scoped under `.{PREFIX}` and prefixed assets `{PREFIX}.css` / `{PREFIX}.js`.

---

## 1. Local by Flywheel: discover the moving parts

Local doesn't put `wp` or `php` on your PATH, and the MySQL socket has a **random run-ID that changes** when the site restarts. Discover them each session:

```bash
# PHP binary (version folder changes over time):
ls -d "$HOME/Library/Application Support/Local/lightning-services/"php-*/bin/*/bin/php

# Running MySQL socket for the site (run-ID like 5LQSp8IhX changes per start):
find "$HOME/Library/Application Support/Local/run" -name "mysqld.sock"

# DB creds (Local default is local/root/root):
grep -E "DB_(NAME|USER|PASSWORD|HOST)" "/Users/<you>/Local Sites/<site>/app/public/wp-config.php"
```

Set them as shell vars for the session (paths contain spaces — quote them):

```bash
PHP="/Users/<you>/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php"
SOCK="/Users/<you>/Library/Application Support/Local/run/<RUNID>/mysql/mysqld.sock"
WPROOT="/Users/<you>/Local Sites/<site>/app/public"
```

**Why the socket matters:** WP-CLI/PHP connect to `localhost`, which uses PHP's default mysqli socket — *not* Local's. Point PHP at Local's socket with ini overrides:

```bash
"$PHP" -d mysqli.default_socket="$SOCK" -d pdo_mysql.default_socket="$SOCK" <script>.php
```

> WP-CLI works too, but downloading `wp-cli.phar` may be blocked. The **PHP bootstrap** approach in §6 needs nothing extra and uses WordPress's own functions.

---

## 2. Child theme skeleton

`{CHILD}/style.css` (header only — real CSS goes in `assets/`):

```css
/*
Theme Name:   <Name> Child
Template:     generatepress
Version:      1.0.0
*/
```

`{CHILD}/functions.php` — enqueue parent style + (later) the per-template assets:

```php
<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function child_enqueue_parent() {
	wp_enqueue_style( 'generatepress-parent-style',
		get_template_directory_uri() . '/style.css', array(),
		wp_get_theme( get_template() )->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'child_enqueue_parent' );
```

Activate the child theme (dashboard → Appearance → Themes, or via the bootstrap in §6 with `switch_theme('{CHILD}')`).

---

## 3. The full-canvas page template

`{CHILD}/{TEMPLATE}` — renders the page's blocks with **no** `get_header()/get_footer()`, so none of the parent theme's chrome appears. Put **nav, footer, and any complex graphic** here.

```php
<?php
/*
Template Name: <Name> Landing (Editable)
*/
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<?php wp_head(); ?>
</head>
<body <?php body_class( '{PREFIX}-canvas' ); ?>>
<?php wp_body_open(); ?>
<div class="{PREFIX}">

	<header class="nav" id="nav"> ... your nav SVG/markup ... </header>

	<main class="{PREFIX}-content">
	<?php while ( have_posts() ) : the_post(); the_content(); endwhile; ?>
	</main>

	<footer> ... your footer SVG/markup ... </footer>

</div>
<?php wp_footer(); ?>
</body>
</html>
```

Notes:
- Keeping `wp_head()/wp_footer()` keeps the **admin bar** and plugins working. (Omit them only if you want a 100% byte-exact static render with no admin bar.)
- The interactive toggle button etc. lives here as real HTML — JS binds to it by `id`.

---

## 4. Enqueue assets + strip the parent theme CSS (per template)

Add to `functions.php`. This loads your fonts/CSS/JS **only** on the template and removes GeneratePress's stylesheet so your design is exact.

```php
function {PREFIX}_assets() {
	if ( ! is_page_template( '{TEMPLATE}' ) ) { return; }
	wp_dequeue_style( 'generate-style' );
	wp_dequeue_style( 'generate-style-grid' );
	wp_dequeue_script( 'generate-menu' );

	$dir = get_stylesheet_directory_uri();
	$ver = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( '{PREFIX}-fonts', 'https://fonts.googleapis.com/css2?family=...&display=swap', array(), null );
	wp_enqueue_style( '{PREFIX}-css', $dir . '/assets/{PREFIX}.css', array(), $ver );
	wp_enqueue_script( '{PREFIX}-js', $dir . '/assets/{PREFIX}.js', array(), $ver, true );
}
add_action( 'wp_enqueue_scripts', '{PREFIX}_assets', 100 );

// GeneratePress prints its stylesheet in a way that outruns dequeue ordering,
// so also strip the tag at render time (foolproof):
function {PREFIX}_strip_theme_css( $tag, $handle ) {
	$kill = array( 'generate-style', 'generate-style-grid', 'generatepress-parent-style' );
	if ( in_array( $handle, $kill, true ) && is_page_template( '{TEMPLATE}' ) ) { return ''; }
	return $tag;
}
add_filter( 'style_loader_tag', '{PREFIX}_strip_theme_css', 10, 2 );
```

> **Gotcha:** plain `wp_dequeue_style('generate-style')` was *not* enough — GP enqueues late. The `style_loader_tag` filter is the reliable kill switch.

---

## 5. CSS conventions (`assets/{PREFIX}.css`)

**Scope everything under `.{PREFIX}`.** Only these stay global: `:root` tokens, `[data-theme="dark"]` overrides, `@keyframes`, and `html { scroll-behavior }`.

```css
/* Canvas + scoped reset */
body.{PREFIX}-canvas { margin:0; background:var(--bg); overflow-x:clip; }
.{PREFIX}, .{PREFIX} *, .{PREFIX} *::before, .{PREFIX} *::after { box-sizing:border-box; }

/* CRITICAL on classic themes (no theme.json): WP wraps every group block in a
   legacy .wp-block-group__inner-container, which breaks grids/flex. Collapse it: */
.{PREFIX} .wp-block-group__inner-container { display: contents; }

/* Scope generic element selectors so they can't hit the admin bar / other pages */
.{PREFIX} h1, .{PREFIX} h2, .{PREFIX} h3 { ... }
.{PREFIX} section { ... }
.{PREFIX} footer { ... }   /* <-- 'footer'/'section' are generic; always scope them */
```

### Icons as CSS (the key to zero inline SVG)

Use an empty/native element with a class; draw the glyph with `mask-image` (color follows `background`, so it themes for free):

```css
.{PREFIX} .ic { width:54px; height:54px; border-radius:14px; position:relative; background:<box>; }
.{PREFIX} .ic::before {
  content:""; position:absolute; inset:0; margin:auto; width:26px; height:26px;
  background: var(--accent);                      /* icon color */
  -webkit-mask: var(--ic) center/contain no-repeat;
          mask: var(--ic) center/contain no-repeat;
}
.{PREFIX} .ic--tech { --ic: url("data:image/svg+xml,%3Csvg ... stroke='%23000' ... /%3E"); }
```

Rules for the data-URI mask:
- Encode `<` `>` `#` as `%3C` `%3E` `%23`; spaces inside the quoted `url("...")` are fine.
- **Stroke icons:** `fill='none' stroke='%23000'` (alpha = the strokes). **Filled icons** (e.g. star): `fill='%23000'`.
- Repeat a shape (e.g. 5 stars): one element, `mask-repeat:repeat-x; mask-size:<w> <h>;` fixed width = N × size.

### Other native-friendly tricks
- **Step numbers:** `.steps{counter-reset:step}` + `.step{counter-increment:step}` + `.step::before{content:counter(step)}`. (Move any connector line to `::after` to avoid clashing with `::before`.)
- **Core buttons:** style `.{PREFIX} .wp-block-button__link` like your `.btn`; put modifiers on the button block's `className` (lands on `.wp-block-button`), e.g. `.wp-block-button.btn-primary .wp-block-button__link`. Add an arrow via `::after` mask + `btn-arrow` class.
- **Price suffix** (`/mo`): `.price--mo::after{content:"/mo"}`.
- **Complex graphic / chart:** export to an SVG file in `assets/` and show via `background-image` on a `::after` (decorative). Colors are baked (CSS vars don't reach an external SVG) — make a `[data-theme="dark"]` variant if needed.

---

## 6. JS conventions (`assets/{PREFIX}.js`)

Guard every lookup so the script is inert if a section is edited away. **Counters read their own text** (so the number is a native, editable heading — no `data-*`):

```js
function animateCount(el){
  var m = (el.getAttribute('data-final') || el.textContent || '').trim()
            .match(/^(\D*?)([\d.,]+)(.*)$/);
  if(!m) return;
  el.setAttribute('data-final', el.textContent.trim());   // remember authored value
  var prefix=m[1], suffix=m[3], target=parseFloat(m[2].replace(/,/g,''));
  /* ... rAF tween from 0 → target, re-add prefix/suffix ... */
}
document.querySelectorAll('.num').forEach(/* observe + animateCount */);
```

Theme toggle sets `data-theme` on `<html>` and persists to `localStorage`; sticky-nav toggles a `.scrolled` class; reveal uses `IntersectionObserver` adding `.in`.

---

## 7. Block authoring rules (what's native vs CSS)

Author the page as core blocks. Decide per element:

| Element | Approach |
|---|---|
| Headings, body, bullet lists, FAQ | **Native** `wp:heading`, `wp:paragraph`, `wp:list`, **`wp:details`** (renders `<details>`) |
| Buttons | **Native** `wp:button` inside `wp:buttons`; style via classes |
| Section wrappers | `wp:group {"tagName":"section","className":"hero","anchor":"services"}` → `<section id="services" class="...">` |
| Layout containers (grids) | `wp:group` with a class; **CSS** does the grid (remember `display:contents` fix) |
| Icons, stars, chart, step numbers | **CSS** (mask/counter) — element carries only a class |
| Counters | Native heading; JS parses the text |
| Nav, footer, big graphic | **Template** (PHP), not content |

Pattern for a card (icon via CSS, text native):

```html
<!-- wp:group {"tagName":"article","className":"card","layout":{"type":"default"}} -->
<article class="wp-block-group card">
  <!-- wp:group {"className":"ic ic--tech","layout":{"type":"default"}} --><div class="wp-block-group ic ic--tech"></div><!-- /wp:group -->
  <!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Technical SEO</h3><!-- /wp:heading -->
  <!-- wp:paragraph --><p>…</p><!-- /wp:paragraph -->
  <!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>…</li><!-- /wp:list-item --></ul><!-- /wp:list -->
</article>
<!-- /wp:group -->
```

---

## 8. Create / update the page (PHP bootstrap)

Write the block markup to a temp file, then run this with the PHP+socket invocation. **Set an admin user and remove KSES** or inline SVG (and sometimes other markup) will be stripped on save.

```php
<?php // create-page.php  (place in wp root, delete after)
require __DIR__ . '/wp-load.php';

// KSES strips <svg> etc. unless the current user can unfiltered_html:
$admin = get_users(['role'=>'administrator','number'=>1,'fields'=>'ID']);
if ($admin) { wp_set_current_user((int)$admin[0]); }
kses_remove_filters();

$content = file_get_contents(__DIR__ . '/blocks.html');   // your block markup
$existing = get_page_by_path('{SLUG}', OBJECT, 'page');
$arr = [
  'post_title'=>'<Title>', 'post_name'=>'{SLUG}', 'post_status'=>'publish',
  'post_type'=>'page', 'post_content'=>$content,
];
if ($existing) { $arr['ID']=$existing->ID; $id=wp_update_post($arr,true); }
else { $id=wp_insert_post($arr,true); }

update_post_meta($id, '_wp_page_template', '{TEMPLATE}');
echo is_wp_error($id) ? $id->get_error_message() : ('OK '.get_permalink($id)."\n");
```

Run + clean up:

```bash
"$PHP" -d mysqli.default_socket="$SOCK" "$WPROOT/create-page.php"
rm "$WPROOT/create-page.php" "$WPROOT/blocks.html"
```

> If you keep all SVG in the **template/CSS** (recommended), the content has no SVG and KSES is a non-issue — meaning **Editor-role clients can re-save safely**. The admin/KSES step is only needed if you (against this playbook) leave inline SVG in content.

### GeneratePress per-page layout (only if you *don't* use the canvas template)
If you render through the normal theme instead, force full-width/no-sidebar:
```php
update_post_meta($id, '_generate-sidebar-layout', 'no-sidebar');
update_post_meta($id, '_generate-full-width-content', 'true');
```
and as a hard override: `add_filter('generate_sidebar_layout', fn($l)=> is_page('{SLUG}') ? 'no-sidebar' : $l);`

---

## 9. Verify (no browser needed)

```bash
URL="http://<site>.local/{SLUG}/"
H="$(curl -s "$URL")"
curl -s -o /dev/null -w "status: %{http_code}\n" "$URL"
printf '%s' "$H" | grep -c "<!-- wp:"                                   # 0 = blocks rendered
printf '%s' "$H" | grep -oE "generatepress/assets/css/[^\"']*\.css"     # empty = GP CSS stripped
printf '%s' "$H" | grep -oc "wp-block-group ic ic--"                    # icon boxes present
curl -s -o /dev/null -w "asset: %{http_code}\n" "http://<site>.local/wp-content/themes/{CHILD}/assets/{PREFIX}.css"
```
Confirm in content: `wp:html` count = 0 and `<svg>` count = 0 (all-native, KSES-safe).

---

## 10. Gotchas cheat-sheet (the things that cost time)

1. **Local socket is dynamic** — re-find `mysqld.sock` each session; pass it via `-d mysqli.default_socket`.
2. **KSES eats `<svg>`** when saving as no/low-priv user → set admin + `kses_remove_filters()`, or keep SVG out of content entirely (best).
3. **`.wp-block-group__inner-container`** appears on themes without `theme.json` and breaks grids → `.{PREFIX} .wp-block-group__inner-container{display:contents}`.
4. **`generate-style` resists `wp_dequeue_style`** → also strip via `style_loader_tag` filter.
5. **Scope generic selectors** (`section`, `footer`, `*`, `a`, `h1-4`) under `.{PREFIX}` or you'll wreck other pages / the admin bar.
6. **External SVG backgrounds can't use CSS vars** → bake colors; add a dark-mode variant if needed.
7. **`wp:details`** is the native FAQ block — hide its marker, add your own chevron via `summary::after`, style the answer with `details > :not(summary)`.

---

## 11. Kickoff prompt (paste this to Claude Code on a new site)

> I have a standalone landing page at `<path-to.html>`. Turn it into a **client-editable WordPress page** on my Local site at `/Users/<you>/Local Sites/<site>`, following my playbook `WP-Landing-Page-Playbook.md`. Specifically:
> - Create/confirm a GeneratePress child theme.
> - Build a **full-canvas page template** (no theme header/footer); put the **nav, footer, and any chart/graphic** in the template.
> - Move all CSS/JS into `assets/{PREFIX}.css` / `{PREFIX}.js`, **scoped under `.{PREFIX}`**, enqueued only on that template, and **strip GeneratePress's stylesheet** for it.
> - Rebuild the page body as **native Gutenberg blocks only** (heading/paragraph/list/button/details). **No Custom HTML blocks** — render every icon/graphic in **CSS** (mask-image), counters as headings parsed by JS, step numbers via CSS counters.
> - Create the page via a PHP bootstrap (use Local's bundled PHP + the mysqld.sock), assign the template, then verify with curl that there are **0 `wp:html` blocks and 0 inline `<svg>` in content**, GP CSS is gone, and the page returns 200.
> Use prefix `{PREFIX}`, slug `{SLUG}`. Tell me what to hard-refresh at the end.

---

*Reference implementation: the `rankwell` page on the `testbench` Local site — child theme `generatepress-child`, prefix `rwl`, template `template-rankwell-editable.php`.*
