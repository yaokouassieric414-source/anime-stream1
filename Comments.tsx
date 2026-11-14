'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  text: string;
  date: string;
}

export function Comments({ animeId }: { animeId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(`comments-${animeId}`);
    if (stored) setComments(JSON.parse(stored));
  }, [animeId]);

  const addComment = () => {
    if (!text.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      text: text.trim(),
      date: new Date().toLocaleDateString('fr-FR'),
    };
    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(`comments-${animeId}`, JSON.stringify(updated));
    setText('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Commentaires</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ajouter un commentaire..."
          className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm"
          onKeyDown={(e) => e.key === 'Enter' && addComment()}
        />
        <button
          onClick={addComment}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90"
        >
          Envoyer
        </button>
      </div>
      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-sm">Aucun commentaire pour le moment.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
              <p className="text-sm">{c.text}</p>
              <p className="text-xs text-gray-500 mt-1">{c.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}