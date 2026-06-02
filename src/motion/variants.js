/** Framer Motion stagger container for child fade-up items. */
export const fadeInStaggerContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

/** Framer Motion child item for stagger containers. */
export const fadeInStaggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

/** Framer Motion grid stagger for project cards. */
export const projectGridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

/** Framer Motion spring item for project grid. */
export const projectGridItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
}

/**
 * Fade-up while in view with optional delay cap.
 * @param {number} index
 * @param {{ y?: number, delayStep?: number }} [options]
 * @returns {{ initial: object, whileInView: object, viewport: object, transition: object }}
 */
export function fadeUpInView(index = 0, options = {}) {
  const { y = 20, delayStep = 0.06 } = options
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: Math.min(index * delayStep, 0.25) },
  }
}
