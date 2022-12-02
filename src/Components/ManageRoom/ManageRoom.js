import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';


const ManageRoom = () => {
    const [room, setRooms] = useState([])
    const [user, loading, error] = useAuthState(auth)

   


    const handleDeleteRooms = (e) => {
        fetch(`https://hotel67767-shamimfl.vercel.app/manageData/${e}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(e)

    }

    useEffect(() => {
        fetch(`https://hotel67767-shamimfl.vercel.app/manage/${user?.email}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [user, handleDeleteRooms])
    

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message)
    }

    return (
        <section className=''>
            <h1 className='text-xl text-center'>My Booking Room : {room.length}</h1>
            <section className='grid lg:grid-cols-3 gap-5 mt-10'>
                {
                    room.length > 0 ? room?.map(rooms => (
                        <div className='p-5 card-shadow'>
                            <p>Room Code: <span className='text-primary'>{rooms._id}</span></p>

                            <div>
                                <p className='mt-2'>From: {rooms?.stayFrom}</p>
                                <p className='mt-2'>To  : {rooms?.stayTo}</p>
                                <button onClick={() => handleDeleteRooms(rooms._id)} className='btn mt-3 card-shadow-3 text-warning '>Cancel</button>
                                <button  className='btn mt-3 card-shadow-2 btn-primary block mx-auto btn-wide'>Pay now</button>
                            </div>
                        </div>
                    )) : <Loading></Loading> 
                }
            </section>
        </section>
    );
};

export default ManageRoom;