import { builder_urls } from "@/config/builderUrls";
import { resumeBuildrUrl } from "@/config/builderUrls";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {builder_urls.map((link, index) => (
        <Link
          key={index}
          to={resumeBuildrUrl + link.url}
          className="flex items-center gap-2 px-5 py-4 "
        >
          <div className="flex -space-x-3 rtl:space-x-reverse">
            {<link.icon className="w-6 h-6" />}
          </div>
          <p className="text-sm tracking-tight text-muted-foreground">
            {link.title}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Sidebar;
