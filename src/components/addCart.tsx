import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Inter } from "next/font/google";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["400"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

export default function AddCart({
  productData,
}: {
  productData: TPetFoodData;
}) {
  console.log("THIS IS PRODUCTDATA!!!!!!!!: ", productData);

  return (
    <Tabs defaultValue="account" className="w-full lg:p-3">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Sac</TabsTrigger>
        <TabsTrigger value="password">Kilogram</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle
              className={`${roboto.className.toUpperCase()} text-3xl lg:text-4xl text-main-600/90`}
            >
              {productData.name}
            </CardTitle>
            <CardDescription
              className={`${roboto.className.toUpperCase()} text-lg text-main-700/70`}
            >
              {productData.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="lg:w-[60%] lg:mx-auto"
                defaultValue="Pedro Duarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                className="lg:w-[60%] lg:mx-auto"
                id="username"
                defaultValue="@peduarte"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-main-700 hover:bg-main-700/80">
              Adauga în coș
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
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
            <Button className="bg-main-700">Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
