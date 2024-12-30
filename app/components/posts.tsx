import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { InboxIcon } from 'app/components/icons'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  if (allBlogs.length === 0) {
    return (
      <div className="border-neutral-500/50 rounded-xl p-12 flex flex-col gap-4 items-center justify-center border border-dashed bg-neutral-200 dark:bg-neutral-900">
        <h2 className="sr-only">Blog Posts</h2>
        <InboxIcon className="w-12 h-12 text-neutral-400 dark:text-neutral-600" />
        <p className="text-neutral-500">No blog posts... yet</p>
      </div>
    )
  }

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}
