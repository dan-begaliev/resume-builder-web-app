import { createBrowserRouter, Navigate } from "react-router-dom";
import { LandingLayout } from "./components/Layouts/AppLayout";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import ResumeBuilder from "./pages/ResumeBuilder";
import { builder_urls, resumeBuilderUrl } from "./config/builderUrls";
import Finalize from "./pages/ResumeBuilder/components/Finalize";

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
    path: resumeBuilderUrl,
    element: <ResumeBuilder />,
    children: [
      {
        path: "", // Empty path redirects to the contact page
        element: <Navigate to={resumeBuilderUrl + "/contact"} replace />,
      },
      {
        path: resumeBuilderUrl + "/finalize", // Empty path redirects to the contact page
        element: <Finalize />,
      },
      ...builder_urls.map((link) => ({
        path: resumeBuilderUrl + link.url,
        element: <link.element />, // Ensure this is treated as a React component
      })),
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
