import Link from 'next/link';
import { Post } from '@/lib/mdx';

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  const categoryEmojis: Record<string, string> = {
    gaming: '🎮',
    tech: '💻',
    art: '🎨',
    books: '📚',
    work: '💼',
    parenting: '👶',
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          ⭐ Featured Lists
        </h2>
        <p className="text-lg text-slate-600">
          Our most popular and helpful recommendations
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={`${post.category}-${post.slug}`}
            href={`/${post.category}/${post.slug}`}
            className="group block bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left Side - Content */}
              <div className="flex-1">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{categoryEmojis[post.category]}</span>
                  <span className="text-sm font-medium text-blue-600 capitalize">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side - Date */}
              <div className="md:text-right flex-shrink-0">
                <time className="text-sm text-slate-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}