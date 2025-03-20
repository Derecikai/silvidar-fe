"use client";
import React from "react";
import { Button } from "@/components/ui/button";
const flo = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // Add weights as needed
  style: ["normal"],
});
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrdersProfile } from "./orders";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Separator } from "../ui/separator";

export default function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="flex ml-[7px]  bg-main-800 text-main-600 w-[95%] md:w-[25%] md:gap-5 h-[60px]">
        <TabsTrigger
          className="text-base h-[40px] w-[50%] md:w-[40%] "
          value="account"
        >
          Comenzi
        </TabsTrigger>
        {/* <Separator
          orientation="vertical"
          className="bg-main-600/20 hidden md:block"
        /> */}
        <TabsTrigger
          className="text-base h-[40px] w-[50%] md:w-[40%] text-main-600"
          value="password"
        >
          Salvate
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="bg-main-800 text-main-600 border border-main-700/20">
          <CardHeader className="border-b border-main-700/20">
            <CardTitle className={`${flo.className}`}>
              Comenzile dumneavoastră
            </CardTitle>
            <CardDescription className={`${roboto.className}`}>
              Aici puteți vedea comenzile dumneavoastră pe o perioada de 90 de
              zile.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <OrdersProfile />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Aici puteți vedea comenzile dumneavoastră
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
