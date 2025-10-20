import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  content: string;
  featured?: boolean;
}

// Get all posts from a category
export function getPostsByCategory(category: string): Post[] {
  const categoryPath = path.join(contentDirectory, category);
  
  // Check if category directory exists
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs.readdirSync(categoryPath);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(categoryPath, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
        tags: data.tags || [],
        content,
        featured: data.featured || false,
      };
    });

  // Sort by date (newest first)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get a single post by category and slug
export function getPostBySlug(category: string, slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      tags: data.tags || [],
      content,
      featured: data.featured || false,
    };
  } catch {
    return null;
  }
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = fs.readdirSync(contentDirectory);
  return categories.filter((category) => {
    const categoryPath = path.join(contentDirectory, category);
    return fs.statSync(categoryPath).isDirectory();
  });
}

// Get all posts from all categories
export function getAllPosts(): Post[] {
  const categories = getAllCategories();
  const allPosts: Post[] = [];

  categories.forEach((category) => {
    const posts = getPostsByCategory(category);
    allPosts.push(...posts);
  });

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get all featured posts
export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured === true);
}