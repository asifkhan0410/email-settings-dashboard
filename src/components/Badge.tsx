import React from 'react';

export type BadgeVariant = 'primary' | 'verified' | 'unverified';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const badgeStyles: Record<BadgeVariant, string> = {
  primary: 'bg-orange-100 text-orange-700 border-orange-200',
  verified: 'bg-green-100 text-green-700 border-green-200',
  unverified: 'bg-gray-100 text-gray-700 border-gray-200',
};

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${badgeStyles[variant]}`}
    >
      {children}
    </span>
  );
};