/**
 * Base layout and interaction styles for portfolio CTAs (hero résumé / blog links).
 * @type {string}
 */
const SITE_BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl font-mono font-semibold uppercase transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--signal))] focus-visible:ring-offset-2'

/**
 * Size presets for site buttons.
 * @type {Record<'default' | 'compact', string>}
 */
const SITE_BUTTON_SIZES = {
  default: 'px-5 py-3 text-sm tracking-wider',
  compact: 'px-3 py-2 text-[11px] tracking-wider',
}

/**
 * Color / surface variants aligned with hero CTAs.
 * @type {Record<'primary' | 'secondary', string>}
 */
const SITE_BUTTON_VARIANTS = {
  primary: 'bg-[hsl(var(--ink))] text-[hsl(var(--surface))] shadow-[5px_5px_0_hsl(var(--signal))]',
  secondary:
    'border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] text-[hsl(var(--ink))] shadow-[5px_5px_0_hsl(var(--ink)/0.10)] no-underline',
}

/**
 * Build class names for a site CTA (use on `Link` / `a` when not using {@link SiteButton}).
 *
 * @param {'primary' | 'secondary'} [variant]
 * @param {'default' | 'compact'} [size]
 * @param {string} [className] Additional Tailwind classes.
 * @returns {string}
 */
export function siteButtonClassName(variant = 'secondary', size = 'default', className = '') {
  return [
    SITE_BUTTON_BASE,
    SITE_BUTTON_SIZES[size] ?? SITE_BUTTON_SIZES.default,
    SITE_BUTTON_VARIANTS[variant] ?? SITE_BUTTON_VARIANTS.secondary,
    className,
  ]
    .filter((part) => part.length > 0)
    .join(' ')
}
