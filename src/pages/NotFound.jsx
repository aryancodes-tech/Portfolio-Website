import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, MapPinOff } from 'lucide-react'
import { NOT_FOUND_META_TITLE, PERSON_NAME } from '../constants/seo'
import { HOME_PATH } from '../constants/urls'

/**
 * Custom 404 page for unknown in-app routes. Matches portfolio shell styling
 * and links visitors back to the home page.
 */
const NotFound = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const previousTitle = document.title
    document.title = NOT_FOUND_META_TITLE
    return () => {
      document.title = previousTitle
    }
  }, [])

  const showPath = pathname.length > 0 && pathname !== HOME_PATH

  return (
    <main
      className="content site-shell flex min-h-screen flex-col pb-16"
      role="main"
      aria-label="Page not found"
    >
      <header className="sticky top-0 z-50 px-3 pt-4 pb-2 sm:px-5 animate-[nav-in_0.4s_ease-out]">
        <div className="content flex flex-row items-center justify-between gap-4 rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]/95 px-4 py-3 shadow-[6px_6px_0_hsl(var(--signal)/0.25)] backdrop-blur-md md:px-6">
          <Link
            to={HOME_PATH}
            className="flex min-w-0 items-center gap-3 no-underline"
            aria-label={`${PERSON_NAME} — home`}
          >
            <img
              src="/ag_black.svg"
              className="h-11 w-11 shrink-0 rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] p-1.5"
              alt=""
              width={44}
              height={44}
            />
            <div className="flex min-w-0 flex-col leading-none">
              <span className="font-display truncate text-lg font-bold tracking-tight text-[hsl(var(--ink))] sm:text-xl">
                {PERSON_NAME}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
                portfolio
              </span>
            </div>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-1 py-10 sm:px-2 sm:py-16">
        <section
          className="surface-card relative w-full max-w-2xl overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] p-8 text-center sm:p-12 md:p-14"
          aria-labelledby="not-found-heading"
        >
          <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.65]" aria-hidden />
          <div className="absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[hsl(var(--signal)/0.12)] blur-3xl" aria-hidden />

          <div className="relative flex flex-col items-center gap-6">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] text-[hsl(var(--ink))] shadow-[5px_5px_0_hsl(var(--signal)/0.4)]">
              <MapPinOff strokeWidth={1.75} size={28} aria-hidden />
            </span>

            <p className="font-mono text-[11px] tracking-[0.4em] text-[hsl(var(--signal-deep))] uppercase">
              error 404
            </p>

            <h1
              id="not-found-heading"
              className="font-display text-[clamp(3rem,12vw,5.5rem)] font-extrabold leading-none tracking-tight text-[hsl(var(--ink))]"
            >
              404
            </h1>

            <p className="max-w-md font-['Gilroy'] text-lg leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-xl">
              This route does not exist on the portfolio. The page may have moved, or the URL was mistyped.
            </p>

            {showPath && (
              <p className="max-w-full truncate rounded-xl border-2 border-dashed border-[hsl(var(--ink)/0.25)] bg-[hsl(var(--paper))] px-4 py-2 font-mono text-xs text-[hsl(var(--muted-foreground))] sm:text-sm">
                <span className="text-[hsl(var(--ink))]">requested:</span>{' '}
                <code className="text-[hsl(var(--signal-deep))]">{pathname}</code>
              </p>
            )}

            <Link
              to={HOME_PATH}
              className="group mt-2 inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--ink))] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-[hsl(var(--surface))] no-underline shadow-[5px_5px_0_hsl(var(--signal))] transition-transform hover:-translate-y-0.5"
            >
              <Home strokeWidth={1.75} size={18} className="text-[hsl(var(--signal))] transition-colors group-hover:text-[hsl(var(--surface))]" />
              Back to portfolio
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default NotFound
