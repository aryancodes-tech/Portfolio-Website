import contact_bg from '../assets/contact-bg.jpg'
import { FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import CopyToClipboardButton from './CopyToClipboardButton'
import './ContactMe.css'
import { m } from 'framer-motion'
import { CONTACT_EMAIL, SOCIAL_PROFILES } from '../constants/seo'
import { fadeInStaggerContainer, fadeInStaggerItem } from '../motion/variants'

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: IoLogoLinkedin,
  x: FaXTwitter,
}

const ContactMe = () => {
  const defineBG = {
    backgroundImage: `linear-gradient(165deg, hsl(222 47% 8% / 0.92) 0%, hsl(18 9% 2% / 0.88) 100%), url(${contact_bg})`,
    backgroundColor: 'hsl(222 47% 8%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div
      id="contactme"
      className="contact-me-container relative mt-4 w-full overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] shadow-[12px_12px_0_hsl(var(--signal)/0.35)]"
      style={defineBG}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--signal)/0.35),transparent_55%)]" aria-hidden />

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-center gap-8 py-24 md:gap-10 md:py-32"
      >
        <div className="text-center">
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-[hsl(40_25%_98%)] md:text-6xl">
            Let&apos;s talk
          </h2>
        </div>

        <p className="contact-me-description max-w-xl px-4 text-center font-['Gilroy'] text-[hsl(40_22%_88%)] md:px-0">
          Have questions, ideas, or proposals? <br className="hidden sm:block" />
          Let&apos;s team up and build something that holds up in production.
        </p>

        <div className="emailClass group flex flex-row items-center gap-2 rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-4 py-3 shadow-[6px_6px_0_hsl(var(--signal)/0.45)] sm:px-6 sm:py-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">email</span>
          <span className="text-[hsl(var(--ink))]">{CONTACT_EMAIL}</span>
          <CopyToClipboardButton content={CONTACT_EMAIL} />
        </div>

        <m.div
          variants={fadeInStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="socials-container mb-4 flex flex-row gap-8 text-5xl md:gap-10"
        >
          {SOCIAL_PROFILES.map(({ id, url, ariaLabel }) => {
            const Icon = SOCIAL_ICONS[id]
            return (
              <m.div key={id} variants={fadeInStaggerItem}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="inline-flex rounded-xl border-2 border-transparent p-2 text-[hsl(40_25%_98%)] transition-colors hover:border-[hsl(var(--signal))] hover:text-[hsl(var(--signal))]"
                >
                  <Icon aria-hidden />
                </a>
              </m.div>
            )
          })}
        </m.div>
      </m.div>
    </div>
  )
}

export default ContactMe
