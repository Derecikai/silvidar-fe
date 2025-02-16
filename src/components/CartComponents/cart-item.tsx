import Image from "next/image";
import React from "react";

type TCartItem = {
  data: TCartQuantity;
};

export default function CartItem({ data }: TCartItem) {
  return (
    <div className="flex w-[96%] items-center justify-between gap-10 mt-2 mx-auto  backdrop-blur-md bg-main-300/85  h-[30%] rounded-md p-3">
      <div className="flex flex-col md:flex-row w-[40%] h-[100%] ">
        <Image
          className="bg-cover min-h-[100%] min-w-[20%] max-w-[30%] rounded-md"
          src={data.imageUrl}
          alt="product-cart-iamge"
          width={50}
          height={50}
          quality={100} // Set the image quality (0–100)
          layout="responsive" // Makes the image responsive
          objectFit="cover"
        />

        <div className="flex flex-col">
          <p>{data.animalType}</p>
          <p>{data.name}</p>
          <p>{data.animalType}</p>
        </div>
      </div>
      <p>{data.price}</p>
      <p>{data.price}</p>
      <p>{data.price}</p>
      <div></div>
      <p></p>
    </div>
  );
}
