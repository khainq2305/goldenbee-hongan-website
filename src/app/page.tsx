"use client";

import BannerSlider from "../components/ui/Banner";
import ProductCard from "../components/ui/productCard";
import DropdownMenu from "../components/ui/Dropdown";
import MenuSidebar from "@/components/layout/MenuSidebar";
import AdventList from "@/components/ui/AdventList";
import SlideProductSale from "@/components/ui/SlideProductSale";
import SliderBrand from "@/components/ui/sliderBrand";
import LogoGrid from "@/components/ui/LogoGrid";
import RecommendationBar from "@/components/ui/RecommendationBar";
import type { ComponentProps } from "react";

// Lấy props của ProductCard để đảm bảo đúng kiểu
type ProductCardProps = ComponentProps<typeof ProductCard>;

export default function Home() {
  const mockProducts: ProductCardProps[] = [
    {
      image:
        "https://vinabooks.vn/wp-content/uploads/2024/02/t_duy_ng_c_b_a_1.png",
      name: "Tư duy ngược - Nguyễn An Dũng",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://product.hstatic.net/200000504927/product/chat-gpt-thuc-chien_c08d8e80da304e83bc464b4853e282fc_large.jpg",
      name: "Chat GPT - Thực Chiến",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://nhasachphuongnam.com/images/detailed/293/dan-dat-mot-bay-soi-hay-chan-mot-dan-cuu.jpg",
      name: "Dẫn dắt sói hay chăn cừu ?",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://product.hstatic.net/200000692705/product/combo4_b8dc325b4d634b9992c8c53927c9d851_grande.jpg",
      name: "Combo 4 cuốn - chatGPT",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0738/5255/1445/files/45d8f43106cf414f63d6ba0f15f63b2d_medium.jpg?v=1722341581",
      name: "Tư duy ngược",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://vinabooks.vn/wp-content/uploads/2024/02/t_duy_ng_c_b_a_1.png",
      name: "Tư duy ngược - Nguyễn An Dũng",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://nhasachphuongnam.com/images/detailed/293/dan-dat-mot-bay-soi-hay-chan-mot-dan-cuu.jpg",
      name: "Dẫn dắt sói hay chăn cừu ?",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://product.hstatic.net/200000504927/product/chat-gpt-thuc-chien_c08d8e80da304e83bc464b4853e282fc_large.jpg",
      name: "Chat GPT - Thực Chiến",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0738/5255/1445/files/45d8f43106cf414f63d6ba0f15f63b2d_medium.jpg?v=1722341581",
      name: "Tư duy ngược",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
    {
      image:
        "https://product.hstatic.net/200000692705/product/combo4_b8dc325b4d634b9992c8c53927c9d851_grande.jpg",
      name: "Combo 4 cuốn - chatGPT",
      salePrice: 28990000,
      regularPrice: 33990000,
      discountPercent: 15,
      soldCount: 123,
      status: "discount",
    },
  ];

  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1280px] mx-auto px-2">
          <div className="flex space-x-2">
            <div className="hidden lg:block mt-3">
              <MenuSidebar />
            </div>

            <div className="flex-1 min-w-0 overflow-hidden px-3">
              {/* Banner không bị tràn */}
              <div className=" rounded-xl bg-white mt-3 py-4">
                <BannerSlider
                  banners={[
                    {
                      id: 1,
                      imageUrl:
                        "https://s3-ap-southeast-1.amazonaws.com/storage.adpia.vn/affiliate_document/multi/sendo-sale-rat-that-4-4.jpg",
                    },
                    {
                      id: 2,
                      imageUrl:
                        "https://thuvienmuasam.com/uploads/default/original/3X/6/5/6539a952ecff5c234edac5f6c236a7bc49e21f2c.jpeg",
                    },
                    {
                      id: 3,
                      imageUrl:
                        "https://thuvienmuasam.com/uploads/default/original/3X/6/5/6539a952ecff5c234edac5f6c236a7bc49e21f2c.jpeg",
                    },
                    {
                      id: 4,
                      imageUrl:
                        "https://thuvienmuasam.com/uploads/default/original/3X/6/5/6539a952ecff5c234edac5f6c236a7bc49e21f2c.jpeg",
                    },
                  ]}
                />
              </div>
              {/* các component khác */}
              <div className="mt-3">
                <AdventList />
              </div>

              <div className="mt-3">
                <SlideProductSale />
              </div>

              <div className="mt-3">
                <SliderBrand />
              </div>

              <div className="mt-3 ">
                <LogoGrid />
              </div>

              <div className="mt-3">
                <RecommendationBar />
              </div>
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-3 mb-50">
                  {mockProducts.map((item, index) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
