import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './config'
import { PrivateRoute } from './route'
import { IPrivateRoutes } from '../interfaces'

const RoutesWrapper = () => {
  const defaultPath: string = '/'

  return (
    <Routes>
      {
        PrivateRoutes.map((route: IPrivateRoutes) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))
      }
      <Route path='*' element={<Navigate to={defaultPath} replace />} />
    </Routes>
  )
}

export default RoutesWrapper