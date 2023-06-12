import { HOME_PAGE, PROJECTS_PAGE } from "./pages";
import { HOME_PATH, PROJECTS_PATH } from "./paths";
import { IPrivateRoutes } from "../../interfaces";

export const PrivateRoutes: IPrivateRoutes[] = [
  {
    component: HOME_PAGE,
    path: HOME_PATH
  },
  {
    component: PROJECTS_PAGE,
    path: PROJECTS_PATH
  }
]