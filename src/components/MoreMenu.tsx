import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Settings, Trash2 } from 'lucide-react';

interface MoreMenuProps {
  onManage: () => void;
  onRemove: () => void;
}

export const MoreMenu: React.FC<MoreMenuProps> = ({ onManage, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="More options"
      >
        <MoreHorizontal className="w-4 h-4 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[140px] z-10">
          <button
            onClick={() => {
              onManage();
              setIsOpen(false);
            }}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
          >
            <Settings className="w-4 h-4" />
            Manage
          </button>
          <button
            onClick={() => {
              onRemove();
              setIsOpen(false);
            }}
            className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </button>
        </div>
      )}
    </div>
  );
};