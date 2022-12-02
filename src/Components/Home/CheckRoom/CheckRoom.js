import React from 'react';

const CheckRoom = () => {
    return (
        <div className='p-5'>
            <div className='mt-5 grid lg:grid-cols-5 md:grid-cols-2 bg-base-100 card-shadow  rounded p-10'>
                <div className='p-5'>
                    <input className='p-3 w-full font-bold input input-bordered' type="date"/>
                </div>
                <div className='p-5 font-bold'>
                    <input className='p-3 w-full font-bold input input-bordered' type="date"/>
                </div>
                <div className='p-5'>
                    <select className='p-3 w-full font-bold input input-bordered'>
                        <option value="Adult">Adult</option>
                        <option value="Adult">1</option>
                        <option value="Adult">2</option>
                        <option value="Adult">3</option>
                        <option value="Adult">4</option>
                        <option value="Adult">5</option>
                    </select>
                </div>
                <div className='p-5'>
                    <select className='p-3 w-full font-bold input input-bordered'>
                        <option value="Adult">Children</option>
                        <option value="Adult">1</option>
                        <option value="Adult">2</option>
                        <option value="Adult">3</option>
                        <option value="Adult">4</option>
                        <option value="Adult">5</option>
                    </select>
                </div>
                <div className='p-5'>
                    <button className='btn btn-primary card-shadow'>Check Ability</button>
                </div>
            </div>
        </div>
    );
};

export default CheckRoom;