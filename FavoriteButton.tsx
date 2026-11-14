'use client';

import { useFavorites } from '@/lib/FavoritesContext';
import { Heart } from 'lucide-react';

export function FavoriteButton({ animeId }: { animeId: number }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(animeId);

  return (
    <button
      onClick={() => toggleFavorite(animeId)}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
        favorited
          ? 'bg-primary text-white'
          : 'bg-primary/10 text-primary hover:bg-primary/20'
      }`}
    >
      <Heart size={16} className={favorited ? 'fill-current' : ''} />
      {favorited ? 'Dans vos favoris' : 'Ajouter aux favoris'}
    </button>
  );
}