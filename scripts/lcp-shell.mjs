/**
 * Critical CSS and static HTML for first paint / LCP before React hydrates.
 * Injected by scripts/sync-seo.mjs between LCP markers in index.html.
 */

/** @type {string} */
export const LCP_CRITICAL_CSS = `    :root {
      --ink: 222 47% 11%;
      --paper: 40 18% 94%;
      --surface: 40 25% 99%;
      --signal-deep: 18 88% 38%;
      --muted-fg: 220 12% 32%;
    }
    body {
      margin: 0;
      background-color: hsl(var(--paper));
      background-image: linear-gradient(165deg, hsl(var(--paper)) 0%, hsl(38 22% 91%) 45%, hsl(200 12% 92%) 100%);
      color: hsl(var(--ink));
      font-family: "Gilroy", "Syne", system-ui, sans-serif;
    }
    #static-lcp {
      box-sizing: border-box;
      max-width: 80rem;
      margin: 0 auto;
      padding: 1.5rem 0.75rem 2rem;
      width: 100%;
    }
    .static-hero-card {
      box-sizing: border-box;
      border: 2px solid hsl(var(--ink));
      border-radius: 2rem;
      background: hsl(var(--surface));
      padding: 1.5rem;
    }
    .static-kicker {
      display: none;
      margin: 0 0 1rem;
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: 11px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: hsl(var(--signal-deep));
    }
    @media (min-width: 768px) {
      .static-kicker {
        display: block;
      }
    }
    .static-title {
      margin: 0 0 1rem;
      font-family: "Syne", sans-serif;
      font-size: clamp(2.1rem, 5vw, 4.25rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.02em;
    }
    .static-summary {
      margin: 0 0 1.5rem;
      max-width: 36rem;
      font-family: "Gilroy", sans-serif;
      font-size: 1.125rem;
      line-height: 1.625;
      color: hsl(var(--muted-fg));
    }
    .static-photo-wrap {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
    }
    .static-photo {
      width: 100%;
      max-width: 260px;
      aspect-ratio: 1;
      object-fit: cover;
      border: 4px solid hsl(var(--ink));
      border-radius: 1.75rem;
      background: hsl(var(--paper));
    }
    body.app-mounted #static-lcp {
      display: none;
    }
    @media (min-width: 1024px) {
      .static-hero-inner {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 3rem;
        align-items: center;
      }
      .static-photo-wrap {
        margin-top: 0;
      }
      .static-photo {
        max-width: 280px;
      }
    }`

/**
 * @param {{
 *   kicker: string
 *   name: string
 *   summary: string
 *   imageAlt: string
 *   imageSm: string
 *   imageLg: string
 * }} opts
 * @returns {string}
 */
export function buildLcpShellHtml(opts) {
  const { kicker, name, summary, imageAlt, imageSm, imageLg } = opts
  return `    <div id="static-lcp" class="static-lcp">
      <main class="static-main">
        <section class="static-hero-card" aria-label="${name} — Backend Developer and Software Engineer">
          <div class="static-hero-inner">
            <div>
              <p class="static-kicker">${kicker}</p>
              <h1 class="static-title">${name}</h1>
              <p class="static-summary">${summary}</p>
            </div>
            <div class="static-photo-wrap">
              <img
                class="static-photo"
                src="${imageSm}"
                srcset="${imageSm} 320w, ${imageLg} 560w"
                sizes="(max-width: 480px) 260px, 280px"
                alt="${imageAlt}"
                width="280"
                height="280"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </main>
    </div>`
}
