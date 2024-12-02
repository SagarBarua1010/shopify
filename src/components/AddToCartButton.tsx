"use client";
import { twMerge } from "tailwind-merge";

const AddToCartButton = () => {
  return (
    <button
      onClick={() => window.alert("button clicked")}
      className={twMerge(
        "bg-transparent border border-skyColor test-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2"
      )}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
