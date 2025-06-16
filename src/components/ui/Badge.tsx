import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`inline-block bg-purple-100 text-black text-sm font-semibold px-2 py-1 rounded-md border border-purple-300 ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
