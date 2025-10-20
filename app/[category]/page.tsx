import { getPostsByCategory } from '@/lib/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static pages for all categories
export async function generateStaticParams() {
  const categories = ['gaming', 'tech', 'art', 'books', 'work', 'parenting'];
  
  return categories.map((category) => ({
    category,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  
  const categoryNames: Record<string, string> = {
    gaming: 'Gaming',
    tech: 'Tech',
    art: 'Art',
    books: 'Books',
    work: 'Work & Productivity',
    parenting: 'Parenting',
  };

  return {
    title: `${categoryNames[category] || category} Lists | Ginalist`,
    description: `Browse all ${categoryNames[category] || category} product recommendations and curated lists.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  const categoryNames: Record<string, string> = {
    gaming: 'Gaming',
    tech: 'Tech',
    art: 'Art',
    books: 'Books',
    work: 'Work & Productivity',
    parenting: 'Parenting',
  };

  const categoryEmojis: Record<string, string> = {
    gaming: '🎮',
    tech: '💻',
    art: '🎨',
    books: '📚',
    work: '💼',
    parenting: '👶',
  };

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      {/* Category Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{categoryEmojis[category]}</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {categoryNames[category] || category}
          </h1>
          <p className="text-lg text-slate-600">
            {posts.length} {posts.length === 1 ? 'list' : 'lists'} and counting
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${category}/${post.slug}`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 hover:border-slate-300"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 mb-4 line-clamp-3">
                {post.description}
              </p>
              <time className="text-sm text-slate-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600">
            © 2024 Ginalist. All recommendations are genuine.
          </p>
        </div>
      </footer>
    </div>
  );
}