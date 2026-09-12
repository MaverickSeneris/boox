import { getBooks } from "@/data/books";
import BookCard from "@/components/books/BookCard";

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <main>
      <h1 className="font-bold text-4xl mb-4">Books</h1>
      <ul>
        {books.map((book) => (
          <BookCard key={book.documentId} book={book} />
        ))}
      </ul>
    </main>
  );
}
