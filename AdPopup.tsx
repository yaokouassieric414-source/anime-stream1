'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function AdPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Offre spéciale</p>
        <p className="text-xs text-gray-500 mt-1">Découvrez plus d'animés</p>
        <div className="mt-2 h-20 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
          Publicité
        </div>
      </div>
    </div>
  );
}