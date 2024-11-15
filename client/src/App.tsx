import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <WishlistProvider>
      <div className="container">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </WishlistProvider>
  );
}

export default App;
