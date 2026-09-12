import { compileStrapi, createStrapi } from '@strapi/core';

type SeedBook = {
  title: string;
  slug: string;
  author: string;
  description: string;
  readingStatus: 'planned' | 'reading' | 'finished';
  rating: number | null;
};

const seedBooks: SeedBook[] = [
  {
    title: 'Meditations',
    slug: 'meditations',
    author: 'Marcus Aurelius',
    description: 'Personal reflections on Stoic philosophy.',
    readingStatus: 'reading',
    rating: 3.5,
  },
  {
    title: 'Clean Code',
    slug: 'clean-code',
    author: 'Robert C. Martin',
    description: 'A practical guide to writing maintainable software.',
    readingStatus: 'planned',
    rating: null,
  },
  {
    title: 'Atomic Habits',
    slug: 'atomic-habits',
    author: 'James Clear',
    description: 'Tiny changes, remarkable results.',
    readingStatus: 'finished',
    rating: 4.5,
  },
  {
    title: 'The Pragmatic Programmer',
    slug: 'the-pragmatic-programmer',
    author: 'Andrew Hunt, David Thomas',
    description: 'Classic advice for software craftsmen.',
    readingStatus: 'planned',
    rating: null,
  },
];

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  let created = 0;

  for (const book of seedBooks) {
    const existing = await app.db.query('api::book.book').findOne({
      where: { slug: book.slug },
    });

    if (existing) {
      app.log.info(`Skip existing: ${book.slug}`);
      continue;
    }

    await app.documents('api::book.book').create({
      data: book,
      status: 'published',
    });
    created += 1;
    app.log.info(`Created: ${book.slug}`);
  }

  app.log.info(`Seed done. Created ${created} book(s).`);
  await app.destroy();
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
