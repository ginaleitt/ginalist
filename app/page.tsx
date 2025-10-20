import Navigation from '@/components/Navigation';
import { getPostsByCategory } from '@/lib/mdx';
import Link from 'next/link';

export default function Home() {
  const categories = [
    {
      name: 'Gaming',
      slug: 'gaming',
      description: 'Controllers, headsets, and gear for gamers',
      emoji: '🎮'
    },
    {
      name: 'Tech',
      slug: 'tech',
      description: 'Gadgets, accessories, and productivity tools',
      emoji: '💻'
    },
    {
      name: 'Art',
      slug: 'art',
      description: 'Supplies, tools, and creative essentials',
      emoji: '🎨'
    },
    {
      name: 'Books',
      slug: 'books',
      description: 'Reading recommendations across all genres',
      emoji: '📚'
    },
    {
      name: 'Work',
      slug: 'work',
      description: 'Productivity tools and office essentials',
      emoji: '💼'
    },
    {
      name: 'Parenting',
      slug: 'parenting',
      description: 'Products that make parenting easier',
      emoji: '👶'
    }
  ];

  // Get post counts for each category
  const categoriesWithCounts = categories.map(category => ({
    ...category,
    postCount: getPostsByCategory(category.slug).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Honest recommendations from real experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No fluff, no fake reviews. Just authentic lists of products I actually use and recommend.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 hover:border-slate-300"
            >
              <div className="text-4xl mb-3">{category.emoji}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-slate-600 mb-3">{category.description}</p>
              <p className="text-sm text-slate-500">
                {category.postCount} {category.postCount === 1 ? 'list' : 'lists'}
              </p>
            </Link>
          ))}
        </div>
      </main>

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