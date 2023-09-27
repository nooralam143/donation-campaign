import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../header/Navbar';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;