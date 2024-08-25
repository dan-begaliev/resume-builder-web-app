import { HomeIcon } from "@radix-ui/react-icons";

export const resumeBuildrUrl = "/resume-builder";

type SidebarLink = {
  title: string;
  icon: React.ElementType;
  url: string;
};

export const builder_urls: SidebarLink[] = [
  {
    title: "Contact",
    icon: HomeIcon,
    url: "/contact",
  },
  {
    title: "Summary",
    icon: HomeIcon,
    url: "/summary",
  },
  {
    title: "Education",
    icon: HomeIcon,
    url: "/education",
  },
  {
    title: "Skills",
    icon: HomeIcon,
    url: "/skills",
  },
  {
    title: "Experience",
    icon: HomeIcon,
    url: "/experience",
  },
  {
    title: "Finalize",
    icon: HomeIcon,
    url: "/finalize",
  },
];
