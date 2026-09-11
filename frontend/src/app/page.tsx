type Homepage = {
  title: string;
  description: string;
};

async function getHomepage(): Promise<Homepage | null> {
  const res = await fetch("http://localhost:1337/api/homepage", {
    next: { revalidate: 60 }, // optional ISR
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json.data;
}

export default async function HomeRoute() {
  const homepage = await getHomepage();

  return (
    <main>
      <h1>{homepage?.title ?? "Boox"}</h1>
      <p>{homepage?.description ?? "Your personal book collection"}</p>
    </main>
  );
}
