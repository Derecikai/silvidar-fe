import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const exArray = [
  {
    image:
      "https://cdn.dribbble.com/userupload/15894878/file/original-e39af3f9b9d8e2cab5fad244c604fde3.png?crop=0x0-3201x2401&format=webp",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/14786819/file/original-4b84983b87432f267672518bacfd57e8.png?format=webp",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15173858/file/original-a0a7fc983ddc8603ce8a111626d188f3.png",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11886834/file/original-ca298f7c6e5a8460496d39a4fc0a80c7.png?crop=14x10-2506x1880",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/7237622/file/original-8d2612b33cb266fc48b8f75259db7e3e.png",
  },
];

export default function RealCarusel() {
  return (
    <Carousel className="w-[100%] mx-auto  pt-3">
      <CarouselContent>
        {exArray.map((_, index) => (
          <CarouselItem key={index}>
            <Card className="w-full">
              <CardContent className="bg-white w-full flex aspect-square items-center justify-center p-6 h-[300px] xl:h-[640px] rounded-xl">
                <Image
                  src={_.image}
                  className="rounded-xl"
                  alt="firstphto"
                  width={1800}
                  height={1050}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
