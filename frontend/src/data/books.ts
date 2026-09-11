import type { Book } from "@/types/book";

export const books: Book [] = [
  {
    id: "1",
        title: "Meditations",
        author: "Marcus Aurelius",
        description: "Personal reflections on Stoic philosophy.",
        status: "reading",
        rating: 3.5,
  },
  {
    id: "2",
        title: "Clean Code",
        author: "Robert C. Martin",
        description: "A practical guide to writing maintainable software.",
        status: "planned",
        rating: null,
  }
]
