import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "./components/Layouts/AppLayout";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { resumeBuildrUrl } from "./config/builderUrls";
import ResumeBuilder from "./pages/ResumeBuilder";
import { builder_urls } from "./config/builderUrls";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: resumeBuildrUrl,
    element: <ResumeBuilder />,
    children: [
      ...builder_urls.map((link) => ({
        path: resumeBuildrUrl + link.url,
        element: <div>{link.title}</div>,
      })),
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
