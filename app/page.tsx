import { BlogPosts } from 'app/components/posts'
import { Projects } from './components/projects'

const Divider = () => <div className="w-full border-b border-gray-500/30 my-4"></div>

export default function Page() {
  return (
    <section>
      <h1 className="sr-only">About Tony Keiser</h1>
      <p className="mb-4 text-lg">
        Hey — I'm Tony Keiser, a former general contractor and oilfield worker turned software engineer. Specializing in
        creating tools in my free time that optimize workflows for the construction and oilfield sectors, leveraging
        hands-on experience to build practical solutions for real-world challenges.
      </p>

      <Divider />

      <h2 className="font-bold text-lg mb-2">Getting Personal</h2>
      <p className="mb-4 text-lg">
        I'm a father of 2 amazing boys. I'm an avid fitness entusiast and gamer{' '}
        <span className="text-neutral-500">(StarCraft 2 usually)</span>.
      </p>

      <p className="text-neutral-500">Based in Los Angeles, California</p>
      <div className="my-8">
        <BlogPosts />
      </div>

      <Divider />

      <h2 className="font-bold text-lg mb-4">Projects</h2>
      <div className="mb-8">
        <Projects />
      </div>
    </section>
  )
}
