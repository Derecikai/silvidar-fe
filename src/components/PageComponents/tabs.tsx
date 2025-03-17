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
const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrdersProfile } from "./orders";
import { Source_Sans_3 } from "next/font/google";

export default function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="grid bg-main-800 w-full grid-cols-2 ">
        <TabsTrigger className="border border-main-700/20 " value="account">
          Comenzi
        </TabsTrigger>
        <TabsTrigger className="border border-main-700/20" value="password">
          Salvate
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="bg-main-800 text-main-600 border border-main-700/20">
          <CardHeader className="border-b border-main-700/20">
            <CardTitle>Comenzile dumneavoastră</CardTitle>
            <CardDescription>
              Aici puteți vedea comenzile dumneavoastră.
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
