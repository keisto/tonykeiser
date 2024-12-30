'use client'

import { BlogIcon, HomeIcon, IconProps, MailIcon } from 'app/components/icons'
import { cx } from '../utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems: {
  [key: string]: {
    name: string
    Icon: React.ComponentType<IconProps>
  }
} = {
  '/': {
    name: 'home',
    Icon: HomeIcon,
  },
  '/blog': {
    name: 'blog',
    Icon: BlogIcon,
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 justify-between" id="nav">
          <div className="flex flex-row">
            {Object.entries(navItems).map(([path, { name, Icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 items-center gap-2"
                >
                  <>
                    <Icon
                      className={cx(
                        'w-4 h-4 transition-colors duration-300 stroke-2',
                        path == pathname ? 'text-amber-600 dark:text-amber-400' : 'text-neutral-500'
                      )}
                    />
                    {name}
                  </>
                </Link>
              )
            })}
          </div>
          <div>
            <a
              className="transition-all text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 items-center gap-2"
              href="mailto:me@tonykeiser.com"
            >
              <MailIcon className={cx('w-4 h-4 stroke-2 text-neutral-500')} />
              Contact
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
