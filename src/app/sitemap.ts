import { fetchCats } from '@/actions/cats-actions';
import { Cat } from '@/types/cats';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cats: Cat[] = await fetchCats();

  const catsEntries: MetadataRoute.Sitemap = cats.map(({ id, updatedAt }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/cats/${id}`,
    lastModified: updatedAt,
    // changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/cats`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...catsEntries,
  ];
}

// [
//   {
//     url: process.env.NEXT_PUBLIC_DOMAIN,
//     lastModified: new Date(),
//     changeFrequency: 'yearly',
//     priority: 1,
//   },
//   {
//     url: `${process.env.NEXT_PUBLIC_DOMAIN}/cats`,
//     lastModified: new Date(),
//     changeFrequency: 'monthly',
//     priority: 0.8,
//   },
//   {
//     url: 'https://acme.com/blog',
//     lastModified: new Date(),
//     changeFrequency: 'weekly',
//     priority: 0.5,
//   },
// ];
