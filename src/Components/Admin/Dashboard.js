import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='md:flex justify-between relative p-10'>
            <div className='md:1/4'>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/'>Home</Link>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/add_foods'>Add Foods</Link>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/gallery'>Gallery</Link>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/add_rooms'>Add Rooms</Link>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/manage_room'>Manage Room Room</Link>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/add_review'>Add Review</Link>
                <Link className='mt-3 btn mx-auto card-shadow  btn-wide flex items-center mb-3' to='/dashboard/foods'>Foods Request</Link>
            </div>
            
            <div className='text-center md:w-3/4'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;