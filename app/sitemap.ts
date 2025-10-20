import { MetadataRoute } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ginalist.vercel.app'; // Update with your actual domain
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Category pages
  const categories = getAllCategories();
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Post pages
  const posts = getAllPosts();
  posts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/${post.category}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}