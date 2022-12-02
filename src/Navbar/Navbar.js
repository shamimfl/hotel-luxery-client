import React, { useState } from 'react';
import './Navbar.css'
import logo from '../img/logo.webp'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import Loading from '../Components/Loading/Loading';
import {signOut} from 'firebase/auth'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const [user, loading, error] = useAuthState(auth)

    if(loading){
        return <Loading></Loading>
    }



    return (
        <div className='sticky top-0 z-50  bg-base-100 '>
            <div className='md:flex justify-between items-center     '>

                <div className='flex justify-between p-5 items-center z-50'>
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                    <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>

                        <div className='card-shadow'>
                            <div className='bg-primary  w-5 h-1'></div>
                            <div className='bg-primary  w-5 h-1 mt-1'></div>
                            <div className='bg-primary  w-5 h-1 mt-1'></div>
                        </div>
                    </div>
                </div>
                <ul className={`md:flex justify-end items-center bg-base-100  z-20 gap-5 absolute p-5 md:static  w-full duration-500 ease-in ${open ? 'top-20' : 'left-[-1020px]'}`}>
                    <li>{user? user?.displayName: ''}</li>
                    <Link to='/restaurant' className=' font-bold block text-start'>Restaurant</Link>
                    <Link to='/dashboard' className=' font-bold block text-start   '>Dashboard</Link>
                    {
                    user ? 
                    <button onClick={()=>signOut(auth)} className='btn  btn-warning card-shadow-3'>logout</button> :
                    <Link to='/login' className=' font-bold block text-start   '>Login</Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;