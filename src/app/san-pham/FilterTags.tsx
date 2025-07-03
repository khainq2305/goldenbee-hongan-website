"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

interface FilterTagsProps {
  onFilterClick: () => void;
}

export default function FilterTags({ onFilterClick }: FilterTagsProps) {
  const selectedBrands = ["Thiên Long", "Deli"];

  return (
    <div className="flex lg:hidden bg-white p-3 rounded-none lg:rounded-lg shadow-sm items-center gap-2 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 border-gray-300 h-8 px-3 py-1.5 text-sm font-normal text-gray-700 hover:bg-gray-100"
        onClick={onFilterClick}
      >
        <Filter className="w-4 h-4 text-gray-600" /> Lọc
      </Button>

      {selectedBrands.map((brand) => (
        <div
          key={brand}
          className="flex items-center bg-gray-200 text-gray-700 text-sm py-1 px-2 rounded-full border border-gray-300"
        >
          <span>{brand}</span>
          <X className="ml-1 w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>
      ))}
    </div>
  );
}
