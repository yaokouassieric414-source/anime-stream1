import Link from 'next/link';
import { TelegramButton } from './TelegramButton';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AnimeStream
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Votre catalogue d'animés moderne et rapide.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li><Link href="/catalog" className="hover:text-primary">Catalogue</Link></li>
              <li><Link href="/about" className="hover:text-primary">À propos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/privacy" className="hover:text-primary">Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Communauté</h4>
            <TelegramButton />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AnimeStream. Données fournies par AniList.
        </div>
      </div>
    </footer>
  );
}