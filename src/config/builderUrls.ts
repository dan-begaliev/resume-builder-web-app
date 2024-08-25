import {
  BackpackIcon,
  BookmarkIcon,
  InfoCircledIcon,
  MixIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons";

export const resumeBuildrUrl = "/resume-builder";

type SidebarLink = {
  title: string;
  icon: React.ElementType;
  url: string;
};

export const builder_urls: SidebarLink[] = [
  {
    title: "Contact",
    icon: PersonIcon,
    url: "/contact",
  },
  {
    title: "Summary",
    icon: InfoCircledIcon,
    url: "/summary",
  },
  {
    title: "Education",
    icon: BackpackIcon,
    url: "/education",
  },
  {
    title: "Skills",
    icon: MixIcon,
    url: "/skills",
  },
  {
    title: "Experience",
    icon: StarIcon,
    url: "/experience",
  },
  {
    title: "Finalize",
    icon: BookmarkIcon,
    url: "/finalize",
  },
];
