import React from "react";
import { Installation } from "@/components/simple-installation";
import { HowItWorks } from "@/components/how-it-works";
import { Usage } from "@/components/usage";
import { Examples } from "@/components/examples";
import Intro from "@/components/intro";
import BottomExamples from "@/components/bottom-examples";

export default function Home() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 space-y-12">
        <Intro />
        <HowItWorks />
        <Installation />
        <Usage />
        <Examples />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="mb-2">More Examples</h2>
          <BottomExamples />
        </div>
      </div>
    </div>
  );
}
