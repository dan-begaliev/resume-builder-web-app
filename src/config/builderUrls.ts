import Contact from "@/components/BuilderSteps/Contact";
import Education from "@/components/BuilderSteps/Education";
import Experience from "@/components/BuilderSteps/Experience";
import Finalize from "@/components/BuilderSteps/Finalize";
import Skills from "@/components/BuilderSteps/Skills";
import Summary from "@/components/BuilderSteps/Summary";
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
  element: React.ElementType;
};

export const builder_urls: SidebarLink[] = [
  {
    title: "Contact",
    icon: PersonIcon,
    url: "/contact",
    element: Contact,
  },
  {
    title: "Summary",
    icon: InfoCircledIcon,
    url: "/summary",
    element: Summary,
  },
  {
    title: "Education",
    icon: BackpackIcon,
    url: "/education",
    element: Education,
  },
  {
    title: "Skills",
    icon: MixIcon,
    url: "/skills",
    element: Skills,
  },
  {
    title: "Experience",
    icon: StarIcon,
    url: "/experience",
    element: Experience,
  },
  {
    title: "Finalize",
    icon: BookmarkIcon,
    url: "/finalize",
    element: Finalize,
  },
];
