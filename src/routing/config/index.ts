import { HOME_PAGE, PROJECTS_PAGE, ABOUT_PAGE } from "./pages";
import { HOME_PATH, PROJECTS_PATH, ABOUT_PATH } from "./paths";
import { HOME_TITLE, PROJECTS_TITLE, ABOUT_TITLE } from "./titles";
import { IPrivateRoutes } from "../../interfaces";

export const PrivateRoutes: IPrivateRoutes[] = [
  {
    component: HOME_PAGE,
    path: HOME_PATH,
    title: HOME_TITLE
  },
  {
    component: PROJECTS_PAGE,
    path: PROJECTS_PATH,
    title: PROJECTS_TITLE
  },
  {
    component: ABOUT_PAGE,
    path: ABOUT_PATH,
    title: ABOUT_TITLE
  },
]