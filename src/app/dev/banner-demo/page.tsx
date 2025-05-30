'use client';

import BannerSlider from '../../../components/ui/Banner';

const banners = [
  {
    id: 1,
    title: 'Sạch sâu dịu nhẹ',
    subtitle: 'Da luôn khỏe mạnh. Mua 1 tặng 1 – Giảm 50%',
    imageUrl: 'https://picsum.photos/id/1015/970/320',
    ctaText: 'Mua ngay',
  },
  {
    id: 2,
    title: 'SALE RẺ HƠN',
    subtitle: 'Săn deal khoẻ re, đồng giá cực sốc',
    imageUrl: 'https://picsum.photos/id/1018/970/320',
    ctaText: 'Săn ngay',
  },
];

export default function BannerDemoPage() {
  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      <BannerSlider banners={banners} />
    </div>
  );
}
