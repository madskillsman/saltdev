/* Builds home.css for the Rankwell page as Bricks page custom CSS.
   Icons from the original inline SVGs are emitted as URL-encoded
   mask/background data-URIs so they render through the CSS channel
   (the html/svg element channel is signature-gated and unusable). */
const fs = require('fs');

// --- icon helper: encode an SVG body into a data URI ---------------------
function uri(inner, { vb = '0 0 24 24', fill = 'none', stroke = '#000', sw = 2 } = {}) {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='${vb}' fill='${fill}'` +
    (fill === 'none'
      ? ` stroke='${stroke}' stroke-width='${sw}' stroke-linecap='round' stroke-linejoin='round'`
      : '') +
    `>${inner}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// stroke (line) icons -----------------------------------------------------
const chartUp = uri("<path d='M3 17l5-5 4 4 8-9'/><path d='M21 7v5'/><path d='M16 7h5'/>", { sw: 2.4 });
const arrowR  = uri("<path d='M5 12h14M13 6l6 6-6 6'/>", { sw: 2.2 });
const check   = uri("<path d='M20 6L9 17l-5-5'/>", { sw: 3 });
const upArrow = uri("<path d='M12 19V5M5 12l7-7 7 7'/>", { sw: 3 });
const chev    = uri("<path d='M6 9l6 6 6-6'/>", { sw: 2.4 });
const sun     = uri("<circle cx='12' cy='12' r='4'/><path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'/>", { sw: 2 });
const moon    = uri("<path d='M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z'/>", { sw: 2 });
const icTech  = uri("<path d='M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.5 1.5'/><path d='M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7L12 19'/>", { sw: 2 });
const icCont  = uri("<path d='M4 4h16v14H7l-3 3z'/><path d='M8 9h8M8 13h5'/>", { sw: 2 });
const icLink  = uri("<path d='M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z'/>", { sw: 2 });
const icLocal = uri("<path d='M3 3v18h18'/><rect x='7' y='11' width='3' height='7'/><rect x='12' y='7' width='3' height='11'/><rect x='17' y='13' width='3' height='5'/>", { sw: 2 });
const icAudit = uri("<circle cx='11' cy='11' r='7'/><path d='M21 21l-4.3-4.3'/>", { sw: 2 });
const icRep   = uri("<path d='M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/>", { sw: 2 });

// fill icons --------------------------------------------------------------
const starPath = "M12 2l2.9 6.3 6.8.6-5.1 4.5 1.5 6.7L12 17l-6 3.6 1.5-6.7L2.4 8.9l6.8-.6z";
const star5row = uri(
  Array.from({ length: 5 }, (_, i) => `<path transform='translate(${i * 24} 0)' d='${starPath}'/>`).join(''),
  { vb: '0 0 120 24', fill: '#000' }
);
const brand1 = uri("<circle cx='12' cy='12' r='10'/>", { fill: '#000' });
const brand2 = uri("<rect x='3' y='3' width='18' height='18' rx='5'/>", { fill: '#000' });
const brand3 = uri("<path d='M12 2l10 18H2z'/>", { fill: '#000' });
const brand4 = uri("<path d='M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z'/>", { fill: '#000' });
const brand5 = uri("<circle cx='8' cy='12' r='6'/><circle cx='16' cy='12' r='6'/>", { fill: '#000' });
const brand6 = uri("<rect x='4' y='4' width='16' height='16' rx='8'/>", { fill: '#000' });
const socX  = uri("<path d='M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L6 22H3l7.6-8.6L2.5 2H9l4.5 6.7zM17.8 20h1.7L7.3 4H5.5z'/>", { fill: '#000' });
const socLi = uri("<path d='M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.74 2.6 4.74 6V21H18v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H10z'/>", { fill: '#000' });
const socYt = uri("<path d='M23 12s0-3.3-.42-4.9a2.56 2.56 0 00-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.78.3a2.56 2.56 0 00-1.8 1.8C1 8.7 1 12 1 12s0 3.3.42 4.9a2.56 2.56 0 001.8 1.8C4.8 19 12 19 12 19s7.2 0 8.78-.3a2.56 2.56 0 001.8-1.8C23 15.3 23 12 23 12zM9.8 15.3V8.7l6 3.3z'/>", { fill: '#000' });

// hero dashboard area chart (background-image, colors baked) ---------------
const chartBg =
  "url(\"data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 120' preserveAspectRatio='none'>" +
      "<defs><linearGradient id='a' x1='0' y1='0' x2='0' y2='1'>" +
      "<stop offset='0%' stop-color='#0369A1' stop-opacity='0.35'/>" +
      "<stop offset='100%' stop-color='#0369A1' stop-opacity='0'/></linearGradient></defs>" +
      "<path d='M0,100 L40,92 L80,80 L120,84 L160,60 L200,52 L240,34 L280,26 L320,12 L320,120 L0,120 Z' fill='url(%23a)'/>" +
      "<path d='M0,100 L40,92 L80,80 L120,84 L160,60 L200,52 L240,34 L280,26 L320,12' fill='none' stroke='#0369A1' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/>" +
      "<circle cx='320' cy='12' r='4' fill='#0369A1'/></svg>"
  ).replace(/%23/g, '%23') + // keep encoded hashes
  "\")";

