import React from "react";
import { ProductType } from "../../type";
import PriceFormat from "./PriceFormat";

const ProductPrice = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;
  return (
    <div className="flex items-center gap-2">
      <PriceFormat
        amount={discountedPrice}
        className="text-gray-500 line-through"
      ></PriceFormat>

      <PriceFormat
        amount={regularPrice}
        className="font-semibold text-skyColor"
      ></PriceFormat>
    </div>
  );
};

export default ProductPrice;