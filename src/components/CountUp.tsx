import { useEffect, useRef, useState } from 'react'

export function CountUp({ value, durationMs = 1200 }: { value: string; durationMs?: number }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number>()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animate = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 2)
        setDisplay(Math.round(eased * target))
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        }
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplay(0)
          animate()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, durationMs])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
      }
