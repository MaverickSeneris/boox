export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  status: "planned" | "reading" | "finished";
  rating: number | null;
}
