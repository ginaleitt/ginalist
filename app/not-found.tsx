import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-8xl font-bold text-slate-300">404</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. Maybe it was moved, or perhaps it never existed?
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Go to Homepage
            </Link>
            <Link
              href="/gaming"
              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg border border-slate-200"
            >
              Browse Gaming Lists
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-sm text-slate-500 mb-4">Popular categories:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['gaming', 'tech', 'books', 'art', 'work', 'parenting'].map((category) => (
                <Link
                  key={category}
                  href={`/${category}`}
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors capitalize"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}