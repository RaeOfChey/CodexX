import 'bulma/css/bulma.min.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Login from './pages/Login.tsx';
import LandingPage from './pages/LandingPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import WishlistPage from './pages/WishlistPage.tsx'; // Import WishlistPage
import GameDetail from './pages/GameDetailsPage.tsx'; // Import GameDetail Page

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/landing',
        element: <LandingPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile/:userId',
        element: <ProfilePage />
      },
      {
        path: '/wishlist',
        element: <WishlistPage />
      },
      {
        path: '/game/:id', // This will match the dynamic game ID
        element: <GameDetail /> // This is the page that will show the game details
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
