"use client";

import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CustomButton from "./reuse/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <nav className="w-full pt-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
              <span className="bg-gradient-to-r from-[#9747FF] to-[#00F0FF] bg-clip-text text-transparent uppercase">
                JussySol
              </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-md hover:text-white/60 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-md hover:text-white/60 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="archive"
              smooth={true}
              duration={500}
              className="text-md hover:text-white/60 cursor-pointer"
            >
              Achievements
            </ScrollLink>
            <ScrollLink
              to="partner"
              smooth={true}
              duration={500}
              className="text-md hover:text-white/60 cursor-pointer"
            >
              Partnerships
            </ScrollLink>
            <ScrollLink
              to="community"
              smooth={true}
              duration={500}
              className="text-md hover:text-white/60 cursor-pointer"
            >
              Community
            </ScrollLink>
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:block">
            <CustomButton text="Book a call" onClick={handleClick} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gradient-to-r from-[#002211] to-[#1A0B2E] border-none"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-md hover:text-white/60 cursor-pointer"
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-md hover:text-white/60 cursor-pointer"
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="archive"
                    smooth={true}
                    duration={500}
                    className="text-md hover:text-white/60 cursor-pointer"
                  >
                    Achievements
                  </ScrollLink>
                  <ScrollLink
                    to="partner"
                    smooth={true}
                    duration={500}
                    className="text-md hover:text-white/60 cursor-pointer"
                  >
                    Partnerships
                  </ScrollLink>
                  <ScrollLink
                    to="community"
                    smooth={true}
                    duration={500}
                    className="text-md hover:text-white/60 cursor-pointer"
                  >
                    Community
                  </ScrollLink>
                  <CustomButton text="Book a call" onClick={handleClick} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
