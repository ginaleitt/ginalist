import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// This generates static pages for all posts at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Ginalist`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PageProps) {
    const currentYear = new Date().getFullYear();

  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="text-4xl font-bold text-slate-900 hover:text-slate-700">
            Ginalist
          </a>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <a 
          href={`/${category}`}
          className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 hover:bg-blue-200"
        >
          {category}
        </a>

        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* Content */}
        <div className="text-slate-800 space-y-6">
        <ReactMarkdown
            components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3" {...props} />,
            p: ({node, ...props}) => <p className="text-slate-700 leading-relaxed mb-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 text-slate-700 ml-4" {...props} />,
            li: ({node, ...props}) => <li className="text-slate-700" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
            hr: ({node, ...props}) => <hr className="my-8 border-slate-300" {...props} />,
            }}
        >
            {post.content}
        </ReactMarkdown>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600">
             © {currentYear} Ginalist Ginalist. 
          </p>
        </div>
      </footer>
    </div>
  );
}