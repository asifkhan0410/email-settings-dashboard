import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="flex items-center gap-1">
      <button
        onClick={onBack}
        className="p-2 pr-1 hover:bg-gray-100 rounded-full transition-colors -ml-4"
        aria-label="Go back"
      >
        <ArrowLeft className="w-4 h-4 text-gray-700" />
      </button>
      <h1 className="text-md font-medium text-gray-900">{title}</h1>
    </header>
  );
};