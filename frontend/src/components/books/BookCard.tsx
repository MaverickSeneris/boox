import type { Book } from "@/types/book"
import Link from "next/link"

type BookCardProps = {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <li className="mb-4">
      <Link href={`/books/${book.id}`}>
        <h2 className="text-2xl font-bold">{book.title}</h2>
      </Link>
      <p>{book.author}</p>
      <p>{book.status}</p>
      <p>{book.rating ?? "No Rating"}</p>
    </li>
  )
}
