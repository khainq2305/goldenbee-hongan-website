import ProductInfoDesktop from "./ProductInfoDesktop";

export default function ProductInfo() {
  return (
    <>
      <div className="block lg:hidden">
      </div>
      <div className="hidden lg:block">
        <ProductInfoDesktop />
      </div>
    </>
  );
}
