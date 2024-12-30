import { ExternalLinkIcon } from 'app/components/icons'
import Image from 'next/image'

const projects = [
  {
    title: 'Navo',
    description: 'Tool for locating and navigating to oil and gas wells.',
    url: 'https://navo.app',
    image: '/images/navo.png',
    imageData: {
      width: 2082,
      height: 1301,
    },
    tags: ['Next.JS', 'React-Native', 'Laravel', 'Tailwind CSS'],
  },
]

export function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <a
          key={project.title}
          className="flex flex-col space-y-1 w-full md:w-80"
          rel="noopener noreferrer"
          target="_blank"
          href={project.url}
        >
          <div className="w-full flex flex-col gap-2 bg-neutral-200 hover:bg-neutral-100 dark:bg-neutral-900 hover:dark:bg-neutral-800 transition-colors duration-300 rounded-xl p-4 border border-neutral-500/30">
            <Image
              src={project.image}
              alt={'Screenshot of Navo application'}
              width={project.imageData.width}
              height={project.imageData.height}
              className="object-cover h-40 rounded-lg border border-neutral-500/50"
            />
            <div className="flex flex-row justify-between">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <ExternalLinkIcon className="w-4 h-4 stroke-2 text-neutral-500 self-start" />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>

            <h4 className="sr-only">Technologies Used</h4>
            <ul className="flex flex-wrap flex-row gap-2 mt-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-neutral-950 dark:text-neutral-50 text-xs bg-neutral-50 dark:bg-neutral-950 rounded-full px-4 py-1 shadow-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  )
}
