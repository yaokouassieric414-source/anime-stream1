'use client';

import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { TelegramButton } from './TelegramButton';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AnimeStream
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Accueil</Link>
            <Link href="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Catalogue</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">À propos</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-64">
              <SearchBar />
            </div>
            <ThemeToggle />
            <TelegramButton className="text-xs px-3 py-1.5" />
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-4">
              <SearchBar />
            </div>
            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium">Accueil</Link>
              <Link href="/catalog" onClick={() => setMobileOpen(false)} className="text-sm font-medium">Catalogue</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium">À propos</Link>
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <ThemeToggle />
              <TelegramButton className="text-xs" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}