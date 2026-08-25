type Fit = 'contain' | 'cover' | 'fill'

// Images in public/images are pre-optimized WebP files served directly by
// Vercel's static CDN, so no runtime resize/proxy service (Netlify Image
// CDN) is required. The size/fit options are kept so call sites don't need
// to change; they only affect layout (the components already apply
// object-fit/width/height CSS) rather than which bytes are served.
export function imgUrl(
  url: string,
  _opts: { w?: number; h?: number; fit?: Fit; q?: number } = {},
) {
  return url
}
