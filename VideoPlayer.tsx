'use client';

import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  animeId: number;
  title: string;
  trailer?: { id?: string; site?: string };
  streamingEpisodes?: Array<{ title: string; url: string; site: string; thumbnail?: string }>;
}

export function VideoPlayer({ animeId, title, trailer, streamingEpisodes }: VideoPlayerProps) {
  const [selectedEpisode, setSelectedEpisode] = useState(0);

  const hasLegalSource = streamingEpisodes && streamingEpisodes.length > 0;

  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
        {hasLegalSource ? (
          <div className="text-center text-white p-8">
            <Play size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Lecteur prêt</p>
            <p className="text-sm opacity-70 mt-2">
              Source disponible via {streamingEpisodes[0].site}
            </p>
            <a
              href={streamingEpisodes[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm"
            >
              <ExternalLink size={16} />
              Regarder sur {streamingEpisodes[0].site}
            </a>
          </div>
        ) : (
          <div className="text-center text-white p-8 max-w-md">
            <Play size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">Aucune source vidéo légale disponible</p>
            <p className="text-sm opacity-70 mt-2">
              Ce site ne fournit pas de streaming illégal. Consultez les sources officielles.
            </p>
            <a
              href={`https://anilist.co/anime/${animeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm border border-white/20"
            >
              <ExternalLink size={16} />
              Voir sur AniList
            </a>
          </div>
        )}
      </div>

      {streamingEpisodes && streamingEpisodes.length > 0 && (
        <div className="bg-gray-900 p-4">
          <h4 className="text-white text-sm font-medium mb-2">Épisodes</h4>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {streamingEpisodes.slice(0, 12).map((ep, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedEpisode(idx)}
                className={`flex-shrink-0 px-3 py-1 rounded text-xs ${
                  selectedEpisode === idx
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {ep.title || `Ep ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}