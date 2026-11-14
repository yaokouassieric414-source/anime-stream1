import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { FavoritesProvider } from '@/lib/FavoritesContext';
import { AdPopup } from '@/components/AdPopup';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['anime', 'streaming', 'catalogue', 'manga', 'animé'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}>
        <ThemeProvider>
          <FavoritesProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <AdPopup />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}