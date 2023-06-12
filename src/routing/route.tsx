import { Route, RouteProps } from 'react-router-dom'

export const PrivateRoute = ({ element: Component, ...rest }: RouteProps) => {
  // Any possible checks for private route
  if (!Component) {
    return <></>
  }

  return <Route path={rest.path} element={Component} />
}