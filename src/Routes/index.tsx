import Landing from "@/pages/Landing";
// import Landing from "@/pages/Landing";
import CourseDetail from "@/pages/MostPopular/CourseDetail";
import { useRoutes } from "react-router-dom";

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/course/:slug",
      element: <CourseDetail />,
    },
  ],
};

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
