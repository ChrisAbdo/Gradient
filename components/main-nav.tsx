import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import { ColorWheelIcon } from "@radix-ui/react-icons";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function MainNav() {
  return (
    <header className="bg-background">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <div className="flex items-center text-xl -m-1.5 p-1.5">
            <span className="sr-only">Gradient Generator</span>
            <ColorWheelIcon className="h-6 w-6" />
            &nbsp; Gradient Generator
          </div>
        </div>
        <div className="flex lg:hidden">
          <ModeToggle />
        </div>
        <div className="hidden lg:flex space-x-1">
          <NavLinks />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
