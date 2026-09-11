import { notFound } from "next/navigation"
import { books } from "@/data/books"

export default async function BookDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const book = books.find((b) => b.id === id)

  if (!book) {
    notFound()
  }

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.status}</p>
      <p>{book.rating ?? "No rating"}</p>
    </main>
  )
}
