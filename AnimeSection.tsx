import { AnimeCard } from './AnimeCard';

interface SectionProps {
  title: string;
  animes: any[];
  loading?: boolean;
}

export function AnimeSection({ title, animes, loading }: SectionProps) {
  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[2/3] bg-gray-300 dark:bg-gray-700 rounded-lg" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded mt-1 w-2/3" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!animes?.length) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </section>
  );
}