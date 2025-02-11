import Image from "next/image";
import React from "react";

type TCartItem = {
  data: TCartQuantity;
};

export default function CartItem({ data }: TCartItem) {
  return (
    <div className="flex w-[96%] items-center justify-between gap-10 mt-2 mx-auto  backdrop-blur-md bg-main-300/85  h-[30%] rounded-md p-3">
      <div className="flex flex-col md:flex-row w-[40%] h-[100%] bg-slate-500">
        <div className=" w-[30%] h-[30%] md:w-[45%] md:h-[42%] ">
          <Image
            className="  rounded-md"
            src={data.imageUrl}
            alt="product-cart-iamge"
            width={50}
            height={50}
            quality={100} // Set the image quality (0–100)
            layout="responsive" // Makes the image responsive
            objectFit="cover"
          />
        </div>
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
