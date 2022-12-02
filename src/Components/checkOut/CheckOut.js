import React, { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const CheckOut = () => {
    const [code, setCode] = useState('')
    const [user, loading, error] = useAuthState(auth)

    useEffect(()=>{
        fetch(`https://hotel67767-shamimfl.vercel.app/booking/${user?.email}`)
        .then(res=> res.json())
        .then(data=> setCode(data._id))
    },[user])

    return (
        <section className='h-[80vh] flex items-center'>
            <div className='w-96 mx-auto my-auto card-shadow p-5 text-center'>
            <h1><CheckIcon className='bg-primary rounded-full text-center'/> Booked Your Room</h1>
            <p className='my-4'>Your Temporary Room Code: <br /> <br /> <span className='text-primary'>{code}</span> </p>
            <p>Collect This code when you will take your room. It will be needed</p>
            <Link to='/' className='btn uppercase card-shadow mt-5'>Go to home</Link>
            </div>
        </section>
    );
};

export default CheckOut;