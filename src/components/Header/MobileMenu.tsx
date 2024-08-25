"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { landingNav } from "@/config/headersLinks";
import { Link } from "react-router-dom";

export function MobileMenu() {
  const [navOpened, setNavOpened] = useState(false);

  const toggleNav = () => {
    setNavOpened((prev) => !prev);
  };

  return (
    <Sheet open={navOpened} onOpenChange={toggleNav}>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="hover:bg-transparent flex md:hidden"
          variant="ghost"
          aria-controls="main-menu"
          aria-expanded={navOpened}
          aria-label="Toggle main menu"
        >
          <HamburgerMenuIcon className={"h-[20px] w-[20px]"} />
        </Button>
      </SheetTrigger>
      <SheetContent
        //   removeCloseIcon
        className="flex w-full !max-w-full flex-col justify-start md:w-[500px]"
        id="main-menu"
      >
        <SheetHeader className="hidden">
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Desc</SheetDescription>
        </SheetHeader>
        <div className="container mx-auto flex w-full items-center justify-between px-4">
          <Link to={"/"} className="mr-5 flex w-[130px] items-center md:w-auto">
            <VercelLogoIcon />
          </Link>

          <div className="flex items-center gap-x-8">
            <SheetClose asChild>
              <Button
                size={"icon"}
                className="hover:bg-transparent"
                variant="ghost"
              >
                <Cross1Icon className={"h-[20px] w-[20px]"} />
              </Button>
            </SheetClose>
          </div>
        </div>
        <Separator />
        <div className="flex flex-row flex-wrap space-y-4 pt-4">
          {landingNav.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={toggleNav}
              className={"w-full justify-start px-2"}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
