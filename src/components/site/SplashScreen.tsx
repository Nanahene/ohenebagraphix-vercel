import { useEffect, useState } from 'react'

const SPLASH_VISIBLE_MS = 2000
const SPLASH_FADE_MS = 500

export function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const fadeTimer = setTimeout(() => setFadingOut(true), SPLASH_VISIBLE_MS)
    const hideTimer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, SPLASH_VISIBLE_MS + SPLASH_FADE_MS)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ease-out"
      style={{
        backgroundColor: 'var(--ink-fixed)',
        opacity: fadingOut ? 0 : 1,
        pointerEvents: fadingOut ? 'none' : 'auto',
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes splash-glow {
          0%, 100% {
            filter: drop-shadow(0 0 12px rgba(201, 147, 47, 0.35)) drop-shadow(0 0 4px rgba(201, 147, 47, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(201, 147, 47, 0.75)) drop-shadow(0 0 10px rgba(201, 147, 47, 0.9));
          }
        }
        .splash-logo {
          animation: splash-glow 1.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .splash-logo {
            animation: none;
          }
        }
      `}</style>
      <img src="/images/brand/logo-mark.webp" alt="Ohenebagraphix" className="splash-logo h-24 w-24 sm:h-32 sm:w-32" />
    </div>
  )
      }
