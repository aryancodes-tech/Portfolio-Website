import { LazyMotion, domAnimation } from 'framer-motion'

/**
 * Loads a smaller Framer Motion runtime (DOM-only features).
 * Keep this wrapper around parts of the tree that use `m.*` components.
 * @param {{ children: import('react').ReactNode }} props
 */
export default function MotionProvider({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

