import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Reviews = lazy(() => import('./components/Reviews'));
const Projects = lazy(() => import('./components/Projects'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: '/services',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
    ),
  },
  {
    path: '/reviews',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Reviews />
      </Suspense>
    ),
  },
  {
    path: '/projects',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
    ),
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App; 