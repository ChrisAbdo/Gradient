"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GitHubLogoIcon,
  HeartFilledIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Installation } from "@/components/simple-installation";
import { HowItWorks } from "@/components/how-it-works";
import { Usage } from "@/components/usage";
import { Examples } from "@/components/examples";
import { generateRandomString } from "@/lib/hooks/use-generate-string";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 space-y-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">
            Random Gradient Generator
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Generate random gradients for your next project
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            This is a simple random gradient generator that you can use for your
            next project. You can use the generated gradients for your
            backgrounds, avatars, and more.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-4">
            <Button>
              <GitHubLogoIcon className="h-6 w-6 mr-2" />
              View Repo
            </Button>
            <Button variant="outline">
              <VideoIcon className="h-6 w-6 mr-2" />
              Demo Video
            </Button>
          </div>
        </div>

        <HowItWorks />
        <Installation />
        <Usage />
        <Examples />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="mb-2">More Examples</h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Avatar key={index}>
                    <AvatarImage
                      src={`http://localhost:3000/gen/${generateRandomString(
                        10
                      )}`}
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
                    src={`http://localhost:3000/gen/${generateRandomString(
                      10
                    )}`}
                    className="w-[25%] h-auto rounded-md"
                  />
                ))}
              </CardContent>
            </Card>
          </dl>
        </div>
      </div>
    </div>
  );
}
