'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../../components/ui/productCard'
import { useRef } from 'react'

export default function RelatedProducts() {
  const items = Array(10).fill({
    image: '/images/ProductDetail/product_image_badge.png',
    name: 'TƯ DUY NGƯỢC - Nguyễn An Dũng',
    salePrice: 5850000,
    regularPrice: 6300000,
    discountPercent: 7,
    soldCount: 100,
    status: 'discount',
  })

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-white p-6 rounded-md space-y-5 mt-6 relative">
      <h2 className="text-base font-semibold mb-2 px-2">SẢN PHẨM LIÊN QUAN</h2>

      {/* Nút trái */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hidden xl:flex"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      {/* Danh sách sản phẩm */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-1 scrollbar-hide"
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-[200px] max-w-[200px] flex-shrink-0">
            <ProductCard {...item} />
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hidden xl:flex"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  )
}
