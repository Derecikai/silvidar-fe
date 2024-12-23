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
    <div className="lg:col-span-1 bg-main-800 p-4 rounded shadow">
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
        </AccordionItem>
      </Accordion>
    </div>
  );
}
