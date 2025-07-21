import ProductImages from "../chi-tiet-san-pham/ProductImages";
import ProductInfo from "../chi-tiet-san-pham/ProductInfo";
import ProductSpecs from "../chi-tiet-san-pham/ProductSpecs";
import ProductDescription from "../chi-tiet-san-pham/ProductDescription";
import ProductReviews from "../chi-tiet-san-pham/ProductReviews";
import RelatedProducts from "../chi-tiet-san-pham/RelatedProducts";
import SuggestedProducts from "../chi-tiet-san-pham/SuggestedProducts";

export default function ProductDetailPage() {
  return (
    <main className="bg-[#f6f7fb] min-h-screen pt-8">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="lg:flex lg:gap-6">
          {/* LEFT: Hình ảnh */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-6 self-start">
            <ProductImages />
          </div>

          {/* RIGHT: Thông tin, specs, mô tả */}
          <div className="w-full lg:w-[55%] mt-6 lg:mt-0 space-y-6">
            <ProductInfo />
            <ProductSpecs />
            <ProductDescription />
          </div>
        </div>

        {/* Đánh giá */}
        <ProductReviews />

        {/* Sản phẩm liên quan */}
        <RelatedProducts />

        {/* Sản phẩm gợi ý */}
        <SuggestedProducts />
      </div>
    </main>
  );
}
