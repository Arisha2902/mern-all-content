
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Params from './components/param';
import { useParams } from 'react-router-dom';
import Mock from './components/Mock';
import Courses from './components/Courses';
import NotFound from './components/NotFound';
// import { useParams } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
      <Navbar />
      < Home />
    </div>
      // <Home />,
    },
    {
      path: '/about', 
      element:
      <div>
      <Navbar />
      < About />
    </div>
      // <About />,
    },
    {
      path: '/dashboard',
      element:  
      <div>
        <Navbar />
        < Dashboard />
      </div>,
      children:[
        {
          path:'courses',
          element: <Courses />
        },
        {
          path:'mock-test',
          element: <Mock />
        }
        
      ]
    },
    {
      path: '/student/:id',
      element:
      <div>
        <Navbar />
        < Params />
      </div>
    },
    {
      path: '*',
      element: < NotFound />
    }
  ]
);

function App() {
 

  return (
  <div>
    <RouterProvider router={router} />
    {/* < Navbar /> */}
  </div>
  )
}

export default App
