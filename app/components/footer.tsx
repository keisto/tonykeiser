import { ExternalLinkIcon } from 'app/components/icons'

const externalLinks = [
  {
    title: '@thicctonetone',
    url: 'https://x.com/thicctonetone',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/keisto',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/keisto',
  },
]

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {externalLinks.map(({ title, url, BrandIcon }) => (
          <li key={title}>
            <a
              className="flex items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={url}
            >
              <p className="ml-2 h-7">{title}</p>
              <ExternalLinkIcon className="w-4 h-4 stroke-2 text-neutral-500 self-start" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
