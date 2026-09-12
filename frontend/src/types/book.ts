export type Book = {
  id: number;
  documentId: string;
  title: string;
  slug: string | null;
  author: string;
  description: string;
  readingStatus: "planned" | "reading" | "finished" | null;
  rating: number | null;
};
