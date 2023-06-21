import { HOC } from "../../components";
import { HomePage, ProjectsPage, AboutPage, ProjectPage } from "../../pages";

const wrapPageWithHOC = (component: () => JSX.Element): JSX.Element => {
  return HOC({ Component: component })
}

export const HOME_PAGE = wrapPageWithHOC(HomePage)
export const PROJECTS_PAGE = wrapPageWithHOC(ProjectsPage)
export const ABOUT_PAGE = wrapPageWithHOC(AboutPage)
export const PROJECT_PAGE = wrapPageWithHOC(ProjectPage)