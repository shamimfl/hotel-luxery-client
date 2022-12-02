import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import './RoomsAndRate.css'

const RoomsAndRate = () => {

    const { isLoading, error, data } = useQuery('room data', () =>
        fetch('https://hotel67767-shamimfl.vercel.app/rooms').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10 md:p-10 p-4'>
            <h1 className='uppercase text-3xl font-bold text-center  '>Rooms & Rate</h1>
            <p className='md:w-1/2 text-center mx-auto mt-5  font-medium'>Our objective at Bluebell is to bring together our visitor's <span className='lg:block hidden'> societies and spirits with our own, communicating enthusiasm and liberality in the food we share.</span></p>

            <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10'>
                {
                    data?.map(room => (
                        <section className=''>
                            <div className="card bg-base-100 card-shadow p-3 rounded">
                                <figure><img className='h-60 w-full' src={room?.img} alt="Shoes" /></figure>
                                <div className="p-5">
                                    <div className='flex justify-between gap-5 w-full items-center '>
                                    <h2 className="card-title uppercase">{room?.roomType}</h2>
                                    <p className='text-orange-500 badge'>70+ Rooms</p>
                                    </div>
                                    <p className='text-xl'>${room?.price}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/book/${room?._id}`} className="btn btn-primary card-shadow">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                    ))
                }
            </section>
        </div>
    );
};

export default RoomsAndRate;