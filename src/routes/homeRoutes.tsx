import { Home } from "@pages/home";
import routePath from "./routePath";

import { RouteType } from "@types";

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
];

export default homeRoutes;
