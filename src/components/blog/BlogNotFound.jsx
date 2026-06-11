import SiteButton from '../SiteButton'
import {
  BLOG_NOT_FOUND_DESCRIPTION,
  BLOG_NOT_FOUND_HOME_LABEL,
  BLOG_NOT_FOUND_INDEX_LABEL,
  BLOG_NOT_FOUND_KICKER,
  BLOG_NOT_FOUND_TITLE,
} from '../../constants/copy'
import { BLOG_PATH, HOME_PATH } from '../../constants/urls'

/**
 * Reader route fallback when the entry or post slug does not resolve.
 */
const BlogNotFound = () => (
  <section className="px-1 pt-10 sm:px-2" aria-label="Blog post not found">
      <div className="surface-card rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] p-8 sm:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--signal-deep))]">
          {BLOG_NOT_FOUND_KICKER}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[hsl(var(--ink))] sm:text-4xl">
          {BLOG_NOT_FOUND_TITLE}
        </h1>
        <p className="mt-4 text-base text-[hsl(var(--muted-foreground))] sm:text-lg">
          {BLOG_NOT_FOUND_DESCRIPTION}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SiteButton variant="primary" to={BLOG_PATH}>
            {BLOG_NOT_FOUND_INDEX_LABEL}
          </SiteButton>
          <SiteButton variant="secondary" to={HOME_PATH}>
            {BLOG_NOT_FOUND_HOME_LABEL}
          </SiteButton>
        </div>
      </div>
  </section>
)

export default BlogNotFound
