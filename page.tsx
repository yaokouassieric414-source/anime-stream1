import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Dernière mise à jour : Novembre 2026
        </p>
        <h2 className="text-xl font-bold mt-6 mb-3">Données collectées</h2>
        <p className="mb-4">
          AnimeStream utilise uniquement le localStorage de votre navigateur pour stocker vos favoris. 
          Aucune donnée personnelle n'est collectée ni transmise à des serveurs tiers.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-3">Publicités</h2>
        <p className="mb-4">
          Des emplacements publicitaires peuvent être présents sur le site. Les publicités tierces 
          peuvent utiliser des cookies conformément à leurs propres politiques.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-3">Contact</h2>
        <p>
          Pour toute question concernant cette politique, contactez-nous via notre canal Telegram.
        </p>
      </div>
    </div>
  );
}