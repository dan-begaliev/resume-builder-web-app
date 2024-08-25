import { VercelLogoIcon } from "@radix-ui/react-icons";

import { landingNav } from "@/config/headersLinks";

import { Button } from "../ui/button";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";

// import UserNav from "./UserNav";

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex w-full flex-col border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[--header-height]">
      <div className="max-w-screen-2xl container flex h-full items-center px-3 md:px-8">
        <div className="mr-0 flex text-sm md:mr-4">
          <Link to={"/"} className="mr-10 flex items-center space-x-2">
            <VercelLogoIcon className="w-6 h-6" />
            <span className="inline-block text-base font-bold md:text-lg">
              <span className="hidden md:inline">Resume.ai</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {landingNav.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="transition-colors hover:text-foreground/60"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto  flex items-center gap-2 justify-self-end">
          <div className="items-center gap-2 justify-self-end">
            <Button size={"sm"} variant={"secondary"}>
              Create Resume
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
