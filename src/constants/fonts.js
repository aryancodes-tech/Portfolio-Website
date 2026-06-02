/**
 * Self-hosted font filenames under src/assets/fonts/.
 * All families used by the app are served locally (no Google Fonts CDN).
 */

/** @type {string} */
export const FONTS_DIR = 'src/assets/fonts'

/** IBM Plex Mono — weights loaded via @font-face in src/styles/fonts.css */
export const IBM_PLEX_FILES = {
  regular: 'IBMPlexMono-Regular.ttf',
  medium: 'IBMPlexMono-Medium.ttf',
  semibold: 'IBMPlexMono-SemiBold.ttf',
  italic: 'IBMPlexMono-Italic.ttf',
}

/** Syne — display headings (font-display) */
export const SYNE_FILES = {
  medium: 'Syne-Medium.ttf',
  semibold: 'Syne-SemiBold.ttf',
  bold: 'Syne-Bold.ttf',
  extrabold: 'Syne-ExtraBold.ttf',
}

/** Gilroy — body and explicit font-['Gilroy'] usage */
export const GILROY_FILES = {
  regular: 'Gilroy-Regular.ttf',
}

/** PolySans — project cards via .PolySans* classes */
export const POLYSANS_FILES = {
  regular: 'PolySansGX.ttf',
  italic: 'PolySansItalicGX.ttf',
}
