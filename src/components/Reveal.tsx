import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className,
  style,
}: {
  children: ReactNode
  as?: 'div' | 'li' | 'span'
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', visible && 'reveal-visible', className)}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
