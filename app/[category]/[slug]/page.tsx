import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/MDXComponents';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}



// Generate static pages for all posts at build time
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

// Generate JSON-LD structured data for articles
function generateArticleSchema(post: any, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Ginalist',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ginalist',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ginalist.vercel.app/logo.png', // Update with your actual domain
      },
    },
    articleSection: category,
    keywords: post.tags?.join(', ') || '',
  };
}


export default async function PostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }


  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <Navigation />

        {/* Structured Data */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(post, category)),
        }}
        />

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Category Badge */}
            <Link 
            href={`/${category}`}
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 hover:bg-blue-200"
            >
            {category}
            </Link>

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
            <div className="mdx-content">
            <MDXRemote source={post.content} components={mdxComponents} />
            </div>
        </article>

        {/* Footer */}
        <Footer />
    </div>
  );
}