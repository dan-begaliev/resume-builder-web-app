import { resumeBuildrUrl } from "@/config/links";
import { RocketIcon } from "@radix-ui/react-icons";

type SidebarLink = {
  title: string;
  icon: React.ReactNode;
  url: string;
};

const sidebar_links: SidebarLink[] = [
  {
    title: "Contact",
    icon: <RocketIcon className="w-6 h-6" />,
    url: resumeBuildrUrl + "/contact",
  },
  {
    title: "Summary",
    icon: <RocketIcon className="w-6 h-6" />,
    url: resumeBuildrUrl + "/summary",
  },
  {
    title: "Education",
    icon: <RocketIcon className="w-6 h-6" />,
    url: resumeBuildrUrl + "/education",
  },
  {
    title: "Skills",
    icon: <RocketIcon className="w-6 h-6" />,
    url: resumeBuildrUrl + "/skills",
  },
  {
    title: "Experience",
    icon: <RocketIcon className="w-6 h-6" />,
    url: resumeBuildrUrl + "/experience",
  },
  {
    title: "Finalize",
    icon: <RocketIcon className="w-6 h-6" />,
    url: resumeBuildrUrl + "/finalize",
  },
];

const Sidebar = () => {
  return (
    <>
      {sidebar_links.map((link, index) => (
        <div key={index} className="flex items-center gap-2 px-5 py-4 ">
          <div className="flex -space-x-3 rtl:space-x-reverse">{link.icon}</div>
          <p className="text-sm tracking-tight text-muted-foreground">
            {link.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default Sidebar;
