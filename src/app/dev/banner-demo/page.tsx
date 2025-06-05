'use client';

import BannerSlider from '@/components/ui/Banner';

const banners = [
  { id: 1, imageUrl: 'https://bookish.vn/wp-content/uploads/2019/07/banner_web_trung-bay-sach-thieu-nhi_925x412.jpg' },
  { id: 2, imageUrl: 'https://salt.tikicdn.com/ts/brickv2og/5a/eb/43/b6757b308e0195aaad79d8dd19d88fc2.jpg' },
  { id: 3, imageUrl: 'https://thietkelogo.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png' },
];


export default function BannerDemoPage() {
  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      <BannerSlider banners={banners} />
    </div>
  );
}
