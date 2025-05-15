import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/imageUrl'
import { PortableText } from '@portabletext/react'

export default async function HomePage() {
  const page = await client.fetch(
    `*[_type == "page" && slug.current == "home"][0]{
      title,
      heroImage,
      body
    }`
  )

  if (!page) return <div>No homepage content found.</div>

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
      {page.heroImage && (
        <img
          src={urlFor(page.heroImage).width(1200).url()}
          alt={page.title}
          className="mb-6"
        />
      )}
      <PortableText value={page.body} />
    </main>
  )
}