import Image from "next/image";
import React from "react";
import AddCart from "@/components/addCart";

export default async function page({
  searchParams,
}: {
  searchParams: { id: number };
}) {
  // Access the "id" query parameter
  const { id } = searchParams;
  console.log(id);
  const response = await fetch(`http://localhost:8080/product?id=${id}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch individual product");
  }
  const uglyData: TPetFoodData[] = await response.json();
  const ProductData: TPetFoodData = uglyData[0];

  return (
    <div className="w-full h-screen bg-white">
      <div className="h-[100%] flex flex-col lg:flex-row mt-2 rounded-md w-[90%] m-auto bg-main-800">
        <div className="lg:w-[50%] w-[100%] flex-1 h-[100%]">
          <Image
            src={ProductData.imageUrl}
            className="w-full flex-1 min-h-[100%] rounded-tl-md"
            alt="product-image"
            width={50}
            height={50}
            quality={100} // Set the image quality (0–100)
            layout="responsive" // Makes the image responsive
            objectFit="cover"
          />
        </div>
        <div className="flex-1 w-full h-[100%] flex justify-center">
          <AddCart productData={ProductData} />
        </div>
      </div>
    </div>
  );
}