// --- register every icon URI as a :root variable (emit once, reference twice) ---
const ICONS = {
  '--i-arrow': arrowR, '--i-chartup': chartUp, '--i-sun': sun, '--i-moon': moon,
  '--i-star5': star5row, '--i-up': upArrow, '--i-chev': chev, '--i-check': check,
  '--i-tech': icTech, '--i-content': icCont, '--i-links': icLink, '--i-local': icLocal,
  '--i-audit': icAudit, '--i-report': icRep,
  '--i-b1': brand1, '--i-b2': brand2, '--i-b3': brand3, '--i-b4': brand4, '--i-b5': brand5, '--i-b6': brand6,
  '--i-x': socX, '--i-li': socLi, '--i-yt': socYt,
};
const iconVars = Object.entries(ICONS).map(([k, v]) => `${k}:${v};`).join('');
// mask shorthand helper — references a registered :root var by name
const mask = (name, color, size = 'contain') =>
  `-webkit-mask:var(${name}) no-repeat center / ${size};mask:var(${name}) no-repeat center / ${size};background-color:${color};`;
const maskBg = (name, size = 'contain') =>
  `-webkit-mask:var(${name}) no-repeat center/${size};mask:var(${name}) no-repeat center/${size};`;

const css = `
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap');

/* ===== Bricks layout reset: neutralise forced flex on layout elements ===== */
.brxe-section,.brxe-container,.brxe-block,.brxe-div{display:block;}
#brx-content *,#brx-content *::before,#brx-content *::after{box-sizing:border-box;}
#brx-content h1,#brx-content h2,#brx-content h3,#brx-content h4,#brx-content p{margin:0;}

/* ============ TOKENS ============ */
:root{
  --navy:#0F172A;--navy-700:#1E293B;--slate:#334155;--slate-500:#64748B;
  --accent:#0369A1;--accent-600:#0284C7;--accent-glow:rgba(2,132,199,0.35);
  --growth:#059669;--growth-soft:#ECFDF5;--star:#F59E0B;
  --bg:#F8FAFC;--surface:#FFFFFF;--surface-alt:#F1F5F9;--fg:#020617;--fg-muted:#475569;
  --border:#E2E8F0;--ring:rgba(2,132,199,0.45);
  --radius:16px;--radius-sm:10px;--radius-pill:999px;
  --shadow-sm:0 1px 2px rgba(15,23,42,0.06),0 1px 3px rgba(15,23,42,0.04);
  --shadow-md:0 10px 30px -12px rgba(15,23,42,0.18);
  --shadow-lg:0 30px 60px -20px rgba(15,23,42,0.28);
  --shadow-accent:0 16px 40px -12px var(--accent-glow);
  --maxw:1180px;--ease:cubic-bezier(0.22,1,0.36,1);
  ${iconVars}
}
[data-theme="dark"]{
  --navy:#E2E8F0;--navy-700:#CBD5E1;--slate:#CBD5E1;--slate-500:#94A3B8;
  --accent:#38BDF8;--accent-600:#0EA5E9;--accent-glow:rgba(56,189,248,0.30);
  --growth:#34D399;--growth-soft:rgba(52,211,153,0.10);
  --bg:#0B1120;--surface:#111A2E;--surface-alt:#0F1729;--fg:#F1F5F9;--fg-muted:#94A3B8;
  --border:#1E293B;--shadow-md:0 10px 30px -12px rgba(0,0,0,0.6);--shadow-lg:0 30px 60px -20px rgba(0,0,0,0.7);
}

/* ============ BASE ============ */
html{scroll-behavior:smooth;}
body{background:var(--bg);transition:background .4s var(--ease),color .4s var(--ease);}
#brx-content{font-family:"Source Sans 3",system-ui,sans-serif;color:var(--fg);line-height:1.6;font-size:17px;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
#brx-content h1,#brx-content h2,#brx-content h3,#brx-content h4{font-family:"Lexend",sans-serif;line-height:1.1;letter-spacing:-0.02em;color:var(--fg);}
#brx-content a{color:inherit;text-decoration:none;}
::selection{background:var(--accent);color:#fff;}

.wrap{display:block;max-width:var(--maxw);margin:0 auto;padding:0 24px;}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:"Lexend",sans-serif;font-weight:600;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:var(--accent);}
.eyebrow::before{content:"";width:22px;height:2px;background:var(--accent);border-radius:2px;}

.section{display:block;padding:96px 0;position:relative;}
.section-head{display:block;max-width:680px;margin:0 auto 56px;text-align:center;}
.section-head h2{font-size:clamp(30px,4.4vw,46px);font-weight:700;margin:16px 0 14px;}
.section-head p{color:var(--fg-muted);font-size:19px;}

/* buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-family:"Lexend",sans-serif;font-weight:600;font-size:16px;padding:14px 26px;border-radius:var(--radius-pill);border:1px solid transparent;cursor:pointer;transition:transform .2s var(--ease),box-shadow .25s var(--ease),background .2s var(--ease);white-space:nowrap;}
.btn:focus-visible{outline:3px solid var(--ring);outline-offset:2px;}
.btn-primary{background:linear-gradient(135deg,var(--accent-600),var(--accent));color:#fff;box-shadow:var(--shadow-accent);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 22px 50px -14px var(--accent-glow);}
.btn-ghost{background:var(--surface);color:var(--fg);border-color:var(--border);box-shadow:var(--shadow-sm);}
.btn-ghost:hover{transform:translateY(-2px);border-color:var(--accent);color:var(--accent);}
.btn-arrow::after{content:"";width:18px;height:18px;flex:0 0 18px;${mask('--i-arrow', 'currentColor')}}

/* nav */
.nav{position:sticky;top:0;z-index:100;display:block;backdrop-filter:saturate(180%) blur(14px);background:color-mix(in srgb,var(--bg) 82%,transparent);border-bottom:1px solid transparent;transition:border-color .3s var(--ease),background .3s var(--ease);}
.nav.scrolled{border-color:var(--border);background:color-mix(in srgb,var(--bg) 92%,transparent);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px;}
.logo{display:flex;align-items:center;gap:10px;font-family:"Lexend";font-weight:800;font-size:21px;letter-spacing:-0.03em;}
.logo-mark{width:34px;height:34px;border-radius:9px;display:grid;place-items:center;background:linear-gradient(135deg,var(--accent-600),var(--accent));color:#fff;box-shadow:var(--shadow-accent);}
.logo-mark::before{content:"";width:19px;height:19px;${mask('--i-chartup', '#fff')}}
.nav-links{display:flex;align-items:center;gap:34px;}
.nav-links .link{font-weight:600;font-size:15.5px;color:var(--fg-muted);transition:color .2s;}
.nav-links .link:hover{color:var(--accent);}
.nav-actions{display:flex;align-items:center;gap:14px;}
.theme-toggle{width:42px;height:42px;border-radius:50%;border:1px solid var(--border);background:var(--surface);color:var(--fg);cursor:pointer;display:grid;place-items:center;transition:transform .3s var(--ease),border-color .2s;}
.theme-toggle:hover{transform:rotate(20deg);border-color:var(--accent);}
.theme-toggle:focus-visible{outline:3px solid var(--ring);outline-offset:2px;}
.theme-toggle::before{content:"";width:19px;height:19px;${mask('--i-sun', 'currentColor')}}
[data-theme="dark"] .theme-toggle::before{${mask('--i-moon', 'currentColor')}}

/* hero */
.hero{display:block;padding:84px 0 88px;position:relative;overflow:hidden;}
.hero::before{content:"";position:absolute;inset:-40% 0 auto -10%;height:720px;z-index:0;background:radial-gradient(600px 380px at 78% 18%,var(--accent-glow),transparent 70%),radial-gradient(520px 340px at 12% 8%,rgba(5,150,105,0.16),transparent 70%);pointer-events:none;}
.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr 0.95fr;gap:56px;align-items:center;}
.hero-copy{display:block;}
.hero-copy h1{font-size:clamp(38px,5.6vw,64px);font-weight:800;margin:22px 0 22px;}
.hero-copy h1 .grad{background:linear-gradient(120deg,var(--accent),var(--growth));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.hero-copy .lede{font-size:20px;color:var(--fg-muted);max-width:540px;margin-bottom:32px;}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:30px;}
.hero-trust{display:flex;align-items:center;gap:16px;flex-wrap:wrap;color:var(--fg-muted);font-size:15px;}
.avatars{display:flex;}
.avatars span{width:38px;height:38px;border-radius:50%;margin-left:-10px;border:2px solid var(--surface);background:linear-gradient(135deg,var(--accent),var(--growth));display:grid;place-items:center;color:#fff;font-weight:700;font-size:13px;font-family:"Lexend";}
.avatars span:first-child{margin-left:0;}
.stars{display:inline-block;width:90px;height:16px;${mask('--i-star5', 'var(--star)', '90px 16px')}}
.hero-trust .rating{display:block;}

/* hero panel */
.hero-panel{display:block;background:var(--surface);border:1px solid var(--border);border-radius:22px;box-shadow:var(--shadow-lg);padding:22px;position:relative;}
.panel-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
.panel-top .ttl{font-family:"Lexend";font-weight:700;font-size:16px;}
.badge-live{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;color:var(--growth);background:var(--growth-soft);padding:5px 11px;border-radius:var(--radius-pill);}
.badge-live .dot{width:7px;height:7px;border-radius:50%;background:var(--growth);box-shadow:0 0 0 0 rgba(5,150,105,0.5);animation:pulse 2s infinite;}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(5,150,105,0.5);}70%{box-shadow:0 0 0 8px rgba(5,150,105,0);}100%{box-shadow:0 0 0 0 rgba(5,150,105,0);}}
.chart{height:150px;border-radius:var(--radius-sm);background-color:var(--surface-alt);background-image:${chartBg};background-repeat:no-repeat;background-position:center;background-size:100% 100%;border:1px solid var(--border);padding:14px;position:relative;overflow:hidden;margin-bottom:16px;}
.kw-row{display:flex;align-items:center;justify-content:space-between;padding:11px 13px;border-radius:var(--radius-sm);background:var(--surface-alt);border:1px solid var(--border);margin-bottom:9px;}
.kw-row:last-child{margin-bottom:0;}
.kw-name{font-weight:600;font-size:14.5px;}
.kw-pos{display:flex;align-items:center;gap:10px;}
.kw-rank{font-family:"Lexend";font-weight:700;font-size:15px;}
.kw-delta{display:inline-flex;align-items:center;gap:3px;font-size:12.5px;font-weight:700;color:var(--growth);background:var(--growth-soft);padding:3px 8px;border-radius:var(--radius-pill);}
.kw-delta::before{content:"";width:12px;height:12px;${mask('--i-up', 'currentColor')}}
.float-badge{position:absolute;bottom:-18px;left:-18px;background:var(--surface);border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow-md);padding:13px 16px;display:flex;align-items:center;gap:12px;}
.float-badge .ic{width:40px;height:40px;border-radius:11px;background:var(--growth-soft);color:var(--growth);display:grid;place-items:center;}
.float-badge .ic::before{content:"";width:21px;height:21px;${mask('--i-chartup', 'currentColor')}}
.float-badge .n{font-family:"Lexend";font-weight:800;font-size:19px;line-height:1;}
.float-badge .l{font-size:12.5px;color:var(--fg-muted);}

/* logos */
.logos{display:block;padding:40px 0 8px;}
.logos .lbl{display:block;text-align:center;color:var(--slate-500);font-size:14px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:26px;}
.logo-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:44px;opacity:0.85;}
.brand{font-family:"Lexend";font-weight:800;font-size:22px;color:var(--slate-500);letter-spacing:-0.02em;display:flex;align-items:center;gap:8px;transition:color .25s,opacity .25s;}
.brand::before{content:"";width:22px;height:22px;flex:0 0 22px;background-color:currentColor;}
.brand:hover{color:var(--fg);}
.brand-1::before{${maskBg('--i-b1')}}
.brand-2::before{${maskBg('--i-b2')}}
.brand-3::before{${maskBg('--i-b3')}}
.brand-4::before{${maskBg('--i-b4')}}
.brand-5::before{${maskBg('--i-b5')}}
.brand-6::before{${maskBg('--i-b6')}}

/* stats */
.stats-band{display:block;background:var(--navy);color:#fff;padding:64px 0;}
[data-theme="dark"] .stats-band{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;}
.stat{text-align:center;}
.stat .num{font-family:"Lexend";font-weight:800;font-size:clamp(34px,4.6vw,52px);line-height:1;background:linear-gradient(120deg,#fff,#93C5FD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
[data-theme="dark"] .stat .num{background:linear-gradient(120deg,var(--accent),var(--growth));-webkit-background-clip:text;background-clip:text;}
.stat .lbl{margin-top:10px;color:rgba(255,255,255,0.72);font-size:15.5px;font-weight:500;}
[data-theme="dark"] .stat .lbl{color:var(--fg-muted);}

/* services */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.card{display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:30px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden;transition:transform .3s var(--ease),box-shadow .3s var(--ease),border-color .3s var(--ease);}
.card::after{content:"";position:absolute;inset:0 0 auto 0;height:3px;background:linear-gradient(90deg,var(--accent),var(--growth));transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease);}
.card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:color-mix(in srgb,var(--accent) 40%,var(--border));}
.card:hover::after{transform:scaleX(1);}
.card .ic{width:54px;height:54px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 16%,transparent),color-mix(in srgb,var(--growth) 14%,transparent));color:var(--accent);margin-bottom:20px;}
.card .ic::before{content:"";width:26px;height:26px;background-color:var(--accent);}
.ic-tech::before{${maskBg('--i-tech')}}
.ic-content::before{${maskBg('--i-content')}}
.ic-links::before{${maskBg('--i-links')}}
.ic-local::before{${maskBg('--i-local')}}
.ic-audit::before{${maskBg('--i-audit')}}
.ic-report::before{${maskBg('--i-report')}}
.card h3{font-size:21px;font-weight:700;margin-bottom:10px;}
.card p{color:var(--fg-muted);font-size:16px;}
.card-ul{display:grid;margin-top:16px;gap:9px;}
.card-li{display:flex;gap:9px;align-items:flex-start;font-size:15px;color:var(--slate);}
.card-li::before{content:"";width:18px;height:18px;flex:0 0 18px;margin-top:3px;${mask('--i-check', 'var(--growth)')}}

/* process */
.process{background:var(--surface-alt);}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.step{display:block;position:relative;padding-top:14px;}
.step .badge{width:50px;height:50px;border-radius:14px;background:var(--surface);border:1px solid var(--border);display:grid;place-items:center;font-family:"Lexend";font-weight:800;font-size:20px;color:var(--accent);box-shadow:var(--shadow-sm);margin-bottom:18px;position:relative;z-index:1;}
.step h3{font-size:19px;margin-bottom:8px;}
.step p{color:var(--fg-muted);font-size:15.5px;}
.steps .step:not(:last-child)::before{content:"";position:absolute;top:39px;left:56px;right:-8px;height:2px;background:linear-gradient(90deg,var(--border),transparent);}

/* case study */
.case{display:grid;grid-template-columns:1fr 1fr;gap:0;background:var(--surface);border:1px solid var(--border);border-radius:22px;overflow:hidden;box-shadow:var(--shadow-md);}
.case-left{display:block;padding:48px;}
.case-left .tag{display:inline-block;background:var(--growth-soft);color:var(--growth);font-weight:700;font-size:13px;padding:5px 13px;border-radius:var(--radius-pill);margin-bottom:18px;}
.case-left h3{font-size:28px;font-weight:700;margin-bottom:14px;}
.case-left .q{font-size:18px;color:var(--slate);font-style:italic;line-height:1.6;margin-bottom:22px;border-left:3px solid var(--accent);padding-left:18px;}
.case-author{display:flex;align-items:center;gap:12px;}
.case-author .ava{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--growth));display:grid;place-items:center;color:#fff;font-weight:700;font-family:"Lexend";}
.case-author .meta b{display:block;font-family:"Lexend";font-size:15.5px;}
.case-author .meta span{font-size:14px;color:var(--fg-muted);}
.case-right{background:linear-gradient(160deg,var(--navy),var(--navy-700));padding:48px;color:#fff;display:flex;flex-direction:column;justify-content:center;gap:26px;}
[data-theme="dark"] .case-right{background:linear-gradient(160deg,var(--surface-alt),var(--bg));border-left:1px solid var(--border);}
.case-metric .big{font-family:"Lexend";font-weight:800;font-size:46px;line-height:1;background:linear-gradient(120deg,#fff,#6EE7B7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
[data-theme="dark"] .case-metric .big{background:linear-gradient(120deg,var(--accent),var(--growth));-webkit-background-clip:text;background-clip:text;}
.case-metric .cap{color:rgba(255,255,255,0.75);font-size:15px;margin-top:6px;}
[data-theme="dark"] .case-metric .cap{color:var(--fg-muted);}

/* testimonials */
.tcards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.tcard{display:flex;flex-direction:column;gap:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow-sm);transition:transform .3s var(--ease),box-shadow .3s var(--ease);}
.tcard:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);}
.tcard p{font-size:16.5px;color:var(--slate);}
.tcard .who{display:flex;align-items:center;gap:12px;margin-top:auto;}
.tcard .who .ava{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--growth));display:grid;place-items:center;color:#fff;font-weight:700;font-family:"Lexend";}
.tcard .who b{display:block;font-family:"Lexend";font-size:15px;}
.tcard .who span{font-size:13.5px;color:var(--fg-muted);}

/* pricing */
.pricing{background:var(--surface-alt);}
.plans{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:stretch;}
.plan{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow-sm);position:relative;transition:transform .3s var(--ease),box-shadow .3s var(--ease);}
.plan:hover{transform:translateY(-5px);box-shadow:var(--shadow-md);}
.plan.featured{border-color:var(--accent);box-shadow:var(--shadow-accent);}
.plan.featured::before{content:"Most popular";position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--accent-600),var(--accent));color:#fff;font-family:"Lexend";font-weight:600;font-size:12.5px;padding:5px 16px;border-radius:var(--radius-pill);box-shadow:var(--shadow-accent);}
.plan h3{font-size:20px;margin-bottom:6px;}
.plan .desc{color:var(--fg-muted);font-size:14.5px;margin-bottom:20px;}
.plan .price{font-family:"Lexend";font-weight:800;font-size:44px;line-height:1;}
.plan .price small{font-size:16px;font-weight:500;color:var(--fg-muted);}
.plan .per{font-size:14px;color:var(--fg-muted);margin:6px 0 22px;}
.plan-ul{display:grid;gap:12px;margin-bottom:26px;}
.plan-li{display:flex;gap:10px;font-size:15.5px;color:var(--slate);}
.plan-li::before{content:"";width:19px;height:19px;flex:0 0 19px;margin-top:2px;${mask('--i-check', 'var(--growth)')}}
.plan .btn{width:100%;margin-top:auto;}

/* faq */
.faq-list{display:grid;max-width:760px;margin:0 auto;gap:12px;}
.faq{display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden;transition:border-color .25s,box-shadow .25s;}
.faq.open{border-color:color-mix(in srgb,var(--accent) 45%,var(--border));box-shadow:var(--shadow-sm);}
.faq-summary{list-style:none;cursor:pointer;padding:20px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px;font-family:"Lexend";font-weight:600;font-size:17px;}
.faq-summary:focus-visible{outline:3px solid var(--ring);outline-offset:-3px;border-radius:var(--radius-sm);}
.faq-summary .chev{width:22px;height:22px;flex:0 0 22px;${mask('--i-chev', 'var(--accent)')}transition:transform .3s var(--ease);}
.faq.open .faq-summary .chev{transform:rotate(180deg);}
.faq-ans{padding:0 22px;max-height:0;overflow:hidden;color:var(--fg-muted);font-size:16px;transition:max-height .3s var(--ease),padding .3s var(--ease);}
.faq.open .faq-ans{padding:0 22px 20px;max-height:400px;}

/* cta */
.cta-band{display:block;padding:96px 0;}
.cta-inner{background:linear-gradient(150deg,var(--navy),var(--navy-700));border-radius:28px;padding:64px 48px;text-align:center;position:relative;overflow:hidden;}
[data-theme="dark"] .cta-inner{background:linear-gradient(150deg,var(--surface),var(--surface-alt));border:1px solid var(--border);}
.cta-inner::before{content:"";position:absolute;inset:0;background:radial-gradient(600px 300px at 50% -20%,var(--accent-glow),transparent 70%);pointer-events:none;}
.cta-inner h2{color:#fff;font-size:clamp(30px,4.5vw,46px);font-weight:800;margin-bottom:16px;position:relative;}
[data-theme="dark"] .cta-inner h2{color:var(--fg);}
.cta-inner .sub{color:rgba(255,255,255,0.78);font-size:19px;max-width:560px;margin:0 auto 30px;position:relative;}
[data-theme="dark"] .cta-inner .sub{color:var(--fg-muted);}
.cta-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;}
.cta-inner .note{margin-top:20px;color:rgba(255,255,255,0.6);font-size:14px;position:relative;}
[data-theme="dark"] .cta-inner .note{color:var(--fg-muted);}

/* footer */
.site-footer{display:block;padding:64px 0 36px;border-top:1px solid var(--border);margin-top:8px;}
.foot-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px;margin-bottom:44px;}
.foot-brand{display:block;}
.foot-brand p{color:var(--fg-muted);font-size:15.5px;margin:16px 0 20px;max-width:300px;}
.socials{display:flex;gap:10px;}
.socials a{width:40px;height:40px;border-radius:10px;border:1px solid var(--border);display:grid;place-items:center;color:var(--fg-muted);transition:all .2s;}
.socials a:hover{color:var(--accent);border-color:var(--accent);transform:translateY(-2px);}
.socials a::before{content:"";width:18px;height:18px;background-color:currentColor;}
.soc-x::before{${maskBg('--i-x')}}
.soc-li::before{${maskBg('--i-li')}}
.soc-yt::before{${maskBg('--i-yt')}}
.foot-col{display:block;}
.foot-col h4{font-size:14px;text-transform:uppercase;letter-spacing:0.06em;color:var(--fg-muted);margin-bottom:16px;}
.foot-col a{display:block;color:var(--slate);font-size:15.5px;padding:6px 0;transition:color .2s;}
.foot-col a:hover{color:var(--accent);}
.foot-bottom{display:flex;align-items:center;justify-content:space-between;padding-top:26px;border-top:1px solid var(--border);color:var(--fg-muted);font-size:14.5px;flex-wrap:wrap;gap:12px;}

/* reveal */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s var(--ease),transform .7s var(--ease);}
.reveal.in{opacity:1;transform:none;}

/* responsive */
@media (max-width:991px){
  .hero-grid{grid-template-columns:1fr;gap:44px;}
  .hero-panel{max-width:480px;}
  .cards,.tcards,.plans{grid-template-columns:repeat(2,1fr);}
  .steps{grid-template-columns:repeat(2,1fr);}
  .steps .step::before{display:none;}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:36px;}
  .case{grid-template-columns:1fr;}
  .plan.featured{transform:none;}
}
@media (max-width:767px){
  .nav-links{display:none;}
  .section{padding:72px 0;}
  .hero{padding:56px 0 64px;}
  .cards,.tcards,.plans,.foot-grid{grid-template-columns:1fr;}
  .foot-grid{gap:30px;}
  .case-left,.case-right{padding:32px;}
  .cta-inner{padding:48px 26px;}
  .hero-cta .btn,.cta-actions .btn{flex:1 1 auto;}
}
@media (prefers-reduced-motion:reduce){
  #brx-content *{animation:none !important;scroll-behavior:auto !important;}
  .reveal{opacity:1;transform:none;transition:none;}
}
`;

fs.writeFileSync(__dirname + '/home.css', css.trim() + '\n');
console.log('home.css written,', css.length, 'chars');
