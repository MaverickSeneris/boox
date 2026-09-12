import type { Book } from "@/types/book";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${STRAPI_URL}/api/books`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  const json = await res.json();
  return json.data;
}

export async function getBook(documentId: string): Promise<Book | null> {
  const res = await fetch(`${STRAPI_URL}/api/books/${documentId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json.data;
}
