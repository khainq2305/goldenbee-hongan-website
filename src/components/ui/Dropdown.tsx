'use client';

import { useState, useRef, useEffect } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

type DropdownMenuProps = {
  onEdit?: () => void;
};

export default function DropdownMenu({ onEdit }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Open menu"
      >
        <HiOutlineDotsVertical className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer px-4"
            onClick={() => {
              setOpen(false);
              onEdit?.();
            }}
          >
            Chỉnh sửa
          </div>
        </div>
      )}
    </div>
  );
}
