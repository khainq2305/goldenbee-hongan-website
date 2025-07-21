import ProductImagesMobile from "./ProductImagesMobile";
import ProductImagesDesktop from "./ProductImagesDesktop";

export default function ProductImages() {
  return (
    <>
      <div className="block lg:hidden">
        <ProductImagesMobile />
      </div>

      <div className="hidden lg:block">
        <ProductImagesDesktop />
      </div>
    </>
  );
}
