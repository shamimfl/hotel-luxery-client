import React from 'react';
import toast from 'react-hot-toast';

const AddGallery = () => {

    const handleSubmitImg=(e)=>{
        e.preventDefault()
        const img = e.target.imgUrl.value;
        const time = new Date().toLocaleTimeString();
        const data ={img, time}
        console.log(data)

        fetch('https://hotel67767-shamimfl.vercel.app/gallery',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
                toast.success('added successfully')
                e.target.reset()
            }
        })

    }

    return (
        <form onSubmit={handleSubmitImg} className='h-96 w-96 mx-auto card-shadow mt-10 text-center p-5 rounded flex flex-wrap items-center'>
            <input name='date'  placeholder='date' className='my-3 input input-bordered w-full' required type="time" />
            <input name='date'  placeholder='date' className='my-3 input input-bordered w-full' required type="date" />
            <input name='imgUrl'  placeholder='Enter your Img url' className='input input-bordered w-full' required type="text" />
            <button className='btn btn-primary card-shadow w-full mt-5'>Submit</button>
        </form>
    );
};

export default AddGallery;