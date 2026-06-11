/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { siteButtonClassName } from './siteButtonStyles'

/**
 * Portfolio CTA — renders `button`, in-app `Link`, or external `a` from props.
 *
 * @param {object} props
 * @param {'primary' | 'secondary'} [props.variant]
 * @param {'default' | 'compact'} [props.size]
 * @param {string} [props.className]
 * @param {string} [props.to] React Router destination (renders `Link`).
 * @param {string} [props.href] External URL (renders `a`).
 * @param {React.ReactNode} props.children
 */
const SiteButton = ({
  variant = 'secondary',
  size = 'default',
  className = '',
  to,
  href,
  children,
  ...rest
}) => {
  const classes = siteButtonClassName(variant, size, className)

  if (typeof to === 'string' && to.length > 0) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (typeof href === 'string' && href.length > 0) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}

export default SiteButton
