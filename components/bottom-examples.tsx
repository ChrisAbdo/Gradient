"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { generateRandomString } from "@/lib/hooks/use-generate-string";

export default function BottomExamples() {
  return (
    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Avatars</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <Avatar key={index}>
              <AvatarImage
                src={`http://localhost:3000/gen/${generateRandomString(10)}`}
              />
              <AvatarFallback>
                <HeartFilledIcon />
              </AvatarFallback>
            </Avatar>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Backgrounds</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          {Array.from({ length: 3 }).map((_, index) => (
            <img
              key={index}
              src={`http://localhost:3000/gen/${generateRandomString(10)}`}
              className="w-[25%] h-auto rounded-md"
            />
          ))}
        </CardContent>
      </Card>
    </dl>
  );
}
