export function AdBanner({ 
  type = 'banner', 
  className = '' 
}: { 
  type?: 'banner' | 'sidebar' | 'inline'; 
  className?: string;
}) {
  return (
    <div 
      className={`bg-gray-200 dark:bg-gray-800 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm font-medium ${className}`}
      style={{ minHeight: type === 'sidebar' ? '250px' : '90px' }}
    >
      <div className="text-center p-4">
        <p className="opacity-70">Publicité</p>
        <p className="text-xs mt-1 opacity-50">Espace publicitaire</p>
      </div>
    </div>
  );
}