import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons";

export default function Intro() {
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-muted-foreground">
        Random Gradient Generator
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Generate random gradients for your next project
      </p>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        This is a simple random gradient generator that you can use for your
        next project. You can use the generated gradients for your backgrounds,
        avatars, and more.
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
  );
}
