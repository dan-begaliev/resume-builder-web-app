import { VercelLogoIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function BuilderHeader() {
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

          <nav className="hidden items-center gap-6 text-sm md:flex"></nav>
        </div>

        <div className="ml-auto  flex items-center gap-2 justify-self-end">
          <div className="items-center gap-2 justify-self-end">
            <Button size={"sm"} variant={"secondary"} asChild>
              <Link to={"/resume-builder"}>Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
