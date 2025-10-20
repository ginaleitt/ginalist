import Link from 'next/link';

export default function Navigation() {
  const categories = [
    { name: 'Gaming', slug: 'gaming', emoji: '🎮' },
    { name: 'Tech', slug: 'tech', emoji: '💻' },
    { name: 'Art', slug: 'art', emoji: '🎨' },
    { name: 'Books', slug: 'books', emoji: '📚' },
    { name: 'Work', slug: 'work', emoji: '💼' },
    { name: 'Parenting', slug: 'parenting', emoji: '👶' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-slate-700">
            Ginalist
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <span className="mr-1">{category.emoji}</span>
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - We'll add this later */}
          <div className="md:hidden">
            <button className="text-slate-700 hover:text-slate-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Hidden for now, we'll add interactivity later */}
        <nav className="md:hidden pb-4 hidden">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}