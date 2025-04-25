import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'tours',
        element: <Tours />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

export default router;