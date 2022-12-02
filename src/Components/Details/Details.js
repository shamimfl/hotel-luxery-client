import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const Details = () => {
    const [details, setDetails] = useState([])
    const { _id } = useParams()
    const [selected, setSelected] = useState(new Date());
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://hotel67767-shamimfl.vercel.app/book/${_id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])


    const handleBookRoom =(e)=>{
        e.preventDefault()
        const email = user.email;
        const name = user.displayName;
        const Room_id = e.target._id.value;
        const phone = e.target.phone.value;
        const Adult= e.target.Adult.value;
        const children = e.target.children.value;
        const stayFrom = e.target.stayFrom.value;
        const stayTo = e.target.stayTo.value;
        const status = e.target.status.value;
        const book = {email, name, Room_id, phone, Adult, children, stayFrom, stayTo, status}
        console.log(book)
        fetch('https://hotel67767-shamimfl.vercel.app/booking',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('Processing Booking')
                navigate('/checkOut')
            }
        })
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message)
    }

    return (
        <div className='p-5'>
            <div className='md:flex justify-evenly'>
                <img className='md:w-1/2 md:h-96 rounded' src={details[0]?.img} alt="" />
                <DayPicker
                    selected={selected}
                    onSelect={setSelected}
                    className='card-shadow'></DayPicker>
            </div>
            <section className='md:flex justify-center items-center gap-5'>
                <div className='md:w-1/2 '>
                    <h1 className='text-xl text-center font-bold'>Rooms Feature</h1>
                    <div>
                        <h1 className='text-3xl my-5'>{details[0]?.roomType}</h1>
                        <h1 className=''>Tv : {details[0]?.Tv}</h1>
                        <h1 className=''>Ac : {details[0]?.Ac}</h1>
                        <h1 className=''>coffee Maker : {details[0]?.coffee}</h1>
                        <h1 className=''>beds: {details[0]?.beds}</h1>
                        <h1 className='mt-10'>Description : {details[0]?.desc}</h1>
                        <button className='btn btn-primary mt-5 card-shadow'>READ More</button>
                    </div>
                </div>
                <form onSubmit={handleBookRoom} className='md:w-1/2 mx-auto p-5 card-shadow  my-20'>
                    <h1>Fill The input by veiled information </h1>
                    <span className='md:flex gap-5'>
                        <input className='input input-bordered w-full mt-2' required type="text" placeholder='Name' readOnly defaultValue={user.displayName} />
                        <input className='input input-bordered w-full mt-2' required type="email" placeholder='Email' readOnly defaultValue={user.email} />
                    </span>
                    <span className='md:flex gap-5'>
                        <input className='input input-bordered w-full mt-2' required name='_id' type="text" placeholder='Room id' readOnly defaultValue={details[0]?._id} />
                        <input className='input input-bordered w-full mt-2' required name='phone' type="number" placeholder='+880 (Enter your phone)' />
                    </span>

                    <span className='md:flex gap-5'>
                        <input className='input input-bordered w-full mt-2'  type="number" placeholder='Varchar Code (optional)' />
                        <input className='input input-bordered w-full mt-2' required type="number" name='Adult' placeholder='Adult (How many Person)' />
                    </span>
                    <span className='md:flex gap-5 '>
                        <select name="status" required className='w-full input input-bordered mt-2' id="">
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                        </select>
                        <input required className='input input-bordered w-full mt-2' type="number" name='children' placeholder='Children (How many Person)' />
                    </span>
                    <section className='md:flex justify-between gap-5 items-center'>
                        <div className='mt-4 flex gap-5 items-center'>
                            <label htmlFor="from">From</label>
                            <input required type="date" name="stayFrom" className='input input-bordered w-full' id='from' />
                        </div>
                        <div className='mt-4 flex gap-5 items-center'>
                            <label htmlFor="to">To</label>
                            <input required type="date" name="stayTo" className='input input-bordered w-full' id='to' />
                        </div>
                    </section>
                    <button className='btn card-shadow btn-primary mt-10 text-center'>Place Booking</button>
                </form>
            </section>
        </div>
    );
};

export default Details;