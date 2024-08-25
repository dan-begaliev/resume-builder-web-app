import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RocketIcon } from "@radix-ui/react-icons";

import { BorderBeam } from "@/components/magicui/border-beam";

import avatar_img from "@/assets/avatars/avatar-1.avif";
import { Review } from "@/components/Reviews";

// type HeroProps = {
//   heading: {
//     subtitle: string;
//   };
//   customersText?: string;
// };

type AvatarProps = {
  src: string;
  alt: string;
};
const avatarList: AvatarProps[] = [
  {
    src: avatar_img,
    alt: "Avatar 1",
  },
  {
    src: avatar_img,

    alt: "Avatar 2",
  },
  {
    src: avatar_img,

    alt: "Avatar 3",
  },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden gap-y-8 py-10 pb-0 min-h-[calc(100dvh-var(--header-height))] flex flex-col">
      <BorderBeam className="z-30" />
      <div className="relative z-10 flex flex-col pt-[35px]">
        <div className="flex items-center gap-2 px-4 py-2 justify-center">
          <div className={cn("flex -space-x-3 rtl:space-x-reverse")}>
            {avatarList.map(({ alt, src }) => (
              <img
                key={alt}
                alt={alt}
                src={src}
                width={28}
                height={28}
                className="rounded-full border-2 border-background"
              />
            ))}
          </div>

          <p className="text-sm tracking-tight text-muted-foreground">
            Trusted by over 1k job seekers
          </p>
        </div>
      </div>
      <div className="mx-auto flex  shrink-0 flex-col items-center justify-center gap-y-6 px-2 py-4">
        <h1 className="gradient-text max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary dark:text-dark-text-primary md:tracking-[-2.16px]">
          Build Your Resume at <br className="hidden md:block" />{" "}
          <span>warp speed</span>
        </h1>
        <h2 className="text-md max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
          Fueled by AI magic. Yep, another AI thing, we know, we know…
        </h2>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <Button asChild size={"lg"} className="rounded-[100px] text-md">
          <Link
            to={"/platform"}
            className="font-bold flex items-center gap-x-3"
          >
            <RocketIcon />
            <span className="block sm:hidden">Create</span>
            <span className="hidden sm:inline">Create Resume</span>
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          size={"lg"}
          className="rounded-[100px] text-md"
        >
          <Link to="#" className="font-bold">
            Learn More
          </Link>
        </Button>
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
}
