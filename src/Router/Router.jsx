import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },

  {
    path: "/auth",
    element: <div>This is Auth</div>,
  },
  {
    path: "/news",
    element: <div>This is news</div>,
  },
  {
    path: "/*",
    element: <div>Error404</div>,
  },
]);

export default router;
