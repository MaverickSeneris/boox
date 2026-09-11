import { books } from "@/data/books"
import BookCard from "@/components/books/BookCard"

export default function BooksPage() {
  return (
    <main>
      <h1 className="font-bold text-4xl mb-4">Books</h1>
      <ul>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </main>
  )
}
