"use client";

import React from "react";
import { ChevronRight, MapPin } from "lucide-react";

interface MobileAddressBarProps {
  address: string;
  onClick?: () => void;
}

export default function MobileAddressBar({
  address,
  onClick,
}: MobileAddressBarProps) {
  return (
    <div
      className="lg:hidden bg-white shadow-sm p-4 mb-4 flex items-center justify-between rounded-none lg:rounded-lg"
      onClick={onClick}
    >
      <div className="flex flex-1 items-center">
        <MapPin className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
        <p className="text-sm font-normal text-black">{address}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
    </div>
  );
}
