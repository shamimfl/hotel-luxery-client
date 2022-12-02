import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddRooms = () => {


    const handleSubmitAdd =(e)=>{
        e.preventDefault()
        
        const image = e.target.img.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=298d647236c72afda092d79f3b5caa77`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(data=>  postData(data.data.url))



        const postData =(img)=>{
           const roomType =  e.target.roomType.value;
        const adult = e.target.adult.value;
        const children = e.target.children.value;
        const price = e.target.price.value;
        const Ac = e.target.ac.value;
        const Tv = e.target.tv.value;
        const coffee =e.target.coffee.value;
        const beds = e.target.beds.value;
        // const room = e.target.room.value;
        const desc = e.target.desc.value;
        const data = {roomType, adult, children, price, Ac, Tv, coffee, beds, desc, img}
        fetch('https://hotel67767-shamimfl.vercel.app/rooms',{
            method: "POST",
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Added successfully')
                e.target.reset()
            }
        })
        }

    }

    return (
        <form onSubmit={handleSubmitAdd} className=' p-10'>
            <div className='md:flex justify-center items-center my-10'>
                <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/road-cleaning-service-4715617-3932698.png" alt="" />
            </div>
            <div className=' grid lg:grid-cols-3 gap-5 md:grid-cols-2 lg:mb-5'>
                <select name='roomType' className="p-3 w-full font-bold input input-bordered">
                    <option   selected>Room Type</option>
                    <option className='bg-sky-600'>Cupule Room</option>
                    <option className='bg-sky-600'>Single Room</option>
                    <option className='bg-sky-600'>Deluxe Room</option>
                    <option className='bg-sky-600'>Standard Room</option>
                </select>
                <select name='adult' className="  p-3 w-full font-bold input input-bordered">
                    <option   selected>Adult</option>
                    <option className='bg-sky-600'>0</option>
                    <option className='bg-sky-600'>1</option>
                    <option className='bg-sky-600'>2</option>
                    <option className='bg-sky-600'>3</option>
                    <option className='bg-sky-600'>4</option>
                    <option className='bg-sky-600'>5</option>
                </select>
                <select name='children' className="  p-3 w-full font-bold input input-bordered">
                    <option   selected>Children</option>
                    <option className='bg-sky-600'>0</option>
                    <option className='bg-sky-600'>1</option>
                    <option className='bg-sky-600'>2</option>
                    <option className='bg-sky-600'>3</option>
                    <option className='bg-sky-600'>4</option>
                    <option className='bg-sky-600'>5</option>
                </select>
                <select name='ac' className="  p-3 w-full font-bold input input-bordered">
                    <option   selected>Ac</option>
                    <option className='bg-sky-600'>Available</option>
                    <option className='bg-sky-600'>Not Available</option>
                </select>
                <select name='tv' className="  p-3 w-full font-bold input input-bordered">
                    <option   selected>Tv</option>
                    <option className='bg-sky-600'>Available</option>
                    <option className='bg-sky-600'>Not Available</option>
                </select>
                
                <input name='price' type="number" placeholder="Room price" className="p-3 w-full font-bold input input-bordered" />
                <select name='beds' className="  p-3 w-full font-bold input input-bordered">
                    <option   selected>Beds</option>
                    <option className='bg-sky-600'>1</option>
                    <option className='bg-sky-600'>2</option>
                    <option className='bg-sky-600'>3</option>
                    <option className='bg-sky-600'>4</option>
                </select>
                <select name='coffee' className="  p-3 w-full font-bold input input-bordered">
                    <option   selected>Coffee Maker</option>
                    <option className='bg-sky-600'>Available</option>
                    <option className='bg-sky-600'>Not Available</option>
                </select>
               
                <input type="file" name="img" className="p-3 w-full font-bold input input-bordered" />
                
            </div> 
            <textarea  name="desc" placeholder='Description' className='p-3 mt-5 h-24 w-full font-bold input input-bordered'></textarea>
                <button className='btn  btn-primary card-shadow btn-wide mx-auto  block my-5'>Submit</button>
                <Toaster />
        </form>
    );
};

export default AddRooms;