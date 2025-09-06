import React from "react";

export type BadgeVariant = "primary" | "verified" | "unverified";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const badgeStyles: Record<BadgeVariant, string> = {
  primary:
    "bg-orange-100 text-orange-500 border-orange-200 shadow-sm shadow-orange-100",
  verified:
    "bg-lime-100 text-lime-600 border-lime-400 shadow-sm shadow-lime-200",
  unverified:
    "bg-gray-50 text-gray-600 border-gray-300 shadow-sm shadow-gray-100",
};

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${badgeStyles[variant]}`}
    >
      {children}
    </span>
  );
};
