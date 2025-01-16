"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function FilterArea() {
  const [pret, setPret] = useState(33);
  return (
    <div className="hidden lg:block sticky top-16 lg:col-span-1 rounded-[15px] lg:rounded-[5px] max-h-[700px] bg-main-600 p-4 shadow text-main-800 z-0">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>FILTRU</AccordionTrigger>

          <AccordionContent className="mt-4">Pret = {pret}</AccordionContent>
          <AccordionContent>
            <Slider min={pret} />
          </AccordionContent>
          <AccordionContent className="mt-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Alege firma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Firme</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </AccordionContent>
          <AccordionContent className="mt-4">
            <AccordionContent className="mt-4">Pret = {pret}</AccordionContent>
            <AccordionContent>
              <Slider min={pret} />
            </AccordionContent>{" "}
            <AccordionContent className="mt-4">Pret = {pret}</AccordionContent>
            <AccordionContent>
              <Slider min={pret} />
            </AccordionContent>
          </AccordionContent>
          <AccordionContent className="mt-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Alege firma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Firme</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </AccordionContent>
          <AccordionContent className="mt-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Alege firma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Firme</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </AccordionContent>
          <AccordionContent className="mt-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Alege firma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Firme</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </AccordionContent>
          {/* a 2-a */}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
