import MainLayout from '@/app/MainLayout'
import { Route, Routes } from 'react-router-dom'
import { AllRoutes } from './Routes'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {AllRoutes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Routes>
    </>
  )
}

export default AppRoutes
