import Link from 'next/link';
import { TELEGRAM_LINK } from '@/lib/config';
import { MessageCircle } from 'lucide-react';

export function TelegramButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors ${className}`}
    >
      <MessageCircle size={18} />
      Rejoindre Telegram
    </a>
  );
}