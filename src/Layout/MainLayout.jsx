import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-full min-h-screen'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;