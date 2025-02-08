import Image from "next/image";
import React from "react";
import AddCart from "@/components/addCart";
import ImageProductSection from "@/components/Product/image-product-section";
import ProductDetails from "@/components/Product/product-details";
import PricesArea from "@/components/Product/price-area";

export default async function page({
  searchParams,
}: {
  searchParams: { id: number };
}) {
  // Access the "id" query parameter
  const { id } = searchParams;
  console.log(id);
  const response = await fetch(`http://localhost:8080/product?id=${id}`, {
    cache: "reload",
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch individual product");
  }
  const uglyData: TPetFoodData[] = await response.json();
  const ProductData: TPetFoodData = uglyData[0];

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-4 p-4 min-h-screen w-[100%] md:w-[86%] mx-auto">
      {/* Left section - appears first */}
      <div className=" md:sticky md:top-14 md:row-span-3 bg-primary-200 p-4 rounded-lg h-[97%]">
        <ImageProductSection data={ProductData} />
      </div>
      <div className="md:col-span-2 md:row-span-3 bg-white p-4 rounded-lg min-h-full">
        <ProductDetails data={ProductData} />
      </div>
      {/* Right section - appears second */}
      {/* <div className="md:col-span-1 md:row-span-1 bg-rose-950 p-4 rounded-lg  h-[100%]"></div> */}

      {/* Bottom right */}
      <div className="md:col-start-2 md:col-end-4 bg-white p-4 rounded-lg h-[100%]">
        <PricesArea data={ProductData} />
      </div>
    </div>
    // <div className="w-full h-screen bg-white">
    //   <div className="h-[100%] flex flex-col lg:flex-row mt-2 rounded-md w-[90%] m-auto bg-main-800">
    //     <div className="lg:w-[50%] w-[100%] flex-1 h-[100%]">
    //       <Image
    //         src={ProductData.imageUrl}
    //         className="w-full flex-1 min-h-[100%] rounded-tl-md"
    //         alt="product-image"
    //         width={50}
    //         height={50}
    //         quality={100} // Set the image quality (0–100)
    //         layout="responsive" // Makes the image responsive
    //         objectFit="cover"
    //       />
    //     </div>
    //     <div className="flex-1 bg-white w-full h-[100%] flex justify-center rounded-tr-md">
    //       <AddCart productData={ProductData} />
    //     </div>
    //   </div>
    // </div>
  );
}
