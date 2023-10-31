"use client";

import React from "react";
import copy from "copy-to-clipboard";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Button } from "./ui/button";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

export const HowItWorks = () => {
  const [copying, setCopying] = React.useState(0);

  const onCopy = React.useCallback(() => {
    copy("https://gradient.chrisabdo.dev/api/gradient/test");
    setCopying((c) => c + 1);
    toast.success("Copied to clipboard!");
    setTimeout(() => {
      setCopying((c) => c - 1);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2>How It Works</h2>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="tooltip" variant="ghost">
                <QuestionMarkCircledIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm max-w-xs">
                All you have to do it replace RANDOM_STRING with a random string
                of your choice. This can be anything you want, but it must be
                unique. If you use the same string twice, you will get the same
                gradient.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <code
        className="px-2 py-5 rounded-md font-mono text-sm relative cursor-copy h-10 border flex items-center"
        onClick={onCopy}
      >
        <span className="truncate">
          https://gradient.chrisabdo.dev/gen/RANDOM_STRING
        </span>

        <Button
          aria-label="Copy code"
          size="icon"
          variant="secondary"
          className="absolute top-5 right-0.5 transform -translate-y-1/2 cursor-pointer flex justify-center items-center"
        >
          <MotionConfig transition={{ duration: 0.15 }}>
            <AnimatePresence initial={false} mode="wait">
              {copying ? (
                <motion.div
                  animate="visible"
                  exit="hidden"
                  initial="hidden"
                  key="check"
                  variants={variants}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  animate="visible"
                  exit="hidden"
                  initial="hidden"
                  key="copy"
                  variants={variants}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                  >
                    <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </MotionConfig>
        </Button>
      </code>
    </div>
  );
};
