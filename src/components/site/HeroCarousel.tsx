import { useEffect, useState } from 'react'

export function HeroCarousel({
  images,
  alt,
  intervalMs = 4000,
}: {
  images: readonly string[]
  alt: string
  intervalMs?: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[1.75rem] shadow-2xl">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          aria-hidden={i === 0 ? undefined : true}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          width={800}
          height={1200}
          fetchPriority={i === 0 ? 'high' : undefined}
        />
      ))}
    </div>
  )
}
