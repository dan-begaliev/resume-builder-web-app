import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "./components/Layouts/AppLayout";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BuilderLayout } from "./components/Layouts/BuilderLayout";

const resumeBuildrUrl = "/resume-builder";

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
    element: <BuilderLayout />,
    children: [
      {
        path: "",
        element: <h1>Contact Step</h1>,
      },
      {
        path: resumeBuildrUrl + "/education",
        element: <h1>Education</h1>,
      },
      {
        path: resumeBuildrUrl + "/skills",
        element: <h1>Skills</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
