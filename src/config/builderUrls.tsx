import {
  BackpackIcon,
  BookmarkIcon,
  InfoCircledIcon,
  MixIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import BuilderStepGenerator from "@/components/BuilderStepGenerator";

export const resumeBuilderUrl = "/resume-builder";

type SidebarLink = {
  title: string;
  icon: React.ElementType;
  url: string;
  element: React.ComponentType; // Type for React components
};

export const builder_urls: SidebarLink[] = [
  {
    title: "Contact",
    icon: PersonIcon,
    url: "/contact",
    element: () => <BuilderStepGenerator sectionName="contact" />, // Using as a React component
  },
  {
    title: "Summary",
    icon: InfoCircledIcon,
    url: "/summary",
    element: () => <BuilderStepGenerator sectionName="summary" />,
  },
  {
    title: "Education",
    icon: BackpackIcon,
    url: "/education",
    element: () => <BuilderStepGenerator sectionName="education" />,
  },
  {
    title: "Skills",
    icon: MixIcon,
    url: "/skills",
    element: () => <BuilderStepGenerator sectionName="skills" />,
  },
  {
    title: "Experience",
    icon: StarIcon,
    url: "/experience",
    element: () => <BuilderStepGenerator sectionName="experience" />,
  },
  {
    title: "Finalize",
    icon: BookmarkIcon,
    url: "/finalize",
    element: () => <h1>Finalize</h1>,
  },
];
