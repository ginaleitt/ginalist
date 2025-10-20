import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Ginalist and our mission to provide honest, helpful product recommendations.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          About Ginalist
        </h1>

        <div className="prose prose-slate prose-lg">
          <p className="text-xl text-slate-600 mb-8">
            Welcome! I&apos;m glad you&apos;re here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Why I Created This Site
          </h2>
          
          <p className="text-slate-700 leading-relaxed mb-4">
            I just want to recommend products that I genuinely believe in based on my own experience.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            My Promise to You
          </h2>

          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-6">
            <li><strong>Real experience:</strong> I only recommend products I&apos;ve actually used or thoroughly researched</li>
            <li><strong>Honest reviews:</strong> I share both pros and cons</li>
            <li><strong>No fluff:</strong> Straight to the point, no unnecessary filler</li>
            <li><strong>Transparent:</strong> I clearly disclose affiliate relationships</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            About Affiliate Links
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Yes, some links on this site are affiliate links. This means if you purchase through them, 
            I may earn a small commission at no extra cost to you. This helps support the site and allows 
            me to keep creating helpful content.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            <strong>Important:</strong> I never let affiliate commissions influence my recommendations. 
            If a product isn&apos;t worth buying, I won&apos;t recommend it, regardless of potential earnings.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Get in Touch
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Have a question or suggestion? Want to see a specific product category covered? 
            I&apos;d love to hear from you!
          </p>

          <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 mt-8">
            <p className="text-slate-700 mb-4">
              <strong>Ready to explore?</strong> Check out my curated lists:
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}