import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const AddFoods = () => {

    const [user, loading, error] = useAuthState(auth)


    const handleSubmitAdd=(e)=>{
        e.preventDefault()
        const foodsType = e.target.foodsType.value;
        const name = e.target.name.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const foods = {foodsType, name, price, img}


        const url =`https://hotel67767-shamimfl.vercel.app/foods`

        fetch(url, {
            method: "Post",
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(foods)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('Review Added Successfully')
                e.target.reset()
            }
        })
    }


    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='p-5'>
            <form onSubmit={handleSubmitAdd} className='w-full md:w-96 card-shadow  mx-auto text-center  bg-base-100  p-5'>
            <div className='p-5'>
                    <select name='foodsType' required className='p-3 w-full font-bold input input-bordered'>
                        <option selected disabled value="">Category</option>
                        <option value="License To Grill">Grill</option>
                        <option value="Sea Fishes">Sea Fishes</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Juice or Drink Food">Juice or Drink Food</option>
                    </select>
                    <input type="text" placeholder='Name' name='name' required className='p-3 w-full font-bold input input-bordered mt-2' />
                    <input type="text" placeholder='img' name='img' required className='p-3 w-full font-bold input input-bordered mt-2' />
                    <input type="number" placeholder='price' name='price' required className='p-3 w-full font-bold input input-bordered mt-2' />
                </div>
            <button className='btn btn-primary w-full my-5 mx-auto block card-shadow'>Submit</button>
            </form>
        </div>
    );
};

export default AddFoods;