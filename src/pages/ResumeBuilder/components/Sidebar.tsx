import { builder_urls } from "@/config/builderUrls";
import { resumeBuildrUrl } from "@/config/builderUrls";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type SidebarProps = {
  isCollapsed: boolean;
};
const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <aside className="mt-5 h-full flex flex-col">
      {/* <Button className="self-end mr-4" size={"icon"} variant={"ghost"}>
        {isCollapsed ? <PinRightIcon /> : <PinLeftIcon />}
      </Button> */}
      <div>
        {builder_urls.map((link, index) => (
          <Link
            key={index}
            to={resumeBuildrUrl + link.url}
            className={cn(
              "flex items-center px-5 py-4 gap-x-3",
              isCollapsed && "justify-center"
            )}
          >
            <link.icon className="h-5 w-5" />

            {!isCollapsed ? (
              <p className="text-sm tracking-tight text-primary">
                {link.title}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
