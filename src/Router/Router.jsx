import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

import CategoryNews from "../Components/pages/CategoryNews";
import Home from "../Components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
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
