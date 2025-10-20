import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-slate-600 text-center md:text-left">
            © {currentYear} Ginalist. All recommendations are my recommendations.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <Link 
              href="/about" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}