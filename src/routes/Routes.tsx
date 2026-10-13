import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/app/home/index'))
const About = lazy(() => import('@/app/about/index'))
const Experience = lazy(() => import('@/app/experience/index'))
const Knowledge = lazy(() => import('@/app/knowledge/index'))
const Architecture = lazy(() => import('@/app/architecture/index'))
const Trust = lazy(() => import('@/app/trust/index'))
const Privacy = lazy(() => import('@/app/privacy/index'))
const Contact = lazy(() => import('@/app/contact/index'))
const Platform = lazy(() => import('@/app/platform/index'))
const Error404 = lazy(() => import('@/app/error-404/index'))

export const AllRoutes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/home',
    name: 'HomeAlias',
    element: <Navigate to="/" replace />,
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
  },
  {
    path: '/experience',
    name: 'Experience',
    element: <Experience />,
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    element: <Knowledge />,
  },
  {
    path: '/architecture',
    name: 'Architecture',
    element: <Architecture />,
  },
  {
    path: '/trust',
    name: 'Trust',
    element: <Trust />,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    element: <Privacy />,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
  },
  {
    path: '/platform',
    name: 'Platform',
    element: <Platform />,
  },
  {
    path: '/error-404',
    name: 'Error404',
    element: <Error404 />,
  },
  {
    path: '*',
    name: 'NotFound',
    element: <Navigate to="/error-404" replace />,
  },
]
