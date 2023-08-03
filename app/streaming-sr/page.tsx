export const revalidate = 0

import { Suspense } from 'react'
import BlogList from '@/app/components/blog-list'
import NewsList from '@/app/components/news-list'
import { Spinner } from '@/app/components/spinner'

export default function StreamingServerRenderringPage() {
  return (
    <section className="flex">
      <aside className="w-1/4">
        <section className="flexed m-1 h-full w-1/4 border border-blue-500 bg-gray-200 p-1">
          <Suspense fallback={<Spinner color="border-green-500" />}>
            <BlogList />
          </Suspense>
        </section>
      </aside>
      <main>
        <section className="flexed w-3/4">
          <Suspense fallback={<Spinner />}>
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  )
}
