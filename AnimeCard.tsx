import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface AnimeCardProps {
  anime: {
    id: number;
    title: { romaji?: string; english?: string };
    coverImage: { large?: string };
    averageScore?: number;
    seasonYear?: number;
    genres?: string[];
    format?: string;
  };
}

export function AnimeCard({ anime }: AnimeCardProps) {
  const title = anime.title.english || anime.title.romaji || 'Sans titre';
  const score = anime.averageScore ? (anime.averageScore / 10).toFixed(1) : null;

  return (
    <Link href={`/anime/${anime.id}`} className="group block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
        {anime.coverImage.large ? (
          <Image
            src={anime.coverImage.large}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Pas d'image
          </div>
        )}
        {score && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            {score}
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {anime.seasonYear} • {anime.format}
        </p>
      </div>
    </Link>
  );
}