import type { Homepage } from "@/types/homepage";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337/"

export async function getHomepage(): Promise<Homepage | null > {
  const res = await fetch(`${STRAPI_URL}/api/homepage`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json.data;
}
