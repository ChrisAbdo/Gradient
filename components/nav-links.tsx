import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://www.github.com/chrisabdo",
    icon: GitHubLogoIcon,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/abdo_eth",
    icon: TwitterLogoIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/christopher-abdo/",
    icon: LinkedInLogoIcon,
  },
];

export default function NavLinks() {
  return (
    <div className="flex space-x-1">
      {socialLinks.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="ghost" size="icon">
            <link.icon className="h-6 w-6" />
            <span className="sr-only">{link.name}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
}
