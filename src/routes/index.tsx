import { Route, Routes } from 'react-router-dom'
import { AllRoutes } from './Routes'

const AppRoutes = () => {
  return (
    <Routes>
      {AllRoutes.map((route) => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default AppRoutes
