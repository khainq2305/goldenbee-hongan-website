// app/dev/productCard-demo/page.tsx
import ProductCard from '../../../components/ui/productCard';
import type { ComponentProps } from 'react';

// Lấy Props của ProductCard, trong đó đã có status: ProductStatus
type ProductCardProps = ComponentProps<typeof ProductCard>;

const products: ProductCardProps[] = [
  
  {
    image: 'https://product.hstatic.net/200000979221/product/73_9ad93f747ba34bd48b3f5d692641081a.jpg',
    name: 'Chat GPT thực chiến',
    salePrice: 170000,
    soldCount: 50,
    status: 'normal',          // <-- literal đúng
  },
  {
    image: 'https://nhasachphuongnam.com/images/detailed/293/dan-dat-mot-bay-soi-hay-chan-mot-dan-cuu.jpg',
    name: 'Dẫn Dắt Một Bầy Sói Hay Chăn Một Đàn Cừu',
    salePrice: 104000,
    regularPrice: 170000,
    discountPercent: 38,
    soldCount: 100,
    status: 'discount',        // <-- literal đúng
  },
  {
    image: 'https://salt.tikicdn.com/cache/w300/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg',
    name: 'Combo 4 cuốn: ChatGPT + ChatGPT thực chiến',
    status: 'contact',         // <-- literal đúng
  },
  {
    image: 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_30012022_090138.jpg',
    name: 'SSách cho bé từ 3 tuổi - Bộ 4 cuốn Phát triển sáng tạo',
    status: 'disabled',        // <-- literal đúng
  },
];

export default function ProductList() {
  return (
<div className="bg-[#d2cece] min-h-screen p-4">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {products.map((item, i) => (
      <ProductCard key={i} {...item} />
    ))}
  </div>
</div>


  );
}

