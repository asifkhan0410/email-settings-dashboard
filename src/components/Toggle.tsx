import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, disabled = false }) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`
        relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-offset-0
        ${checked ? 'bg-gray-900' : 'bg-gray-200 shadow-inner shadow-gray-200'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out shadow-inner shadow-gray-150
          ${checked ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  );
};