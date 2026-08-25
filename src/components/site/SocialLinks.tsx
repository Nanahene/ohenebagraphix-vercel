import { Facebook, Instagram } from 'lucide-react'
import { PinterestIcon, TikTokIcon } from '@/components/icons'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const links = [
  { href: siteConfig.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: siteConfig.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { href: siteConfig.social.facebook, label: 'Facebook', Icon: Facebook },
  { href: siteConfig.social.pinterest, label: 'Pinterest', Icon: PinterestIcon },
]

export function SocialLinks({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ohenebagraphix on ${label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 hover:bg-[var(--clay)] hover:text-[var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <Icon className={cn('h-[18px] w-[18px]', iconClassName)} />
        </a>
      ))}
    </div>
  )
}
