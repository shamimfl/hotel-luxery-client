import React from 'react';

const Charts = () => {
    return (
        <div className='md:flex  justify-center gap-20 card-shadow h-full items-center mt-10 md:mt-3'>
            <div className='mt-5 py-3'>
            <div className="radial-progress  rounded-full p-2 h-40 w-40 card-shadow round" style={{ "--value": 200 }}>200+</div>
            <h1 className='font-bold text-xl mt-2  px-3 my-3 rounded-3xl'>Total Rooms</h1>
            <button className='btn btn-primary card-shadow'>Details</button>
            </div>
            <div className='mt-5 py-3'>
            <div className="radial-progress  rounded-full p-2 h-40 w-40 card-shadow round" style={{ "--value": 70 }}>70%</div>
            <h1 className='font-bold text-xl mt-2  px-3 my-3 rounded-3xl'>Now Rooms Available</h1>
            <button className='btn btn-primary card-shadow'>Details</button>
            </div>
            <div className='mt-5 py-3'>
            <div className="radial-progress  rounded-full p-2 h-40 w-40 card-shadow round" style={{ "--value": 100 }}>100+</div>
            <h1 className='font-bold text-xl mt-2  px-3 my-3 rounded-3xl'>Our Per Users</h1>
            <button className='btn btn-primary card-shadow'>Details</button>
            </div>
        </div>
    );
};

export default Charts;