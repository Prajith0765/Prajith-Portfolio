import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundAnimation />
      <Navbar />
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;