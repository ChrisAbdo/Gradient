"use client";

import React from "react";
import copy from "copy-to-clipboard";
import { Button } from "./ui/button";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamSwitcher from "./team-switcher";
import { UserDropdown } from "./user-dropdown";

export const Examples = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2>Component Examples</h2>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="tooltip" variant="ghost">
                <QuestionMarkCircledIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm max-w-xs">
                Some example components that use the gradient generator.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <code className="px-2 py-3 rounded-md text-sm relative border flex justify-between items-center">
        <TeamSwitcher />
        <UserDropdown />
      </code>
    </div>
  );
};
